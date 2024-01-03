import React from 'react'
import Navbar from '@/pages/Header/navbar'
import Main from '@/pages/Header/Main'
import Footer from '@/components/homepage/Footer'
import Image from 'next/image'
import Link from 'next/link'



function DirectorMessage() {
    
  return (
    <div>
<Navbar/>
<Main/>
<section className="py-8">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src="/images/director.jpg" className="md:max-w-lg sm:rounded-lg" alt="Director" height={300} width={300} />
                    </div>
                    <div className="max-w-xl px-4 space-y-3  mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600  text-3xl font-semibold">
                        Director Message
                        </h3>
                        <p className="text-gray-800  font-semibold sm:text-xl">
                        &quot;The great aim of education is not knowledge but action.&quot;
                        </p>
                        <p className="mt-3 text-gray-600">
                        Hello and welcome to Indus Public School. I hope that you will find the contents of this website as enthralling, exciting and invigorating as the reality of my daily experience as the Director of Indus Public School. As I walk through the portals of this institution, I am captivated by the enthusiasm of our students, the expertise of our staff and the uniqueness of what we, as a school, offer our community. I hope you will have the same sense of joyful discovery as you navigate this site.
From a modest beginning in 2003, our school has now grown into a fully integrated institution. Whether you are a prospective student, current student, teacher, staff member, parent, neighbor, or visitor, your interest and enthusiasm are valued and appreciated in helping us nurture talent. We are dedicated to provide all students with a safe learning environment and the opportunity to develop into well rounded responsible citizens. Our objective is to offer a diverse academic curriculum, wide array of extra-curricular activities and to continually strive to enhance our student’s strength. Not only did we make tremendous academic strides in past years, but we also achieved significant athletic excellence.
 Clearly, our people are accepting the challenge to excel in all areas of school life and we plan to keep doing our best in serving the society by nourishing great minds. 
As parents your words of encouragement to our staff and our students will go a long way in a process that requires a positive contribution by every member of the team. Thank you for your valuable support and interest in our institution of learning. Please feel free to contact us with questions or concern regarding the educational needs of your child. Your ideas and cooperation are important and critical to our success.
 

 
 
Subhash Sheoran
 
Director
                        </p>
                        <Link href="/" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium"/>
                        Subhash  Sheoran  Director
                    </div>
                </div>
            </div>
        </section> 
  
    <Footer/>
    </div>
  )
}

export default DirectorMessage