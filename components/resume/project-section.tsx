import {FC, ReactNode} from "react";
import {Resume} from "./index";

type ProjectSectionProps = {
	name: string;
	company: string;
	children: ReactNode;
}

export const ProjectSection: FC<ProjectSectionProps> = ({ name, company, children }) => <div className="border-l-2 border-l-blue-300 pl-2 mb-4">
	<Resume.H3 className="underline decoration-blue-300 underline-offset-4" >{name}</Resume.H3>
	<Resume.H3SubLine>{company}</Resume.H3SubLine>
	{children}
</div>