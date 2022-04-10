import {useLoaderData} from "@remix-run/react";
import language from "../modules/language";

export let loader = () => {
	let languages = [
		{
			name: "Swift",
			description: "Useful resources for the Swift programming language",
			link: "/language/swift",
			image: "https://cdn.exerra.xyz/png/languages/swift.png"
		}
	]

	let developmentCategories = [
		{
			name: "iOS Development",
			description: "Useful resources for iOS development",
			link: "/category/ios",
			image: "https://cdn.exerra.xyz/png/languages/swift.png"
		}
	]

	return {languages, developmentCategories}
}

export default function Index() {
	let data = useLoaderData()
	let languages = []
	let categories = []

	console.log(data)

	for (let lang of data.languages) {
		languages.push(language(lang))
	}

	for (let category of data.developmentCategories) {
		categories.push(language(category))
	}

	return (
		<div >
			<br />
			<h1>
				Categories
			</h1>
			<div className={"remix__page"}>
				{categories}
			</div>
			<br />
			<h1>
				Languages
			</h1>
			<div className={"remix__page"}>
				{languages}
			</div>
		</div>
	);
}
