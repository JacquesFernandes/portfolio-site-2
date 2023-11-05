import {FC, ReactNode} from "react";
import {Resume} from "./index";

type CompanySectionProps = {
	name: string;
	subLine: string;
	children: ReactNode;
}

export const CompanySection: FC<CompanySectionProps> = ({ name, subLine, children }) => <>
	<Resume.H3>{name}</Resume.H3>
	<Resume.H3SubLine>{subLine}</Resume.H3SubLine>
	{children}
</>