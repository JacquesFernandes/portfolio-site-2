/* eslint-disable react/no-unescaped-entities */
import {NextPage} from "next";
import {FC, AnchorHTMLAttributes} from "react";

import {PageLayout} from "../components/page-layout";
import {H2, H3} from "../components/typography";
import Link from "next/link";

interface AnchorLinkProps extends Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>{
	label: string;
}

const AnchorLink: FC<AnchorLinkProps> = ({ label, href }) => {
	return(
		<a className="underline underline-offset-2 hover:decoration-2" href={href} >{label}</a>
	);
}

const About: NextPage = () => {
	return(
		<PageLayout title="About" description="Introductions" >
			<section>
				<H2>Intro</H2>
				<p>If you're looking for a one-man-army to spin up an app, a website and/or a (Linux) server, you've come to the right person.</p>
				<p>Everyone has at least two aspects to themselves, read on to find out a little about me <AnchorLink label="personally" href={"#personal"} /> and/or <AnchorLink label="professionally" href={"#professional"} />.</p>
			</section>

			<section id="personal">
				<H3>Personal</H3>
				<p>There's a fair amount to cover about me as a person (or so I'm told), so I'll give you the TL;DR / "in-a-nutshell" version.</p>
				<Link href="/personal" className="underline underline-offset-2 hover:decoration-2" >
					The person behind the code
				</Link>
			</section>

			<section id="professional" >
				<H3>Professional</H3>
				<p>I've always enjoyed building things and being able to build whatever I want/need to from scratch has always been a dream of mine.</p>
				<p>Said dream has led me to pursue a career as a full-stack developer.</p>
				<Link href="/professional" className="underline underline-offset-2 hover:decoration-2" >
					The code in front of the person
				</Link>
			</section>
		</PageLayout>
	);
}

export default About;