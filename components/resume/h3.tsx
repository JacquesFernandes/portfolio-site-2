import {FC} from "react";

type H3Props = {
	className?: string;
	children: string;
}

export const H3: FC<H3Props> = ({ children, className }) => <h3 className={"text-xl mt-2 " + className ?? ''} >{children}</h3>;