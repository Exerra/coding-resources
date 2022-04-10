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
					name: "Under The Radar",
					url: "https://www.relay.fm/radar/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "Empower Apps",
					url: "https://www.empowerapps.show/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "Swift By Sundell",
					url: "https://www.swiftbysundell.com/podcast/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "Waiting For Review",
					url: "https://www.waitingforreview.com/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "Inside iOS Dev",
					url: "https://insideiosdev.com/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "AppForce1",
					url: "https://appforce1.net/podcast/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "Launched",
					url: "https://launchedfm.com/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "Core Intuition",
					url: "https://coreint.org/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "Raywenderlich",
					url: "https://www.raywenderlich.com/podcast",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "Fireside Swift",
					url: "https://firesideswift.fireside.fm/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "Stacktrace",
					url: "https://9to5mac.com/guides/stacktrace/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "AppStories",
					url: "https://appstories.net/",
					category: "Podcast",
					tag: "",
					Date: ""
				},
				{
					name: "App Airport",
					url: "https://airport.community/slack/",
					category: "Community",
					tag: "",
					Date: ""
				},
				{
					name: "iOS Developers",
					url: "https://ios-developers.io/",
					category: "Community",
					tag: "",
					Date: ""
				},
				{
					name: "Try Swift World",
					url: "https://www.tryswift.co/world/",
					category: "Community",
					tag: "",
					Date: ""
				},
				{
					name: "Hacking With Swift",
					url: "https://hackingwithswift.slack.com/",
					category: "Community",
					tag: "",
					Date: ""
				},
				{
					name: "Core Intuition",
					url: "http://chat.coreint.org/",
					category: "Community",
					tag: "",
					Date: ""
				},
				{
					name: "CocoaHeads",
					url: "http://cocoaheads.org/",
					category: "Community",
					tag: "",
					Date: ""
				},
				{
					name: "AppKit Abuser",
					url: "https://appkit-abusers.herokuapp.com/",
					category: "Community",
					tag: "",
					Date: ""
				},
				{
					name: "SFSymbol",
					url: "https://developer.apple.com/sf-symbols/",
					category: "Tool",
					tag: "designicon",
					Date: ""
				},
				{
					name: "Hero Icons",
					url: "https://heroicons.dev/",
					category: "Tool",
					tag: "designicon",
					Date: ""
				},
				{
					name: "System UIcons",
					url: "https://systemuicons.com/",
					category: "Tool",
					tag: "designicon",
					Date: ""
				},
				{
					name: "WTF Auto Layout",
					url: "https://www.wtfautolayout.com/",
					category: "Tool",
					tag: "auto layout",
					Date: ""
				},
				{
					name: "Quick Type",
					url: "https://app.quicktype.io/",
					category: "Tool",
					tag: "json",
					Date: ""
				},
				{
					name: "NSDateFormatter",
					url: "https://nsdateformatter.com/",
					category: "Tool",
					tag: "dateformatter",
					Date: ""
				},
				{
					name: "Screen Sizes",
					url: "https://www.screensizes.app/",
					category: "Reference",
					tag: "screensizes",
					Date: ""
				},
				{
					name: "iOS Dev Directory",
					url: "https://iosdevdirectory.com/",
					category: "Reference",
					tag: "directory",
					Date: ""
				},
				{
					name: "Swift Package Index",
					url: "https://swiftpackageindex.com/",
					category: "Reference",
					tag: "package",
					Date: ""
				},
				{
					name: "Apple Colors",
					url: "https://mar.codes/apple-colors",
					category: "Reference",
					tag: "color",
					Date: ""
				},
				{
					name: "Design Checklist",
					url: "https://www.checklist.design/",
					category: "Tool",
					tag: "checklistdesign",
					Date: ""
				},
				{
					name: "Paywall Screens",
					url: "https://www.paywallscreens.com/",
					category: "Showcase",
					tag: "designpaywallscreenshot",
					Date: ""
				},
				{
					name: "Mobbin",
					url: "https://mobbin.design/browse/ios/apps",
					category: "Showcase",
					tag: "designscreenshot",
					Date: ""
				},
				{
					name: "Happy Hues",
					url: "https://www.happyhues.co/",
					category: "Tool",
					tag: "colordesign",
					Date: ""
				},
				{
					name: "Regex 101",
					url: "https://regex101.com/",
					category: "Tool",
					tag: "regex",
					Date: ""
				},
				{
					name: "Cubic Bezier",
					url: "https://cubic-bezier.com/#.17,.67,.83,.67",
					category: "Tool",
					tag: "bezier",
					Date: ""
				},
				{
					name: "Proxyman",
					url: "https://proxyman.io/",
					category: "Tool",
					tag: "debugmacnetwork",
					Date: ""
				},
				{
					name: "RevenueCat",
					url: "https://www.revenuecat.com/",
					category: "Tool",
					tag: "iapservice",
					Date: ""
				},
				{
					name: "Sherlock",
					url: "https://sherlock.inspiredcode.io/",
					category: "Tool",
					tag: "debugmac",
					Date: ""
				},
				{
					name: "Reveal",
					url: "https://revealapp.com/",
					category: "Tool",
					tag: "debugmac",
					Date: ""
				},
				{
					name: "Previewed",
					url: "https://previewed.app/",
					category: "Tool",
					tag: "mockup",
					Date: ""
				},
				{
					name: "Envato",
					url: "https://www.envato.com/",
					category: "Tool",
					tag: "assetdesign",
					Date: ""
				},
				{
					name: "Shape",
					url: "https://shape.so/",
					category: "Tool",
					tag: "designiconillustration",
					Date: ""
				},
				{
					name: "DrawKit",
					url: "https://drawkit.com/",
					category: "Tool",
					tag: "designillustration",
					Date: ""
				},
				{
					name: "unDraw",
					url: "https://undraw.co/",
					category: "Tool",
					tag: "designiconillustration",
					Date: ""
				},
				{
					name: "Xcode Dev Cleaner",
					url: "https://github.com/vashpan/xcode-dev-cleaner",
					category: "Tool",
					tag: "cleanermac",
					Date: ""
				},
				{
					name: "DevToys",
					url: "https://github.com/ObuchiYuki/DevToysMac",
					category: "Tool",
					tag: "",
					Date: ""
				},
				{
					name: "Code With Chris",
					url: "https://www.youtube.com/user/CodeWithChris",
					category: "Youtube",
					tag: "",
					Date: ""
				},
				{
					name: "Control Room",
					url: "https://github.com/twostraws/ControlRoom",
					category: "Tool",
					tag: "macsimulator",
					Date: ""
				},
				{
					name: "Asset Catalog Tinkerer",
					url: "https://github.com/insidegui/AssetCatalogTinkerer",
					category: "Tool",
					tag: "asset catalogmac",
					Date: ""
				},
				{
					name: "Design Code",
					url: "https://www.youtube.com/c/DesignCodeTeam",
					category: "Youtube",
					tag: "",
					Date: ""
				},
				{
					name: "Kavsoft",
					url: "https://www.youtube.com/c/Kavsoft",
					category: "Youtube",
					tag: "swiftui",
					Date: ""
				},
				{
					name: "Hacking With Swift",
					url: "https://www.youtube.com/channel/UCmJi5RdDLgzvkl3Ly0DRMlQ",
					category: "Youtube",
					tag: "",
					Date: ""
				},
				{
					name: "Lets Build That App",
					url: "https://www.youtube.com/channel/UCuP2vJ6kRutQBfRmdcI92mA",
					category: "Youtube",
					tag: "",
					Date: ""
				},
				{
					name: "SeanAllen",
					url: "https://www.youtube.com/c/SeanAllen",
					category: "Youtube",
					tag: "",
					Date: ""
				},
				{
					name: "Vincent Pradeilles",
					url: "https://www.youtube.com/c/VincentPradeilles",
					category: "Youtube",
					tag: "",
					Date: ""
				},
				{
					name: "tundsdev",
					url: "https://www.youtube.com/c/tundsdev",
					category: "Youtube",
					tag: "",
					Date: ""
				},
				{
					name: "Scrnshts",
					url: "https://scrnshts.club/",
					category: "Tool",
					tag: "designscreenshot",
					Date: ""
				},
				{
					name: "App Airport",
					url: "https://airport.community/",
					category: "Showcase",
					tag: "",
					Date: ""
				},
				{
					name: "MacOS Icons",
					url: "https://macosicons.com/",
					category: "Showcase",
					tag: "icon",
					Date: ""
				},
				{
					name: "SwiftUI Views",
					url: "https://swiftuiviews.dev/",
					category: "Showcase",
					tag: "swiftui",
					Date: ""
				},
				{
					name: "Indie Catalog",
					url: "https://indiecatalog.app/",
					category: "Showcase",
					tag: "",
					Date: ""
				},
				{
					name: "Dribbble",
					url: "https://dribbble.com/",
					category: "Showcase",
					tag: "design",
					Date: ""
				},
				{
					name: "Hacking With Swift+",
					url: "https://www.hackingwithswift.com/plus",
					category: "Subscription",
					tag: "",
					Date: ""
				},
				{
					name: "Design Code",
					url: "https://designcode.io/",
					category: "Subscription",
					tag: "",
					Date: ""
				},
				{
					name: "Raywenderlich Videos",
					url: "https://www.raywenderlich.com/ios/videos",
					category: "Subscription",
					tag: "",
					Date: ""
				},
				{
					name: "Cocoacasts Plus",
					url: "https://cocoacasts.com/cocoacasts-plus",
					category: "Subscription",
					tag: "",
					Date: ""
				},
				{
					name: "PointFree",
					url: "https://www.pointfree.co/",
					category: "Subscription",
					tag: "",
					Date: ""
				},
				{
					name: "Swift Talk",
					url: "https://talk.objc.io/",
					category: "Subscription",
					tag: "",
					Date: ""
				},
				{
					name: "NSScreencast",
					url: "https://nsscreencast.com/episodes",
					category: "Subscription",
					tag: "",
					Date: ""
				},
				{
					name: "A Best in Class iOS App Book",
					url: "https://www.bestinclassiosapp.com/",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "Design Pattern by Tutorial",
					url: "https://www.raywenderlich.com/books/design-patterns-by-tutorials",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "Thinking in SwiftUI",
					url: "https://www.objc.io/books/thinking-in-swiftui/",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "App Design",
					url: "https://www.raywenderlich.com/books/app-design-apprentice",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "Advanced Swift",
					url: "https://www.objc.io/books/advanced-swift/",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "Advanced iOS Architecture",
					url: "https://www.raywenderlich.com/books/advanced-ios-app-architecture",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "Flight School",
					url: "https://flight.school/",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "Effective ObjC",
					url: "https://www.effectiveobjectivec.com/",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "ProSwift",
					url: "https://www.hackingwithswift.com/store/pro-swift",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "iOS Access Book",
					url: "https://www.iosaccessbook.com/",
					category: "Book",
					tag: "",
					Date: ""
				},
				{
					name: "Stanford CS 193P",
					url: "https://cs193p.sites.stanford.edu/",
					category: "Course",
					tag: "swiftui",
					Date: ""
				},
				{
					name: "ObjC Issues",
					url: "https://www.objc.io/issues/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "NSHipster",
					url: "https://nshipster.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Hacking With Swift",
					url: "https://www.hackingwithswift.com/100",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Learn To Code",
					url: "https://developer.apple.com/learn/curriculum/",
					category: "Blog",
					tag: "apple",
					Date: ""
				},
				{
					name: "App Dev Training",
					url: "https://developer.apple.com/tutorials/app-dev-training",
					category: "Blog",
					tag: "apple",
					Date: ""
				},
				{
					name: "Kavsoft",
					url: "https://kavsoft.dev/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Sarun",
					url: "https://sarunw.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Swift By Sundell",
					url: "https://www.swiftbysundell.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Donny Wals",
					url: "https://www.donnywals.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Swiftlee",
					url: "https://www.avanderlee.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Use Your Loaf",
					url: "https://useyourloaf.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "App Coda",
					url: "https://www.appcoda.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Swift With Majid",
					url: "https://swiftwithmajid.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Krzysztof Zabłocki",
					url: "http://merowing.info/post/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Ole Begemann",
					url: "https://oleb.net/blog/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Khanlou",
					url: "https://khanlou.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Five Stars",
					url: "https://www.fivestars.blog/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Samwise",
					url: "https://samwize.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Swift Discovery",
					url: "https://onmyway133.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "Yet Another Swift Blog",
					url: "https://www.vadimbulavin.com/",
					category: "Blog",
					tag: "",
					Date: ""
				},
				{
					name: "iOS Dev Weekly",
					url: "https://iosdevweekly.com/",
					category: "Newsletter",
					tag: "",
					Date: ""
				},
				{
					name: "AppCoda Weekly",
					url: "http://digest.appcoda.com/",
					category: "Newsletter",
					tag: "",
					Date: ""
				},
				{
					name: "SwiftUI Weekly",
					url: "http://weekly.swiftwithmajid.com/",
					category: "Newsletter",
					tag: "",
					Date: ""
				},
				{
					name: "App Store Usage",
					url: "https://developer.apple.com/support/app-store/",
					category: "Reference",
					tag: "appstoreweb",
					Date: ""
				},
				{
					name: "Xcode Releases",
					url: "https://xcodereleases.com/",
					category: "Reference",
					tag: "xcode",
					Date: ""
				},
				{
					name: "iOS Resolution",
					url: "https://www.ios-resolution.com/",
					category: "Reference",
					tag: "deviceresolution",
					Date: ""
				},
				{
					name: "Swift Version",
					url: "https://swiftversion.net/",
					category: "Reference",
					tag: "swiftversion",
					Date: ""
				},
				{
					name: "iOS Ref",
					url: "https://iosref.com/res",
					category: "Reference",
					tag: "deviceios",
					Date: ""
				},
				{
					name: "App Review Times",
					url: "https://www.runway.team/appreviewtimes",
					category: "Reference",
					tag: "review",
					Date: ""
				},
				{
					name: "iOS Res",
					url: "http://iosres.com/",
					category: "Reference",
					tag: "deviceios",
					Date: ""
				},
				{
					name: "Swiftly",
					url: "https://swiftly.dev/",
					category: "Reference",
					tag: "swift",
					Date: ""
				},
				{
					name: "Apple Localization",
					url: "https://applelocalization.com/",
					category: "Reference",
					tag: "localization",
					Date: ""
				},
				{
					name: "F*** SwiftUI",
					url: "https://fuckingswiftui.com/",
					category: "Reference",
					tag: "swiftui",
					Date: ""
				},
				{
					name: "NSImage Syntax",
					url: "https://hetima.github.io/fucking_nsimage_syntax/",
					category: "Reference",
					tag: "nsimage",
					Date: ""
				},
				{
					name: "Drawn Xcode Tips",
					url: "https://xcode.tips/",
					category: "Reference",
					tag: "tipsxcode",
					Date: ""
				},
				{
					name: "Xcode Tips",
					url: "https://xcode-tips.github.io/",
					category: "Reference",
					tag: "tipsxcode",
					Date: ""
				},
				{
					name: "Xcode Build Settings",
					url: "https://xcodebuildsettings.com/",
					category: "Reference",
					tag: "settingsxcode",
					Date: ""
				},
				{
					name: "OS Status",
					url: "https://www.osstatus.com/",
					category: "Reference",
					tag: "status",
					Date: ""
				},
				{
					name: "Swift On Tap",
					url: "https://swiftontap.com/",
					category: "Reference",
					tag: "swiftui",
					Date: ""
				},
				{
					name: "Whats New In Swift",
					url: "https://www.whatsnewinswift.com/",
					category: "Reference",
					tag: "swift",
					Date: ""
				},
				{
					name: "SwiftGen",
					url: "https://github.com/SwiftGen/SwiftGen",
					category: "Tool",
					tag: "generateopen source",
					Date: ""
				},
				{
					name: "SwiftLint",
					url: "https://github.com/realm/SwiftLint",
					category: "Tool",
					tag: "lintopen source",
					Date: ""
				},
				{
					name: "SwiftFormat",
					url: "https://github.com/nicklockwood/SwiftFormat",
					category: "Tool",
					tag: "formatteropen source",
					Date: ""
				},
				{
					name: "SFSafeSymbols",
					url: "https://github.com/SFSafeSymbols/SFSafeSymbols",
					category: "Tool",
					tag: "open sourcesfsymbol",
					Date: ""
				},
				{
					name: "SwiftUI-Introspect",
					url: "https://github.com/siteline/SwiftUI-Introspect",
					category: "Tool",
					tag: "open sourceswiftui",
					Date: ""
				},
				{
					name: "Sim Genie",
					url: "https://simgenie.app/",
					category: "Tool",
					tag: "simulator",
					Date: ""
				},
				{
					name: "Apple Marketing Tools",
					url: "https://tools.applemediaservices.com/app-store-promote/",
					category: "Tool",
					tag: "applemarketing",
					Date: ""
				},
				{
					name: "iOSDevUpdates",
					url: "https://www.iosdevupdates.com/",
					category: "Reference",
					tag: "newsupdate",
					Date: ""
				},
				{
					name: "iOS Feeds",
					url: "https://iosfeeds.com/",
					category: "Reference",
					tag: "feediosupdate",
					Date: ""
				},
				{
					name: "Confs Tech",
					url: "https://confs.tech/ios",
					category: "Reference",
					tag: "conference",
					Date: ""
				},
				{
					name: "iOS Code Review",
					url: "https://newsletter.ioscodereview.com/",
					category: "Newsletter",
					tag: "tipsxcode",
					Date: ""
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