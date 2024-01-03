import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import React from 'react'
import Image from 'next/image'
const Contactus = () => {
  const tableItems = [
    {
        name: "New Admission",
       
    },
    {
        name: "Notice",
       
    },
    {
        name: "Syllabus",
        
    },
    {
        name: "Community",
        
    },
    {
        name: "About Us",
        
    },
]

  return (
    <div>
        <Navbar/>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    {/* <div className="flex-1 sm:hidden lg:block">
                        <Image height={800} width={800}  src="/images/desktop.PNG" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div> */}
                    <div className="flex justify-start w-1/2 ml-2"> 
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
       
      </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 text-4xl font-semibold">
                            Contact Us
                        </h3>
                        <p className="text-gray-800 text-3xl font-bold   sm:text-4xl">
                           PLUS POINT SER SC SCHOOL
                        </p>
                        <p className="mt-4 text-gray-600 font-bold text-xl ">
                        Near  Gramin Bank, Uchana, Haryana India,
                        Jind-126102
                          <br></br>
                        Mobile No:+098134 36340, +91-9729606705 
                        <br></br>
                        E-Mail ID: pluspointpower@gmail.com
                        </p>
                        <p className="text-gray-800 text-xl font-bold   sm:text-xl">
                        Contact Numbers:

                        Vice-Principal:                                  +91-9466476262
                        <br></br>
                        Supervisor (Class-10th to 12th):      +91-9466552949
                        <br></br>
                        Supervisor (Class-7th to 9th):          +91-9996331695 
                        <br></br>
                          Supervisor (Class-3rd to 6th):          +91-9034809866
                          <br></br>
                        Supervisor (Class-Nur. to 2nd):        +91-9467732039
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Contactus