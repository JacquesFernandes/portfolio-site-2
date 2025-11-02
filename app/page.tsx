import {AspectRoller} from "@/lib/components/aspect-roller";

export default function Home() {
  return <main className="w-full min-h-screen bg-sky-700 flex justify-center items-center" >
     <h1 className="text-5xl flex flex-row items-center gap-3" >
        <span>Jacques Fernandes</span>
        <span>|</span>
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
