import {FC, ReactNode} from "react";
import Link, {LinkProps} from "next/link";

type HomeNavLinkProps = {
   href: LinkProps['href'];
   children: ReactNode;
};

const HomeNavLink: FC<HomeNavLinkProps> = ({ children, href }) => <Link
   href={href}
   className="text-3xl hover:underline underline-offset-4"
>
   {children}
</Link>;

export const HomeNav: FC = () => <nav className="absolute md:relative bottom-0 w-full p-2 mt-10 flex flex-row justify-around md:justify-center gap-6" >
   <HomeNavLink href="/about">About</HomeNavLink>
   <HomeNavLink href="/blog">Blog</HomeNavLink>
   <HomeNavLink href="/resume">Resume</HomeNavLink>
</nav>;