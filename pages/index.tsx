import {NextPage} from "next";
import {PageLayout} from "../components/page-layout";
import {Section} from "../components/section";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import {TechStackCol} from "../components/tech-stack-col";

const HomePage: NextPage = () => <>
	<PageLayout title="Home" >
		<Section className="flex flex-col justify-between" >
			<h1 className="text-5xl" >
				A Full-Stack <s>Web</s> Developer
			</h1>

			<div className="text-2xl" >
				<p className="italic" >Bring me thine ideas and passion, and I shall turn them into code.</p>
				<p className="mb-1" >- Jacques Fernandes</p>

				<Link scroll href="#stack" className="w-full flex flex-row justify-evenly items-center bg-gray-50 text-slate-800 p-1" >
					<FontAwesomeIcon icon={faAnglesDown} />
					The Stack
					<FontAwesomeIcon icon={faAnglesDown} />
				</Link>
			</div>
		</Section>

		<Section id="stack" className="flex flex-col justify-between" >
			<h2 className="text-3xl" >The Stack</h2>
			<p>Click on a technology to know more</p>

			<div className="mt-3 flex-1 w-full flex flex-row space-x-3 snap-x overflow-x-auto" >
				<TechStackCol
					title="Front-end/client"
					categories={[
						{
							name: "Web",
							tech: [
								{name: "React JS", link: "/tech/react-js"},
								{name: "Next JS", link: "/tech/next-js"},
								{name: "HTML5", link: "/tech/html5"},
								{name: "(S)CSS", link: "/tech/scss"},
							]
						},
						{
							name: "Mobile",
							tech: [
								{name: "Flutter", link: "/tech/flutter"},
							]
						}
					]}
				/>

				<TechStackCol
					title="Back-end/server"
					categories={[
						{
							name: "Frameworks",
							tech: [
								{name: "NextJS", link: "/tech/next-js"},
								{name: "Laravel", link: "/tech/laravel"},
								{name: "MERN", link: "/tech/mern"},
								{name: "X/LAMPP", link: "/tech/xampp"},
							],
						},
						{
							name: "Languages",
							tech: [
								{name: "NodeJS", link: "/tech/node-js"},
								{name: "PHP", link: "/tech/php"},
								{name: "Python", link: "/tech/python"}
							]
						},
						{
							name: "Servers",
							tech: [
								{name: "Apache", link: "/tech/apache"},
								{name: "Nginx", link: "/tech/nginx"}
							],
						}
					]}
				/>

				<TechStackCol
					title="Server stack/hardware"
					categories={[
						{
							name: "Operating Systems",
							tech: [
								{name: "Ubuntu", link: "/tech/ubuntu"},
								{name: "Fedora", link: "/tech/fedora"}
							],
						},
						{
							name: "Cloud providers",
							tech: [
								{name: "AWS", link: "/tech/aws"},
								{name: "Azure", link: "/tech/azure"}
							],
						}
					]}
				/>
			</div>
			<Link scroll href="#career" className="w-full flex flex-row justify-evenly items-center bg-gray-50 text-slate-800 p-1 text-xl" >
				<FontAwesomeIcon icon={faAnglesDown} />
				The Career
				<FontAwesomeIcon icon={faAnglesDown} />
			</Link>
		</Section>

		<Section id="career" className="flex flex-col justify-between" >
			<h2 className="text-3xl" >The Career</h2>
			<p>Click on a technology to know more</p>

			<div className="mt-3 flex-1" >

			</div>
			<Link scroll href="#person" className="w-full flex flex-row justify-evenly items-center bg-gray-50 text-slate-800 p-1 text-xl" >
				<FontAwesomeIcon icon={faAnglesDown} />
				The Person
				<FontAwesomeIcon icon={faAnglesDown} />
			</Link>
		</Section>
	</PageLayout>
</>

export default HomePage;