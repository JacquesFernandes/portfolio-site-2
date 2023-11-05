import {FC, ReactNode} from "react";
import {Resume} from "./index";

type SectionProps = {
	name: string;
	children: ReactNode;
}

export const Section: FC<SectionProps> = ({ name, children }) => <section className="mb-4" >
	<Resume.H2>{name}</Resume.H2>
	{children}
</section>