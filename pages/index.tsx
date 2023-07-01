import {NextPage} from "next";
import {PageLayout} from "../components/page-layout";
import {TextScroller} from "../components/text-scroller";
import {Section} from "../components/section";
import {Nav} from "../components/nav";
import {homeTexts} from "../constants/home-texts";

const HomePage: NextPage = () => <>
	<PageLayout title="Home" >
		<Section className="flex-none grid gap-3 grid-cols-1 grid-rows-[1fr_auto_auto] md:grid-cols-[auto_1fr] md:grid-rows-[1fr_1fr]" >
			<div className="order-1 md:order-2 md:flex md:justify-center md:items-end">
				<p className="w-fit max-w-2xl xl:max-w-none text-5xl p-3 md:p-0" >
					<span>Looking to build </span>
					<TextScroller texts={homeTexts} />
				</p>
			</div>

			<h1 className="order-2 md:order-3 w-full text-3xl md:flex md:justify-center md:items-start md:space-x-2.5" >
				<span>Jacques </span>
				<span>Fernandes</span>
			</h1>

			<Nav blockElement className="order-3 md:order-1 md:row-span-2" />
		</Section>
	</PageLayout>
</>

export default HomePage;