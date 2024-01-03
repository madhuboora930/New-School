import React from 'react'
import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
const Sports = () => {
    const router = useRouter();
  return (
    <div>
    <Navbar/>
    <div
     // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
     className='w-full h-full bg-center  bg-cover duration-500'
   >

<Image height={800} width={800} 
     src="/images/sport.jpeg" aria-hidden="true"alt="sport"
     className='max-w-full -z-10 h-[375px] w-full m-auto relative group'
   />
   
   </div>
     <section className="py-14">
         <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
             <div className="max-w-xl">
                 <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                 Sports
                 </h3>
                 <p className="mt-3 text-gray-600">
                 Sports are an integral part of the school curriculum and the school has provision for Basket Ball, Tennis, Football, Badminton, Cricket, Skating, Fencing, Handball, Kho-Kho, Volley-Ball and Yoga. Students are encouraged to choose and participate in at least one sport. Apart from physical fitness and recreation, this also provides valuable lessons of team spirit, sportsmanship, fair play, respect for others and discipline to the students.

For the primary students, we have Sand and Water play and a huge activity Hall which is a great attraction for the little ones.
                 </p>
             </div>
             <div className="flex-none mt-4 md:mt-0">
             <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-12 ml-4 dark:focus:ring-yellow-900" onClick={() => router.push("/")}>Read More</button>
             </div>
         </div>
     </section>
 <Footer/>  
 </div> 
  )
}

export default Sports