/*
    Created by Exerra on 08/04/2022
*/
import {useLoaderData} from "@remix-run/react";
import { categories, languages } from "../../info"

export let loader = async ({ params }) => {
	let values = new Map()

	let obj = {
		categories,
		languages
	}

	let objToFetch = ""

	if (params.type == "language") objToFetch = "languages"
	else if (params.type == "category") objToFetch = "categories"

	for (let value of obj[objToFetch]) {
		values.set(value.shortName, { name: value.name, description: value.description, resources: value.resources })
	}

	if (!values.has(params.name.toLowerCase())) throw new Response("Not Found", {
		status: 404,
	});

	return await values.get(params.name.toLowerCase())
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