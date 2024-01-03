import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Notice = () => {
  const tableItems = [
    {
        name: "New Admission",
       
    },
    {
        name: "Notice",
       
    },
    
]

  return (
    <div>
      <Navbar/>
      <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    {/* <div className="flex-1 sm:hidden lg:block">
                        <Image height={800} width={800}  src="/images/desktop.PNG" className="md:max-w-lg sm:rounded-lg" alt="Gellary" />
                    </div> */}
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left bg-blue-800">
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap text-white">{item.name}</td>
                                    
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                           Notice
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Registration/Admission Open for session 2023-24
                        </p>
                        <p className="mt-3 text-gray-600">
                        Highly qualified, Experienced, Dedicated and dynamic faculty.
                        No home work, No-bag system up to class II.
                        Well equipped Computer, Physics, Chemistry, Biology, Maths & Language laboratories.
                        Digital classroom for personalized and adaptive learning.
                        Hi-tech Multimedia Rooms for all classes.
                        Spacious play ground for indoor & Outdoor games.
                        Well stocked air conditioned library.
                        Consistently excellent Board Results.
                        Equal stress on curricular and co-curricular activities.
                        Spiritual enlightenment through regular hawan & yoga.
                        Preparation for all competitive exams.
                        Regular workshop for personality development and career counseling.
                        Regular health check up and emergency medical facility by trained staff.
                        </p>
                        {/* <Link
                         href="/" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
<Footer/>
    </div>
  )
}

export default Notice