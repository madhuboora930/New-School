import Footer from '@/components/homepage/Footer'
import Navbar from '@/pages/Header/navbar'
import Image from 'next/image'
import React from 'react'

function Picture () {
    const team = [
        {
            avatar: "/images/gellery.jpg",
            // name: "Martiana dialan",
            // title: "Product designer"
        },
        {
            avatar: "/images/n64c203c3e43d3.jpg",
            // name: "Micheal colorand",
            // title: "Software engineer"
        },
        {
            avatar: "/images/n6374682ada5b0.jpg",
            // name: "Brown Luis",
            // title: "Full stack engineer"
        },
        
        
        {
            avatar: "/images/n63ad1d4040d8b.jpg",
            // name: "Vicky tanson",
            // title: "Product manager"
        },
        {
            avatar: "/images/n63ad1d4040d8b.jpg",
            // name: "Vicky tanson",
            // title: "Product manager"
        },
        {
            avatar: "/images/n63ad1d4040d8b.jpg",
            // name: "Vicky tanson",
            // title: "Product manager"
        }, 
        {
            avatar: "/images/n63ad1d4040d8b.jpg",
            // name: "Vicky tanson",
            // title: "Product manager"
        },
        {
            avatar: "/images/n63ad1d4040d8b.jpg",
            // name: "Vicky tanson",
            // title: "Product manager"
        }, 
    ]
  return (
    <div>
        <Navbar/>
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our School Gallery
                    </h3>
                    {/* <p className="text-gray-600 mt-3">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p> */}
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <Image height={800} width={800} 
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt="Picture"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                        <p className="text-indigo-600">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
     <Footer/>
    </div>
  )
}

export default Picture