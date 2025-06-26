'use client';
import {FC, useCallback, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import {bibleQuotes} from '@/lib/constants/save-the-date-copy';

export const QuoteScroller: FC = () => {
   const [ currentIndex, setCurrentIndex ] = useState(0);

   const handlePreviousQuote = useCallback(() => {
      setCurrentIndex((currentIndex) => {
         if (currentIndex === 0) {
            return bibleQuotes.length-1;
         }

         return currentIndex-1;
      });
   }, []);

   const handleNextQuote = useCallback(() => {
      setCurrentIndex((currentIndex) => {
         if (currentIndex === bibleQuotes.length-1) {
            return 0;
         }

         return currentIndex+1;
      })
   }, []);

   const { passageText, location } = bibleQuotes[currentIndex];

   return <div className="h-64 sm:h-40 md:h-64 p-2 flex flex-col justify-between">
      <div className="w-full" >
         <blockquote className="text-xl md:text-2xl mb-2" >
            <p>{passageText}</p>
         </blockquote>
         <p className="text-md md:text-xl justify-self-end" >- <cite>{location}</cite></p>
      </div>

      <div className="w-full flex flex-row justify-between items-center text-2xl md:text-3xl" >
         <button onClick={handlePreviousQuote} >
            <FontAwesomeIcon icon={faArrowLeftLong} />
         </button>

         <button onClick={handleNextQuote} >
            <FontAwesomeIcon icon={faArrowRightLong} />
         </button>
      </div>
   </div>;
};