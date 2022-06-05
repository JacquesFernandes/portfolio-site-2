import {
	AnchorHTMLAttributes,
	DetailedHTMLProps,
	FC,
} from "react";
import cc from 'classcat';

type BaseAnchor = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export const Anchor: FC<BaseAnchor> = ({ children, className, ...props }) =>
	<a className={cc(["cursor-pointer underline underline-offset-2 hover:decoration-2", className])} {...props} >
		{children}
	</a>;