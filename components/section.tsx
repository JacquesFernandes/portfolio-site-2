import {FC, ReactNode} from "react";
import cx from 'clsx';

type SectionProps = {
	children: ReactNode;
	size?: 'page' | 'fit';
}

export const Section: FC<SectionProps> = ({ children, size='page' }) => <section className={cx("h-screen w-full flex flex-col overflow-x-hidden",{ 'h-fit': size === 'fit', 'h-screen': size === 'page' || size !== 'fit' } )} >
	{children}
</section>