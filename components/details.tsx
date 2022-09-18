import {FC, cloneElement, ReactElement, ReactNode} from "react";

export interface DetailsProps {
	summary: ReactNode;
	details: ReactElement;
}

export const Details: FC<DetailsProps> = ({ summary, details }) => (
	<details className="border-2 rounded my-2 open:bg-white hover:bg-white open:text-gray-900 hover:text-gray-900 cursor-pointer" >
		<summary className="p-2" >
			{ summary }
		</summary>

		{ cloneElement(details, { className: `${details.props.className} p-2 pt-0` }) }
	</details>
);