import {useLoaderData} from "@remix-run/react";
import language from "../modules/language";
import { languages, categories } from "../info.js"

export let loader = () => {
	return {languages, categories}
}

export default function Index() {
	let data = useLoaderData()
	let languages = []
	let categories = []

	for (let lang of data.languages) {
		languages.push(language(lang))
	}

	for (let category of data.categories) {
		categories.push(language(category))
	}

	return (
		<div >
			{
				categories.length == 0 ?
					<></> :
					<>
						<br />
						<h1>
							Categories
						</h1>
						<div className={"remix__page"}>
							{categories}
						</div>
					</>
			}
			{
				languages.length == 0 ?
					<></> :
					<>
						<br />
						<h1>
							Languages
						</h1>
						<div className={"remix__page"}>
							{languages}
						</div>
					</>
			}
		</div>
	);
}
