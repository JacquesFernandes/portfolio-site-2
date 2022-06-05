import {
	DetailedHTMLProps,
	FC,
	HTMLAttributes,
} from "react";
import cc from 'classcat';

type HeadingProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

export const H2: FC<HeadingProps> = ({ children, className, ...props }) =>
	<h2 className={cc(["text-3xl mb-1", className])} {...props} >{children}</h2>;

export const H3: FC<HeadingProps> = ({ children, className, ...props }) =>
	<h3 className={cc(["text-2xl mb-1", className])} {...props} >{children}</h3>;

export const H4: FC<HeadingProps> = ({ children, className, ...props }) =>
	<h4 className={cc(["text-xl mb-1", className])} {...props} >{children}</h4>;