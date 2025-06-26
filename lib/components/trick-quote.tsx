'use client'

import {FC, useCallback, useState} from "react";
import {Quote} from "@/lib/components/quote";
import Image from "next/image";
import {mainPhoto} from "@/lib/constants/save-the-date-copy";
import {BibleQuote} from "@/lib/types/save-the-date";

type TrickQuoteProps = {
   bibleQuoteList: BibleQuote[];
};

export const TrickQuote: FC<TrickQuoteProps> = ({ bibleQuoteList }) => {
   const [ showQuote, setShowQuote ] = useState<boolean>(false);

   const handleImageClick = useCallback(() => {
      // setBibleQuoteIndex(Math.floor(Math.random() * bibleQuotes.length));
      setShowQuote((show) => !show);
   }, []);

   const bibleQuote = bibleQuoteList[0];

   return <>
      <Image
         src={mainPhoto.url}
         alt="Nicci & Jacques"
         height={mainPhoto.height}
         width={mainPhoto.width}
         className="rounded-xl mb-5 flex-1"
         onClick={handleImageClick}
      />

      {showQuote && (
         <section className="w-full p-2 pb-0 bg-slate-300/75 text-slate-600 mb-5 rounded-md" >
            <Quote passageText={bibleQuote.passageText} location={bibleQuote.location} />
         </section>
      )}
   </>
};