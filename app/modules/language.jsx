/*
    Created by Exerra on 07/04/2022
*/

export default function modWithThumbnail({ name, description, link, image }) {
	return (
		<div className={"section clickable"} key={name} onClick={() => { window.location.href = link }}>
			<img src={image} alt={"Thumbnail"} style={{ width: "100%", zIndex: "-1", padding: "0", margin: "0" }} />
			<div className={"content"}>
				<h3 className={"accent"}>{name}</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}