import React from 'react'
import Navbar from '@/pages/Header/navbar'
import Footer from '@/components/homepage/Footer'
import Main from '@/pages/Header/Main'
import Image from 'next/image'
import Link from 'next/link'
function PrincipalMessage() {
  return (
    <div>
      <Navbar/>
      <Main/>
<section className="py-8">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image height={800} width={800}  src="/images/principal.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3  mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-indigo-600  text-3xl font-semibold">
                        Principal Message
                        </h3>
                        <p className="text-gray-800  font-semibold sm:text-xl">
                        “Live as if you were to die tomorrow. Learn as if you were to live forever”
                        </p>
                        <p className="mt-3 text-gray-600">
                        Education is not merely acquirement of facts but also of values which help us to improve the different facets of mankind. It ensures that we leave the world a far better place than we found it. A pivotal role of education lies in shaping the personality of a child into a healthy mind and happy soul, who is not only equipped with 21st century skills and aptitude required for academic excellence but helping him to face the challenges of life in a balanced and harmonious way.
                         Therefore, the system of education should work as a catalyst in making each child a balanced human being having his core strengths embedded in the learning experiences emanating from our rich socio-cultural roots.
In Indus Public School, Jind we enterprise to map academic excellence with a good human value system, which in myriad ways is ingrained in the culture of the school. To achieve this, we strongly feel that a paradigm shift in the minds of all stake holders should take place so that when the school becomes the hub to initiate and formalize education it has its tenets enshrined in a good value system; the extension of which is thereby taken home where it is further strengthened. Our commitment to such education will always persist in all our endeavours.
In this pursuit of excellence, I appreciate our parent fraternity for supporting the school in every aspect. I also laud the relentless efforts of our teachers for giving their best in bringing out the best in each child. But I would persuade the students to be always modest, humble and disciplined, while being ready to expand the horizons of their knowledge and skills by dreaming big and working hard.
                        </p>
                        < Link href="/" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                        Mrs. Aruna Sharma 
Principal
                            
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    <Footer/></div>
  )
}

export default PrincipalMessage