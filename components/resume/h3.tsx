import {FC} from "react";

export const H3: FC<{children: string}> = ({ children }) => <h3 className="text-xl mt-2" >{children}</h3>;