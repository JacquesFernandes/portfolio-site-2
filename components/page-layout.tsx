import {FC, PropsWithChildren} from "react";
import Head from "next/head";
import {Meta, MetaProps} from "./meta";

export interface PageLayoutProps extends MetaProps {
	rowLayout?: boolean;
}

export const PageLayout: FC<PropsWithChildren<PageLayoutProps>> = (props) => {
  return(
		<>
			<>
				<Head>
					<title>{props.title}</title>
					<Meta {...props} />
				</Head>

				<main className="min-h-screen p-3 bg-gradient-to-br from-gray-700 to-gray-900 text-white" >
					<nav className="mb-4 max-w-screen-lg mx-auto" >
						<h1 className="text-4xl font-bold" >{props.title}</h1>
					</nav>

					<article className={`${props.rowLayout? 'flex flex-row gap-4 flex-wrap' : 'space-y-4'}  max-w-screen-lg mx-auto`} >
						{ props.children }
					</article>
				</main>
			</>
		</>
	);
}

PageLayout.defaultProps = {
	rowLayout: false,
}