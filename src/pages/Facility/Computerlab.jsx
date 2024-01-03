import React from 'react'
import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
const Computerlab = () => {
     const router = useRouter();
  return (
    <div>
    <Navbar/>
    <div
     // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
     className='w-full h-full bg-center  bg-cover duration-500'
   >

<Image height={800} width={800} 
     src="/images/ficility.jpg" aria-hidden="true"alt="Computer"
     className='max-w-full -z-10 h-[375px] w-full m-auto relative group'
   />
   
   </div>
     <section className="py-14">
         <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
             <div className="max-w-xl">
                 <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                 Technology labs
                 </h3>
                 <p className="mt-3 text-gray-600">
                 Computer Lab

The school has two state-of-the-art Computer Labs. These are meant for students of primary, secondary and senior secondary levels. All the teachers are well trained to utilize these resources in an effective manner. They prepare their audio & visual aids and use them for making teaching effective. The students use the labs to develop their programming skill and to gain hands-on-experience in computer applications. Well equipped computer labs with high quality computers and carefully monitored internet connectivity provides our children the opportunity for research in addition to prepare them for the IT driven world. A customized school software with student, teacher and parent portal helps to elicit information at the click of a mouse. Technology doesn’t drive change, it enables change.
 There is a computer lab exclusively for teachers. Here teachers complete their school related work (test papers and assignments). All our labs have constant access to the internet and are used extensively for research work by both students and teachers. The school can proudly boast of its highly advanced audio-visual rooms, equipped with a smart board and LCD Projector.
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

export default Computerlab