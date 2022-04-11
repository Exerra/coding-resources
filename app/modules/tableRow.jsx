/*
    Created by Exerra on 11/04/2022
*/

export default function tableRow({ name, url, category }) {
	let displayUrl = url.replace(/.{1,20}:\/\//g, "").replace(/www\./g, "") // Shortens the urls shown in the table (https://www.exerra.xyz/demo => exerra.xyz/demo)
	return (
		<tr key={`${name}-${category}`}>
			<th className={"thLeft"}>{name}</th>
			<th className={"thCenter"}><a href={url} target="_blank">{displayUrl}</a></th>
			<th className={"thRight"}>{category}</th>
		</tr>
	)
}