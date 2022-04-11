/*
    Created by Exerra on 07/04/2022
*/
import { Link } from "@remix-run/react"

export default function modWithThumbnail({ name, description, link, image }) {
	return (
		<Link to={link} key={name} style={{ textDecoration: 'none', color: "hsl(0, 0%, 7%)" }}>
			<div className={"section"}>
				<img src={image} alt={"Thumbnail"} style={{ width: "100%", zIndex: "-1", padding: "0", margin: "0" }} />
				<div className={"content"}>
					<h3 className={"accent"}>{name}</h3>
					<p>{description}</p>
				</div>
			</div>
		</Link>
	)
}