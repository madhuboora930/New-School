import React from 'react'

import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
const Library = () => {
    const router = useRouter();
  return (
    <div>
    <Navbar/>
    <div
     // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
     className='w-full h-full bg-center  bg-cover duration-500'
   >

<Image height={800} width={800} 
     src="/images/liberey.jpeg" aria-hidden="true"alt="Liberary"
     className='max-w-full -z-10 h-[375px] w-full m-auto relative group'
   />
   
   </div>
     <section className="py-14">
         <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
             <div className="max-w-xl">
                 <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                 Library & Information Centre
                 </h3>
                 <p className="mt-3 text-gray-600">
                 The computerized aesthetically designed school library in addition to being well stocked and well furnished is designed to encourage research and independent study. It provides a comfortable and quiet bower for those looking to get lost in the world of distant seas or mysteries of a different world. Apart from a vast collection of books and periodicals, the library has a resource centre with reference material and e-books available at the click of a mouse.

Moreover, every class has its own class library and students are encouraged to pick up a book of their choice after completing the assigned tasks. Innovative projects like reading projects are used to inculcate the reading habits in our students
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

export default Library