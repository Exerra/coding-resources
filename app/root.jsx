import {
	Links,
	Link,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import style from "~/styles/global.css"

export let links = () => {
	return [
		{rel: "stylesheet", href: style}
	]
}

export const meta = () => ({
	charset: "utf-8",
	title: "Coding resources",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet/>
			</Layout>
		</Document>
	);
}

function Document({children, title}) {
	return (
		<html lang="en">
		<head>
			<meta charSet="utf-8"/>
			<meta name="viewport" content="width=device-width,initial-scale=1"/>
			{title ? <title>{title}</title> : null}
			<Meta/>
			<Links/>
		</head>
		<body>
		{children}
		<ScrollRestoration/>
		<Scripts/>
		{process.env.NODE_ENV === "development" && <LiveReload/>}
		</body>
		</html>
	);
}

function Layout({children}) {
	return (
		<div className="remix-app">
			<header className="remix-app__header">
				<div className="container remix-app__header-content">
					<h2>Coding resources (In-development)</h2>
					<nav aria-label="Main navigation" className="remix-app__header-nav">
						<ul>
							<li>
								<Link to={"/"}>Home</Link>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<div className="remix-app__main">
				<div className="container remix-app__main-content">{children}</div>
			</div>
			<footer className="remix-app__footer">
				<div className="container remix-app__footer-content">
					<p>&copy; Exerra</p>
				</div>
			</footer>
		</div>
	);
}


