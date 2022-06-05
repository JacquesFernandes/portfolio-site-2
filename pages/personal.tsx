/* eslint-disable react/no-unescaped-entities */
import {NextPage} from "next";
import {PageLayout} from "../components/page-layout";
import {H2, H3, H4} from "../components/typography";
import {Anchor} from "../components/anchor";

const Personal: NextPage = () => {
	return(
		<PageLayout title="Personal" description="The person(ality)" >
			<section>
				<H2>New person, who dis?</H2>
				<p>There's two things I can tell you about myself:</p>
				<ol className="list-inside list-decimal" >
					<li className="list-item" >
						<Anchor href="#background" >My background</Anchor>
					</li>
					<li className="list-item" >
						<Anchor href="#blogs" >My thoughts</Anchor>
					</li>
				</ol>
				<p>Hopefully that's enough to give you a rough idea of who I am as a person.</p>
			</section>

			<section id="background" >
				<H3>Background</H3>
				<p>In general, I'm a person who enjoys building things and hanging out with people.</p>
				<p>
					Due to the CoViD pandemic, I've gotten used to hanging out with friends I've made while gaming online.
					Other than that, making friends/acquaintances while in an office or generally in person is something
					I don't <span className="italic" >exactly</span> struggle with.
				</p>
				<H4>Travels</H4>
				<p>
					I feel like where I've lived and my upbringing in those places has greatly impacted the kind of man I've become.
					Would be worthwhile mentioning it here.
				</p>
				<p>In a nutshell...</p>
				<ol className="list-inside list-decimal" >
					<li>Dubai, UAE (born and lived there for ~ 7 years)</li>
					<li>Hong Kong (~ 3-4 years)</li>
					<li>Buenos Aires, Argentina (~ 3-4 years)</li>
					<li>Curitiba, Brazil (~ 3-4 years)</li>
					<li>Mumbai, India (~ 7-8 years)</li>
					<li>Glasgow, Scotland (2019 - present)</li>
				</ol>
				<p>As a result of moving about, I've experienced a fair share of cultures, customs, languages and people.</p>
			</section>

			<section id="blogs" >
				<H3>Blog / Musings <b>[WIP]</b></H3>
				<H4>Tech</H4>
				<p>I'll mostly do small write-ups here on interesting tech I come across during my professional and leisure time.</p>
				<H4>Personal / Society / miscellaneous</H4>
				<p>Mostly personal thoughts and opinions (purely my own) on the state of myself and the world around me.</p>
			</section>
		</PageLayout>
	);
}

export default Personal;