import {
   partyA,
   partyB,
   mainPhoto,
   weddingDate,
} from './copy';
import Image from "next/image";
import {QuoteScroller} from "./components/quote-scroller";

export default function SaveTheDatePage() {

   return <main
      className="w-full min-h-screen p-5 bg-purple-50 bg-[url(/lake_como_church_compress.jpg)] bg-cover bg-bottom bg-no-repeat text-slate-200 font-[Dancing_Script] flex justify-stretch items-stretch"
   >
      <div className="w-full max-w-2xl p-3 mx-auto backdrop-blur-md border-2 border-slate-100]" >
         <h1 className="w-full text-center text-5xl sm:text-6xl italic mb-5" >Save the Date</h1>

         <section className="w-full mb-5" >
            <h2 className="flex flex-col gap-2 items-center text-2xl sm:text-3xl" >
               <span>The wedding of</span>
               <span className="flex flex-row flex-wrap justify-center gap-4 text-4xl sm:text-5xl" >
                  <span className="italic" >{partyA.participant.firstName}</span>
                  <span>&</span>
                  <span className="italic" >{partyB.participant.firstName}</span>
               </span>
            </h2>
         </section>

         <section className="w-full flex justify-center items-center text-2xl sm:text-3xl mb-5" >
            <p>on <time dateTime={weddingDate.toISOString()} >{weddingDate.toDateString()}</time></p>
         </section>

         <section className="w-full p-2 pb-0 bg-slate-300 text-slate-600 mb-5 rounded-md" >
            <QuoteScroller/>
         </section>

         <Image
            src={mainPhoto.url}
            alt="Nicci & Jacques"
            height={mainPhoto.height}
            width={mainPhoto.width}
            className="rounded-xl mb-5"
         />
      </div>
   </main>;
}