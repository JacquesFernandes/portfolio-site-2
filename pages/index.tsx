import type { NextPage } from 'next'
import Head from "next/head";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import profilePic from '../assets/profile-pic-1.jpg';

const Home: NextPage = () => {
  return (
    <>
      <Head>
       <title>Home</title>
      </Head>

      <main className="min-h-screen p-3 bg-gradient-to-br from-gray-700 to-gray-900 text-white" >
        <nav className="mb-2" >
          <h1 className="text-4xl font-bold" >Home</h1>
        </nav>

        <article className="flex flex-row gap-4 flex-wrap" >
          <section className="relative w-full aspect-square group max-w-xs" >
            <Image src={profilePic} layout="fill" className="absolute" alt="My profile picture" />
            <div className="absolute z-10 top-0 left-0 h-full w-full p-4 flex flex-col justify-center items-center bg-gray-900 bg-opacity-80 group-hover:bg-opacity-0" >
              <p className="text-2xl transition-opacity opacity-100 group-hover:opacity-0 mb-1" >Bring me thine ideas and passion and I shall turn them into code</p>
              <p className="text-lg transition-opacity opacity-100 group-hover:opacity-0" >- Jacques Fernandes</p>
            </div>
          </section>

          <section className="text-lg flex-1" >
            <div>
              <h2 className="text-3xl mb-1" >The Elevator Pitch</h2>
              <p>Want to build a website and need someone to develop (or manage) the entire project from start to finish?</p>
              <p>Perhaps an app to go along with it for both Android and iOS?</p>
              <p className="mb-6" >Who knows - maybe a robot that runs around telling people about this stuff!</p>
            </div>
            <a className="p-3 cursor-pointer bg-white text-gray-900 flex flex-row flex-nowrap justify-between items-center transition-all hover:-skew-x-6" >
              Interested? <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </section>
        </article>
      </main>
    </>
  );
}

export default Home
