'use client'

import {FC, useState} from "react";
import {ChevronDown, ChevronUp} from "lucide-react";
import {circularArrayGet} from "@/lib/utils/circular-array-get";

type DisplayAspects = [
   string,
   string,
   string,
];

export type AspectRollerProps = {
   aspects: string[];
};

export const AspectRoller: FC<AspectRollerProps> = ({ aspects }) => {
   const [focusIndex, setFocusIndex] = useState(0);

   const displayAspects: DisplayAspects = [
      circularArrayGet(aspects, focusIndex-1),
      circularArrayGet(aspects, focusIndex),
      circularArrayGet(aspects, focusIndex+1),
   ];

   console.log('circular:', focusIndex-1, focusIndex, focusIndex+1, aspects, displayAspects)

   return <div className="min-w-md flex flex-col items-stretch gap-2" >
      <button
         className="w-full transition-all duration-150 bg-transparent border border-transparent hover:border-inherit rounded-xl flex justify-center items-center cursor-pointer"
         onClick={() => setFocusIndex((i) => i-1)}
      >
         <ChevronUp size="2.5rem" />
      </button>
      <ul>
         <li className="opacity-80" >{displayAspects[0]}</li>
         <li className="opacity-100" >{displayAspects[1]}</li>
         <li className="opacity-80" >{displayAspects[2]}</li>
      </ul>
      <button
         className="w-full transition-all duration-150 bg-transparent border border-transparent hover:border-inherit rounded-xl flex justify-center items-center cursor-pointer"
         onClick={() => setFocusIndex((i) => i+1)}
      >
         <ChevronDown size="2.5rem" />
      </button>
   </div>
}

