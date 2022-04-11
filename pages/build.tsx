import {NextPage} from "next";
import {FC} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGlobe, faServer, faMobile} from '@fortawesome/free-solid-svg-icons';

import {PageLayout} from "../components/page-layout";

interface OfferCardProps {
	href: string;
}
const OfferCard: FC<OfferCardProps> = (props) => {
	return(
		<li className="w-full md:h-40 md:w-40 p-2 border transition-all border-white hover:border-transparent bg-transparent hover:bg-white hover:text-gray-900 text-xl font-bold text-center rounded-lg" >
			<a className="h-full w-full flex flex-row md:flex-col justify-start md:justify-center items-center space-x-2 md:space-y-4" href={props.href} >
				{props.children}
			</a>
		</li>
	);
}

const Build: NextPage = () => {
	return(
		<PageLayout title="Build" description="So, what you looking for?" >
			<h2 className="text-3xl mb-1" >So, what are you looking for?</h2>

			<ul className="w-full flex flex-row flex-wrap gap-4 justify-start" >
				<OfferCard href="#server" >
					<FontAwesomeIcon icon={faServer} />
					<p>Set up a (Linux) server</p>
				</OfferCard>
				<OfferCard href="#website" >
					<FontAwesomeIcon icon={faGlobe} />
					<p>Build a website</p>
				</OfferCard>
				<OfferCard href="#app" >
					<FontAwesomeIcon icon={faMobile} />
					<p>Build an app</p>
				</OfferCard>
			</ul>

			<section id="server">
				<h3 className="text-2xl mb-1">Set up a (Linux) server</h3>
			</section>

			<section id="website" >
				<h3 className="text-2xl mb-1">Build a website</h3>
			</section>

			<section id="app" >
				<h3 className="text-2xl mb-1">Build an app</h3>
			</section>
		</PageLayout>
	);
}

export default Build;