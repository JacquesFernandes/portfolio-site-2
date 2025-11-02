import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";

const roboto = Roboto({
   variable: "--font-roboto-sans",
   subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
   variable: "--font-roboto-mono",
   subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Jacques Fernandes | Software Engineer",
  description: "Give me your ideas and passion, and I shall give you code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
