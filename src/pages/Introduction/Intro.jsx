import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import Main from '../Header/Main';
import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
const Intro = () => {
    const router = useRouter();
  return (
    <div>
        <Navbar/>
        <Main/>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    An Introduction
                    </h3>
                    <p className="mt-3 text-gray-600">
                    The school is located in the very heart of Jind city. A vibrant techno savvy school with an ultra modern campus caters to the needs of new generation learners. Beautifully designed classrooms,
       state of the art infrastructure and a child friendly atmosphere provides a safe and stimulating environment to the young learners. The bricks and mortar it is built with binds the unifying spirit
        and the palpable energy one can feel as one enters the portals of this great institution. The school represents the transformation of education globally. Driven by latest research, the school uses
         innovative teaching methodology with special emphasis on extra-curricular .
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

export default Intro