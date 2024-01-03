import Navbar from '@/pages/Header/navbar'
import Main from '../Header/Main';
import React from 'react'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '@/components/homepage/Footer';
function NewAdmission () {
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
        <Main/>
       
         <section className="py-8 bg-white">
  <div className="max-w-screen-xl mx-auto md:px-8">
    <div className="flex items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
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
                        <h3 className="text-indigo-600 font-semibold">
                        New Admission
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Allocation Of Seats
                        </p>
                        <p className="mt-3 text-gray-600">
                       

The admission in the School is given to the wards of the employees of the Police Department posted anywhere in Haryana, the wards of the teachers working in the School and the wards of the general public. Out of the total seats, 60% seats are reserved for the wards of Police employees and teachers on merit and 40% are open to general public on merit.

ADMISSIONS

The admission in the School is given on merit basis as a result of entrance test and interview. The new admission is opened for Nursery. The children who complete 2½ years of age as on I st April of the year of admission are eligible for registration. Registration to other classes is done against vacancies only. The request for registration should be made on the prescribed form. The registration is a pre-condition and doesn&apos; t ensure admission. The registration charges are non refundable. The registration form must be completed in all respects and submitted to the office o or before the prescribed date. The parents are advised to get the date, time of interview and entrance test confirmed from the School office at the time of submission of the registration form.

v  No separate intimation letter regarding date, time of interview and entrance test will be issued. The School will not be responsible if a child, who is already registered, fails to turn up at the interview and entrance test on the scheduled date and time.

 A list of candidates selected for admission, would be put up on the notice-board in the school, on specified date, which should be confirmed from the Administrative Office. The parents are required to come personally and check up the selection list. The dues in respect of children selected for the admission must be deposited within 3 days of notification of the list. The decision of the Admission Committee in all matters concerning admission will be final and binding. The admission may be refused to any candidate without assigning any reason.
The admission in the School is given to the wards of the employees of the Police Department posted anywhere in Haryana, the wards of the teachers working in the School and the wards of the general public. Out of the total seats, 60% seats are reserved for the wards of Police employees and teachers on merit and 40% are open to general public on merit.
                        </p>
                        {/* <Link href="/" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
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
export default NewAdmission;
 