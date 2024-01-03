import React from 'react'
import Navbar from '@/pages/Header/navbar'
import Footer from '@/components/homepage/Footer'
import Main from '@/pages/Header/Main'
import Image from 'next/image'
import Link from 'next/link'
function OurMotto() {
  return (
    <div>
      <Navbar/>
      <Main/>
<section className="py-24 bg-white">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image height={800} width={800}  src="/images/about.jpg" className="md:max-w-lg sm:rounded-lg" alt="our motto" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3  mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600  text-3xl font-semibold">
                        Our Motto
                        </h3>
                        <p className="text-gray-800  font-semibold sm:text-xl">
                        Our Motto is: “Vidya Dadati Vinayam”, which means “learning makes a person humble”.
                        </p>
                        <p className="mt-3 text-gray-600">
                        The School motto is in consonance with the vision of the founder of the trust. Only value based education will enable students to discern between proper and improper,
                         right and wrong, will promote integrity and inculcate positive behaviour beneficial for the society.
 

 
 
Subhash Sheoran
 
Director
                        </p>
                        < Link href="/" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                        Choose the Right Step
Enhance your child&apos;s future
                            
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    <Footer/>
      </div>
  )
}

export default OurMotto