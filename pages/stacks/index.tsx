/* eslint-disable react/no-unescaped-entities */
import {NextPage} from "next";
import {PageLayout} from "../../components/page-layout";
import {H2} from "../../components/typography";
import {useId} from "react";

type StackItemType = {
	name: string;
}
const stackItems: StackItemType[] = [
	{
		name: "Server (machine)"
	},
	{
		name: "Web server"
	},
	{
		name: "Back-end"
	},
	{
		name: "Front-end"
	}
];

const Stacks: NextPage = (props) => {
	const listId = useId();

  return(
		<PageLayout title={"Stacks"}>
			<H2>The software lasagne</H2>

			<ul id="overview" className="w-full space-y-3" >
				{
					stackItems.map((stackItem, index) => {
						const evenOddTransform = "";
						return(<>
							<li
								className={`p-2 transition-transform skew-x-6 hover:skew-x-12 border`}
							>
								{stackItem.name}
							</li>
						</>);
					})
				}
			</ul>
		</PageLayout>
	);
}

export default Stacks;