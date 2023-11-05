import {FC} from "react";

export const H1: FC<{children: string}> = ({children}) => <h1 className="text-4xl mb-2" >
	{children}
</h1>