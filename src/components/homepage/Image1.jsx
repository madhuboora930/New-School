import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const Image1 = () => {
  const router = useRouter();
    return (
        <div className="bg-white">
  <div className="max-w-screen-xl mx-auto px-4 py-3 items-center justify-between text-black sm:flex md:px-8">
    <div className="flex gap-x-8">
      <Image height={800} width={800} 
        src="/images/intro.png"
        className="w-50 h-50 ml-8 mt-8 mr-8"  
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        alt="Image1"
      />
    </div>
    <div className="w-full">
      <div className="dark:bg-gray-700 w-full mb-4">
        <h1 className="md:ml-40  mt-8 text-black text-xl lg:text-2xl xl:text-3xl  ">An Introduction</h1> 
      </div>
      <div className="dark:bg-gray-700 w-full mb-2.5  md:ml-40 "> 
      The school is located in the very heart of Jind city. A vibrant techno savvy school with an ultra modern campus caters to the needs of new generation learners. Beautifully designed classrooms,
       state of the art infrastructure and a child friendly atmosphere provides a safe and stimulating environment to the young learners. The bricks and mortar it is built with binds the unifying spirit
        and the palpable energy one can feel as one enters the portals of this great institution. The school represents the transformation of education globally. Driven by latest research, the school uses
         innovative teaching methodology with special emphasis on extra-curricular .


         <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-12 dark:focus:ring-yellow-900" onClick={() => router.push("/Introduction/Intro")}>Read More</button>
      </div>
    </div>
  </div>
</div>

    )
}
export default Image1; 