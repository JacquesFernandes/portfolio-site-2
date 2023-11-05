import {FC, ReactNode} from "react";
import {Resume} from "./index";

type CompanySectionProps = {
	name: string;
	subLine: string;
	children: ReactNode;
}

export const CompanySection: FC<CompanySectionProps> = ({ name, subLine, children }) => <div className="border-l-2 border-amber-700 pl-2 mb-4">
	<Resume.H3 className="underline decoration-amber-700 underline-offset-4" >{name}</Resume.H3>
	<Resume.H3SubLine>{subLine}</Resume.H3SubLine>
	{children}
</div>