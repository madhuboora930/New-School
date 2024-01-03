import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
//  import Navbar from '@/components/homepage/navbar'
 import Navbar from '@/pages/Header/navbar'
import HomepageHeroSection from '@/components/homepage/herosection'
import Card from '@/components/homepage/card'
import Footer from '@/components/homepage/Footer'
import Fisility from '@/components/homepage/Fisility'
import Main from '@/components/homepage/Main'
import Image1 from '@/components/homepage/Image1'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
    //  <Link href="/Hero"></Link>
    // </main>
    <div>
       <Navbar/>
       
       <Main/>
       <Image1/>
       {/* <HomepageHeroSection/> */}

      <Fisility/>
       <Card/>
       <Footer/>
      
    </div>
  )
}
