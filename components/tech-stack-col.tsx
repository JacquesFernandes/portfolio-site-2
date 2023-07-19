import {FC} from "react";
import Link, {LinkProps} from "next/link";

type Tech = {
	name: string;
	link: LinkProps['href']
}

type TechStackCategory = {
	name: string;
	tech: Tech[]
}

type TechStackColProps = {
	title: string;
	categories: TechStackCategory[]
}

export const TechStackCol: FC<TechStackColProps> = ({ title, categories }) => <>
	<div className="snap-start min-w-fit flex-1 space-y-1.5" >
		<h3 className="text-xl font-bold" >{title}</h3>
		{
			categories.map((category, techCategoryIndex) => (
				<div className="p-1.5 sm:p-1 bg-white text-slate-700" key={`tech_category_${techCategoryIndex}`} >
					<h4 className="text-lg font-semibold" >{category.name}</h4>
					<ul>
						{
							category.tech.map((techItem, techItemIndex) => (
								<li key={`tech_category_item_${techItemIndex}`} >
									<Link
										href={techItem.link}
										className="underline"
									>
										{techItem.name}
									</Link>
								</li>
							))
						}
					</ul>
				</div>
			))
		}
	</div>
</>;