import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import profilePic from '../assets/profile-pic-1.jpg';
import {PageLayout} from "../components/page-layout";

const Home: NextPage = () => {
  return (
    <PageLayout rowLayout title="Home" >
      <section className="relative w-full aspect-square group max-w-xs mx-auto" >
        <Image src={profilePic} layout="fill" className="absolute" placeholder="blur" alt="My profile picture" />
        <div className="absolute z-10 top-0 left-0 h-full w-full p-4 flex flex-col justify-center items-center bg-gray-900 bg-opacity-80 group-hover:bg-opacity-0" >
          <p className="text-2xl transition-opacity opacity-100 group-hover:opacity-0 mb-1" >Bring me thine ideas and passion and I shall turn them into code</p>
          <p className="text-lg transition-opacity opacity-100 group-hover:opacity-0" >- Jacques Fernandes</p>
        </div>
      </section>

      <section className="text-lg flex-1" >
        <h2 className="text-3xl mb-1" >The Elevator Pitch</h2>
        <p>Need someone to build a site from the ground up?</p>
        <p>Perhaps an app to go along with it for both Android and iOS?</p>
        <p className="mb-6" >Who knows - maybe a robot that runs around telling people about this stuff!</p>
        <Link href={"/about"}>
          <a className="p-3 flex flex-row flex-nowrap justify-between max-w-md items-center cursor-pointer bg-white text-gray-900 transition-all hover:-skew-x-3" >
            <span className="mr-4" >
              Say no more
            </span>
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </Link>
      </section>
    </PageLayout>
  );
}

export default Home
