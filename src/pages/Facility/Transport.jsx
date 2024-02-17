import React from 'react'
import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import Main from '../Header/Main';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
const Transport = () => {
    const router = useRouter();
  return (
    <div>
       <Navbar/>
       <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center  bg-cover duration-500'
      >

<Image height={800} width={800} 
        src="/images/schooltranspotjpg" aria-hidden="true"alt="Transport"
        className='max-w-full -z-10 h-[375px] w-full m-auto relative group'
      />
      
      </div>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Transport and Security
                    </h3>
                    <p className="mt-3 text-gray-600">
                    The school has a huge fleet of GPRS enabled buses and CCTV cameras that transport the children and teachers to school from various parts of the city and back to home. The school employs only experienced bus drivers and conducts regular orientation programmes on the guidelines laid by the school authorities for the safety of students. Guards accompany the little ones to ensure their care and safety.

The school has an excellent security system, which comprises of well-trained personnel who keep strict vigil on the visitors during school hours and beyond.
                    </p>
                </div>
                <div className="flex-none mt-4 md:mt-0">
                <button type="button" className="text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-12 ml-4 dark:focus:ring-yellow-900" onClick={() => router.push("/")}>Read More</button>
                </div>
            </div>
        </section>
    <Footer/>  
    </div> 
    
  )
}

export default Transport