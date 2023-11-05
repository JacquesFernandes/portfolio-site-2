import {NextPage} from "next";
import {PageLayout} from "../components/page-layout";
import {Section} from "../components/section";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesDown} from '@fortawesome/free-solid-svg-icons'
import Link, {LinkProps} from "next/link";
import {TechStackCol} from "../components/tech-stack-col";
import Image from "next/image";
import {FC} from "react";
import cx from "clsx";

const NextSectionButton: FC<{text: string, anchor: LinkProps['href'], large?: boolean}> = ({ text, anchor, large }) => <Link scroll href={anchor} className={cx("w-full flex flex-row justify-evenly items-center bg-gray-50 text-slate-800 p-1", { 'text-xl': large })} >
	<FontAwesomeIcon icon={faAnglesDown} />
	{text}
	<FontAwesomeIcon icon={faAnglesDown} />
</Link>;

const CareerItem: FC = () => <div className="snap-start min-w-fit max-w-xs sm:mr-5 sm:last:mr-0 flex-1 max-h-full flex flex-col items-center justify-center" >
	{/*Circular image*/}
	<Image
		src="https://picsum.photos/200"
		width={150}
		height={150}
		className="object-cover object-center border rounded-full"
		alt="Graduation"
	/>

	{/*Title*/}
	<h3 className="mt-2 text-xl" >Graduation</h3>

	{/*Detail-summary*/}
	<div
		className="mt-2 w-full max-w-xs max-h-44 overflow-y-auto rounded p-1.5 sm:p-1 bg-white text-slate-700"
	>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis dolor a dolor auctor condimentum. Vivamus condimentum eget purus id mattis. Maecenas eget condimentum felis, vel iaculis purus. Curabitur vestibulum tincidunt nibh. Pellentesque eleifend luctus nunc, vel venenatis lorem laoreet non. Cras porta augue volutpat arcu lacinia, a aliquet felis fermentum. Donec euismod ex ut ante auctor, at suscipit ipsum varius. Curabitur non felis ut metus hendrerit imperdiet. Duis magna lacus, lobortis non mollis eget, convallis eu est. Integer lorem nunc, cursus et ornare vitae, eleifend ut tellus.
		</p>
	</div>
</div>;

const HomePage: NextPage = () => <>
	<PageLayout title="Home" >
		<Section className="flex flex-col justify-between" >
			<h1 className="text-5xl" >
				A Full-Stack <s>Web</s> Developer
			</h1>

			<div className="text-2xl" >
				<p className="italic" >Bring me thine ideas and passion, and I shall turn them into code.</p>
				<p className="mb-1" >- Jacques Fernandes</p>

				<NextSectionButton text="The Stack" anchor="#stack" />
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
			<NextSectionButton text="The Career" anchor="#career" large />
		</Section>

		<Section id="career" className="flex flex-col justify-between" >
			<h2 className="text-3xl" >The Career</h2>

			<div className="mt-3 flex-1 flex flex-row snap-x overflow-x-auto" >
				<CareerItem />
				<CareerItem />
			</div>
			<NextSectionButton text="The Person" anchor="#person" large />
		</Section>
	</PageLayout>
</>

export default HomePage;