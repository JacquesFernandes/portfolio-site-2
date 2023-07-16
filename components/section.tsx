import {FC, HTMLAttributes, ReactNode} from "react";
import cx from 'clsx';

type SectionProps = {
	children: ReactNode;
	size?: 'page' | 'fit';
	className?: HTMLAttributes<HTMLElement>['className'];
	padded?: boolean;
	href?: string;
}

export const Section: FC<SectionProps> = ({ children, size='page', padded=true, className, href }) => <section id={href} className={cx("h-screen w-full overflow-x-hidden", { 'h-fit': size === 'fit', 'h-screen': size === 'page' || size !== 'fit', 'p-3': padded }, className )} >
	{children}
</section>