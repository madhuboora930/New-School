import Navbar from '@/pages/Header/navbar'
import React from 'react'
import Main from '../Header/Main'
import Footer from '@/components/homepage/Footer'
import Link from 'next/link'
import Image from 'next/image'
function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <section className="py-8 bg-white">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                    <Image   src="/images/aboutus.jpeg" height={400} width={400} className="md:max-w-lg sm:rounded-lg" alt="About us" />
                    <Image  src="/images/school-education.png" className="md:max-w-lg sm:rounded-lg" height={400} width={400} alt= "Education" />
                       
                    </div>
                    <div className="max-w-xl px-4 space-y-3  mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600  text-3xl font-semibold">
                       About US
                        </h3>
                        <p className="text-gray-800  font-semibold sm:text-xl">
                        &quot; Education is your basic right; you know that, right ? &quot;
                        </p>
                        <p className="mt-3 text-gray-600">
                        <Image   src="/images/profile.jpg" height={400} width={400} className="md:max-w-lg sm:rounded-lg" alt=" School Education" />
                        </p>
                        <Link href="/" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                       
                            
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    <Footer/>
     </div>
  )
}

export default AboutUs