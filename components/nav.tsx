import {FC} from "react";
import NextLink from 'next/link';
import {useRouter} from "next/router";

interface NavEntryProps {
	href: string;
	label: string;
	current?: boolean;
}
const NavEntry: FC<NavEntryProps> = ({ href, label, current }) => {
	if (current) {
		return(
			<span className="text-gray-400" >
				<span className="hidden" >Current page: </span> {label}
			</span>
		);
	}

	return(
		<NextLink href={href} className="hover:underline underline-offset-1" >
			{label}
		</NextLink>
	);
}

NavEntry.defaultProps = {
	current: false,
}


type PageListType = Pick<NavEntryProps, 'href' | 'label'>[]
const pages: PageListType = [
	{ href: "/", label: "Home" },
	{ href: "/about",  label: "About" },
	{ href: "/personal",  label: "Personal" },
	{ href: "/professional",  label: "Professional" }
]
export const Nav: FC = () => {
	const router = useRouter();

	return(
		<nav>
			<ul className="flex flex-row flex-wrap" >
				{
					pages.map(({ label, href }, index) => <li key={`route_${index}_${label}`} className="mr-2 mb-2" >
						<NavEntry href={href} label={label} current={href === router.pathname} />
					</li>)
				}
			</ul>
		</nav>
	);
}