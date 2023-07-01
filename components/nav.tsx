import {FC, useEffect, useState} from "react";
import cx from 'clsx';
import {Pages, pages} from "../constants/pages";

type NavItemProps = {
	children: keyof Pages;
	link: Pages[keyof Pages];
	active?: boolean;
}
const NavItem: FC<NavItemProps> = ({ children, active=false }) => <li className={cx("p-3 transition-all hover:text-2xl md:w-full", { 'bg-gray-50 text-slate-800 italic': active })} >
	{children}
</li>

type NavProps = {
	blockElement?: boolean;
	className?: string;
}

export const Nav: FC<NavProps> = ({ blockElement, className }) => {
	const [ isMounted, setIsMounted ] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	return <nav className={cx("w-full md:w-fit md:h-full md:border-r-2", { "fixed bottom-0 left-0": !blockElement }, className)} >
		<ul className="w-full max-w-full overflow-x-auto flex flex-row md:flex-col gap-0.5 items-end text-xl" >
			{
				Object
					.entries(pages)
					.map(([ name, path ], index) => (
						<NavItem key={index} link={path} active={isMounted && path === location.pathname} >
							{name}
						</NavItem>
					))
			}
		</ul>
	</nav>;
}