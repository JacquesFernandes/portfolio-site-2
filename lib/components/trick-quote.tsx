'use client'

import {FC, useCallback, useState} from "react";
import {Quote} from "@/lib/components/quote";
import Image from "next/image";
import {mainPhoto} from "@/app/save-the-date/copy";
import {BibleQuote} from "@/lib/types/save-the-date";

type TrickQuoteProps = {
   bibleQuoteList: BibleQuote[];
};

export const TrickQuote: FC<TrickQuoteProps> = ({ bibleQuoteList }) => {
   const [ bibleQuoteIndex, setBibleQuoteIndex ] = useState<number>(0);

   const handleImageClick = useCallback(() => {
      // setBibleQuoteIndex(Math.floor(Math.random() * bibleQuotes.length));
      setBibleQuoteIndex(2);
   }, []);

   const bibleQuote = bibleQuoteList[bibleQuoteIndex];

   return <>
      <Image
         src={mainPhoto.url}
         alt="Nicci & Jacques"
         height={mainPhoto.height}
         width={mainPhoto.width}
         className="rounded-xl mb-5"
         onClick={handleImageClick}
      />

      <section className="w-full p-2 pb-0 bg-slate-300/75 text-slate-600 mb-5 rounded-md" >
         <Quote passageText={bibleQuote.passageText} location={bibleQuote.location} />
      </section>
   </>
};