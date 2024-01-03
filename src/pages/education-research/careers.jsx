import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import Image from 'next/image'
import React from 'react'

function Careers() {
  

  return (
    <div>
      <Navbar/>
      <div className="flex-1 sm:hidden lg:block ">
                        <Image height={800} width={800}  src="/images/Career-Counselling.jpg"
                         className="max-w-full -z-10 h-[375px] w-full m-auto relative group" alt="Careers" />
                    </div>
                    <main className="py-24">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3">
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                        <h3 className="text-black-600 font-semibold">
                        Career-connected learning is an all-immersive experience that prepares students for careers and connects employers to potential – and capable – students. This experience involves various methods, including career and technical education (CTE), work-based learning (WBL), and career exploration. Hinting at the future and acknowledging what students’ skills and interests are can provide purpose and motivation for students that is both personal and attainable. The merging of education, career preparation, and skills training into a new ecosystem becomes fundamental to nourishing the talent and economies of the future. 

Teachers and researchers say that teaching through relevance and individualized learning will yield a cumulative effect on students’ experience and interest in schools and their futures.
                        </h3>
                       
                        <Image height={800} width={800} 
        src="/images/Career-Counselling.jpg" aria-hidden="true"alt="Careers1"
        className=' w-full m-auto relative group'
      />
                        {/*  */}
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md ">
                    <Image height={800} width={800}  src="/images/Career-Connected-Learning-2-999x1024.png" className="md:max-w-lg sm:rounded-lg" alt="Careers" />
                    
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
     </div>
  )
}

export default Careers