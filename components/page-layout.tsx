import {FC, ReactNode} from "react";
import Head from "next/head";

interface PageLayoutProps {
	title: string;
	children: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = ({ title, children }) => <>
	<Head>
		<title>{title}</title>
	</Head>

	<main className="w-full min-h-screen bg-slate-800 text-gray-50" >
		{ children }
	</main>
</>;