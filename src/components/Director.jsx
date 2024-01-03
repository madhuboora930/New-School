import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
 const Director = () => {
  return (
    <div>
        
<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link href="/images/logo.png" className="flex items-center">
            <Image src="/images/logo.svg" className="h-8 mr-3"  height={20} width={20}alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">School Logo</span>
        </Link>
        <div className="flex items-center">
            <Link href="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link>
            <Link href="#" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <Link href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link href="/About" className="text-gray-900 dark:text-white hover:underline">Company</Link>
                </li>
                <li>
                    <Link href="/About" className="text-gray-900 dark:text-white hover:underline">Team</Link>
                </li>
                <li>
                    <Link href="/About" className="text-gray-900 dark:text-white hover:underline">Features</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

    </div>
  )
}
export default  Director;
