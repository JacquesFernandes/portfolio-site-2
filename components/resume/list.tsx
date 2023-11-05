import {FC, ReactNode} from "react";

type ListProps = {
	level?: number;
	children: ReactNode;
}

export const List: FC<ListProps> = ({ level=0, children }) => <ul className={`list-disc list-inside ml-${level * 2}`} >
	{children}
</ul>