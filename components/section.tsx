import {FC, HTMLAttributes, ReactNode} from "react";
import cx from 'clsx';

type SectionProps = {
	children: ReactNode;
	size?: 'page' | 'fit';
	className?: HTMLAttributes<HTMLElement>['className'];
	padded?: boolean;
	href?: string;
}

export const Section: FC<SectionProps> = ({ children, size='page', padded=true, className, href }) => <>
	<section
		id={href}
		className={cx(
			"w-full snap-start md:max-w-screen-md overflow-x-hidden md:mx-auto",
			{
				'h-fit': size === 'fit',
				'min-h-[100dvh]': size === 'page' || size !== 'fit',
				'p-3': padded
			}, className
		)}
	>
		{children}
	</section>
</>;