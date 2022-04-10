/*
    Created by Exerra on 08/04/2022
*/
import {useLoaderData} from "@remix-run/react";

export let loader = async ({ params }) => {

	let categoriesArr = [
		{
			name: "ios",
			displayName: "iOS",
			description: "Various resources for iOS development",
			resources: [
				{
					name: "Apple Colours",
					url: "https://mar.codes/apple-colors",
					category: "Reference"
				},
				{
					name: "stack overflow",
					url: "https://stackoverflow.com/",
					category: "your mom"
				}
			]
		}
	]

	let categories = new Map()

	for (let category of categoriesArr) {
		categories.set(category.name, { name: category.displayName, description: category.description, resources: category.resources })
	}

	return await categories.get(params.category.toLowerCase())
}

export default function $category() {
	let data = useLoaderData()

	let resources = []

	for (let resource of data.resources) {
		resources.push(<tr key={resource.name}>
			<th className={"thLeft"}>{resource.name}</th>
			<th className={"thCenter"}><a href={resource.url} target="_blank">{resource.url}</a></th>
			<th className={"thRight"}>{resource.category}</th>
		</tr>)
	}

	console.log(data)
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