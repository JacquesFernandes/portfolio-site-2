import {FC} from "react";

export interface H2Props {
	children: string;
}
export const H2: FC<H2Props> = (props) => <h2 className="text-3xl mb-1" >{props.children}</h2>;