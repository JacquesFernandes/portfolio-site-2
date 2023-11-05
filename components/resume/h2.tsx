import {FC} from "react";

export const H2: FC<{children: string}> = ({children}) => <h2 className="text-2xl mb-2" >
	{children}
</h2>