import {FC, HTMLAttributes, ReactNode} from "react";
import cx from 'clsx';

type SectionProps = {
	children: ReactNode;
	size?: 'page' | 'fit';
	className?: HTMLAttributes<HTMLElement>['className']
}

export const Section: FC<SectionProps> = ({ children, size='page', className }) => <section className={cx("h-screen w-full flex flex-col overflow-x-hidden", { 'h-fit': size === 'fit', 'h-screen': size === 'page' || size !== 'fit' }, className )} >
	{children}
</section>