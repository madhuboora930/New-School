import React from 'react'
import Navbar from '@/pages/Header/navbar'
import Footer from '@/components/homepage/Footer'
import Image from 'next/image'
import Link from 'next/link'
const Syllabus = () => {
  return (
    <div>
     <Navbar/>
     <section className="py-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src="/images/syllabus.jpeg" className="md:max-w-lg sm:rounded-lg" style={{ width: '100%', height: 'auto' }} 
                        alt="Syllabus" height={500} width={500} />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600 font-semibold">
                           Syllabus 
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our curriculum
                        </p>
                        <p className="mt-3 text-gray-600">
                        Our curriculum is equipped with a unique integration of traditional educational theory and practice from India and abroad. We instill a firm traditional and cultural base in our curriculum to ensure a sense of identity, spiritualism and ethics in the students.

Indus Public School seeks to implement a learning model, using teaching systems and methods that initiate learning activities, encourage the students to focus on the thought and feelings that are being experienced, to derive new learning from the activity and in the process, become more knowledgeable, more confident and a committed individual capable of making informed choices.

Our curriculum at the Pre-Primary Level is structured to nurture our young ones carefully. It has been specially designed to cater their desires to absorb and inquire, thus enhancing their inbuilt abilities. It has been specially designed to suit their physical, mental and emotional needs.

&quot; Junior Wing&quot; encourages holistic development of the children by providing emotional strength, loving care, innovative environment and learning fun under the supervision of skilled and dedicated teachers.

In the middle and senior school, students are trained to acquire organizational and analytical skills and to also gain confidence.

In line with our Core Philosophy, the teaching and learning model designed thus aims to:

1  Emphasize a structured learning process, where the teacher facilitates, inspires and imparts a strong practical slant to the entire learning experience.

2  Utilize many varied and interactive teaching methods, including cutting-edge technology to stimulate different areas of intelligence. Our children not only realize the need to learn, but actively want to learn as well.
                        </p>
                        {/* < href="/" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    <Footer/>



    </div>
  )
}

export default Syllabus