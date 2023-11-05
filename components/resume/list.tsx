import {FC, ReactNode} from "react";

type ListProps = {
	children: ReactNode;
}

export const List: FC<ListProps> = ({ children }) => <ul className="list-disc list-outside ml-5" >
	{children}
</ul>