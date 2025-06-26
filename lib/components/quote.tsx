import {FC, Fragment} from "react";
import {BibleQuote} from "@/lib/types/save-the-date";

type QuoteProps = BibleQuote;

export const Quote: FC<QuoteProps> = ({ location, passageText }) => <>
   <blockquote className="text-xl md:text-2xl mb-2" >
      <p>{passageText.split(". ").map((e, index) => <Fragment key={`bq_${index}`}><span>{`${e.replace('.', '')}. `}</span><br/></Fragment>)}</p>
   </blockquote>
   <p className="text-md md:text-xl justify-self-end" >- <cite>{location}</cite></p>
</>;