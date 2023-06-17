import {NextPage} from "next";
import {PageLayout} from "../components/page-layout";
import {TextScroller} from "../components/text-scroller";

const texts = [
	"an android app?",
	"an iOS app?",
	"a brochure-ware website?",
	"a complex web-based system?"
];

const HomePage: NextPage = () => <>
	<PageLayout title="Home" >
		<section className="h-screen w-full flex flex-col overflow-x-hidden" >
			<div className="flex-1 flex flex-col justify-center items-center text-5xl space-y-5">
				<p>
					<span>Looking to build </span>
					<TextScroller texts={texts} />
				</p>
			</div>

			<div className="w-full p-3 flex flex-row flex-nowrap justify-between items-end" >
				<nav>
					<ul className="space-y-2 text-xl" >
						<li className="transition-all hover:text-3xl" >Brief</li>
						<li className="transition-all hover:text-3xl" >Tech</li>
						<li className="transition-all hover:text-3xl" >Projects</li>
					</ul>
				</nav>
				<h1 className="text-right text-3xl" >
					<span>Jacques </span><br/>
					<span>Fernandes</span>
				</h1>
			</div>
		</section>
	</PageLayout>
</>

export default HomePage;