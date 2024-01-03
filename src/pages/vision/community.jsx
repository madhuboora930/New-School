import React from 'react'
import Navbar from '@/pages/Header/navbar'
import Footer from '@/components/homepage/Footer'
import Main from '@/pages/Header/Main'
import Image from 'next/image'
import Link from 'next/link'
function Community() {
  return (
    <div>
      <Navbar/>
      <Main/>
<section className="py-8 bg-white">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image height={800} width={800}  src="/images/n61b9993416de3.jpeg" className="md:max-w-lg sm:rounded-lg" alt="Community" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3  mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600  text-3xl font-semibold">
                        Community
                        </h3>
                        <p className="text-gray-800  font-semibold sm:text-xl">
                        &quot; A Heartfelt Message &quot;
                        </p>
                        <p className="mt-3 text-gray-600">
                        Better Learning Environment{':'} A positive and supportive community contributes to a better learning environment, which can enhance the overall educational experience for students.

Improved Communication{':'} Open communication within the community helps in understanding the needs and expectations of all stakeholders.

Increased Engagement{':'} Engaged students, teachers, and parents contribute to a vibrant and dynamic school community.

Social and Emotional Support{':'} A sense of belonging and community provides social and emotional support, which is essential for the well being of students and staff.

Collaborative Decision-Making{':'} Collaboration within the community allows for shared decision-making processes, leading to better outcomes for everyone involved.

Building a strong school community requires ongoing efforts to foster positive relationships, effective communication, and a shared commitment to the success and well being of all its members.
 

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

export default Community