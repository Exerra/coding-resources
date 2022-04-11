/*
    Created by Exerra on 08/04/2022
*/
import {useLoaderData} from "@remix-run/react";
import { categories as categoriesArr } from "../../info"

export let loader = async ({ params }) => {
	let categories = new Map()

	for (let category of categoriesArr) {
		categories.set(category.shortName, { name: category.name, description: category.description, resources: category.resources })
	}

	console.log(categories)

	return await categories.get(params.category.toLowerCase())
}

export let meta = (loader) => {
	let data = loader.data

	if (data.status != undefined) {
		return
	}

	return {
		title: data.name,
		description: data.description
	}
}

export default function $category() {
	let data = useLoaderData()

	let resources = []

	for (let resource of data.resources) {
		resources.push(<tr key={resource.name}>
			<th className={"thLeft"}>{resource.name}</th>
			<th className={"thCenter"}><a href={resource.url} target="_blank">{resource.url.replace(/.{1,20}:\/\//g, "").replace(/www\./g, "")}</a></th>
			<th className={"thRight"}>{resource.category}</th>
		</tr>)
	}

	return (
		<>
			<div className={"remix__page"}>
				<main id={"profile"}>
					<div className={"title"}>
						<h1>
							<span className={"accent"}>{data.name}</span>
						</h1>
						<h3>{data.description}</h3>
					</div>
				</main>
			</div>
			<div className={"sectionForTable"}>
				<table>
					<thead>
						<tr>
							<th className={"thLeft"}>Name</th>
							<th className={"thCenter"}>URL</th>
							<th className={"thRight"}>Category</th>
						</tr>
					</thead>
					<tbody>
						{resources}
					</tbody>
				</table>
			</div>
		</>
	)
}