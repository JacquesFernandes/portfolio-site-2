import {AspectRoller} from "@/lib/components/aspect-roller";

export default function Home() {
  return <main className="w-full min-h-screen bg-sky-700 flex justify-center items-center" >
     <h1 className="text-3xl sm:text-4xl md:text-5xl flex flex-col md:flex-row items-center gap-6 md:gap-4" >
        <span className="text-right" >Jacques Fernandes</span>
        <hr className="w-1/2 md:w-[1px] md:h-28 border-2 border-inherit" />
        <AspectRoller
           aspects={[
              'Front-end Engineer',
              'Back-end Engineer',
              'Linux admin',
              'Car enthusiast',
              'Former CTO',
           ]}
        />
     </h1>
  </main>;
}
