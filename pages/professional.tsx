/* eslint-disable react/no-unescaped-entities */
import {NextPage} from "next";
import {PageLayout} from "../components/page-layout";

import {H2, H3, H4} from "../components/typography";
import {Anchor} from "../components/anchor";

const Professional: NextPage = () => {
	return(
		<PageLayout title="Professional" description="The developer">
			<section>
				<H2>So you're looking to get something built?</H2>
				<p>I'm fairly fortunate that I'm able to take my hobby of building software as a profession.</p>
				<p>Below, I talk mostly about...</p>
				<ol className="list-inside list-decimal" >
					<li className="list-item" >
						<Anchor href="#work-experience" >
							My work experience
						</Anchor>
					</li>
					<li className="list-item" >
						<Anchor href="#projects" >
							My projects
						</Anchor>
					</li>
				</ol>
				<p>If you wish to know further details, feel free to check out my LinkedIn profile over at [linkedIn profile]</p>
			</section>

			<section id="work-experience" >
				<H3>Work Experience</H3>
				<p>
					After graduating with a B.Engg. in Computer Science, I decided to dive straight into work.
					The companies I've worked in are as follows:
				</p>
				<ol className="list-inside list-decimal" >
					<li>
						Castiko
						<ul className="list-inside list-disc ml-4" >
							<li>Full Stack Developer - Jul 2017 to Oct 2018</li>
							<li>CTO - Jan 2018 to Oct 2018</li>
							<li>
								If you’re wondering about the overlap,
								that’s because one of the preconditions to take on the CTO role was to still be able to spend time
								getting my hands dirty in code as a full stack developer.
							</li>
						</ul>
					</li>
					<li>
						Bright Signals
						<ul className="list-inside list-disc ml-4" >
							<li>Full Stack (web) developer - Jan 2019 to Nov 2021</li>
						</ul>
					</li>
					<li>
						Scottish Power
						<ul className="list-inside list-disc ml-4" >
							<li>Full Stack (web) developer - Nov 2021 to present</li>
						</ul>
					</li>
				</ol>
			</section>

			<section id="projects" >
				<H3>Projects</H3>
				<p>
					During my time as a developer, I've spent a lot of time working on projects that I felt had real-world applications.
					Of course, once I started working at companies, my code always had real-world applications (and implications).
				</p>
				<p>While I'm happy with most of my work, there are some projects which I'm particularly proud of.</p>

				<H4>Notable projects</H4>
				<p>
					These projects are the ones which I feel proudest of.
					If you’ve spoken to me in a professional context, chances are I would have mentioned one or more of these in passing.
				</p>
				<details>
					<summary>STV News app v5 @ BrightSignals</summary>
					<ul className="list-inside list-disc ml-4" >
						<li>A complete rebuild of the STV News Android and iOS apps in the wonderful cross-platform framework, Flutter. Worked on this at Bright Signals. Has since been taken over by STV’s in-house developers.</li>
						<li>Launched to good reviews and amazing performance.</li>
						<li>I still use this app to this day and recommend it if you live in the UK.</li>
					</ul>
				</details>
				<details>
					<summary>
						<Anchor href="https://openplans.uk/" >Openplans</Anchor> @ BrightSignals
					</summary>
					<p className="ml-4" >
						A “virtual consultation / town-hall” site built using ReactJS and Marzipano.
						Strikes a decent balance between a 3D presence and performance on lower-end devices.
					</p>
				</details>
				<details>
					<summary>
						Meantime Skeeball machine @ BrightSignals
					</summary>
					<p className="ml-4" >
						Built a custom popular arcade machine (“Skeeball”) from scratch (electronics, software and some design).
						Ask me to find out more - as well as show you some of the photos I took!
					</p>
				</details>

				<H4>Other projects</H4>
				<p>
					These are the other projects I’m equally proud of, but barely missed the above list.
					It could be because I did not have a large part in it
					or might be similar to something that’s already in the above list.
					These are by no means lesser than the aforementioned.
				</p>
				<details>
					<summary>
						<Anchor href="https://www.linn.co.uk/" >Linn.co.uk</Anchor> @ BrightSignals
					</summary>
					<p>
						Did not have a heavy hand in the software, but with architecting and deploying an AWS-ready, scalable prototype.
					</p>
				</details>
				<details>
					<summary>
						<Anchor href="https://marketplace.edfringe.com/" >Fringe Marketplace</Anchor> @ BrightSignals
					</summary>
					<p>
						A project from Edinburgh’s The Fringe shortly after the pandemic hit.
						Helped artists find scouts and showcase their work for said scouts to find and sponsor them.
					</p>
				</details>
			</section>
		</PageLayout>
	);
}

export default Professional;