import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
const posts = [
    {
        title: "Transport Facilities",
        desc: "The school has its own vans for taking students to different places for participating in various activities . School provides transport facility to students across the city. To ensure total safety of children the vans have attendant on board . At present the school has a fleet of 4 vans. It will be the responsibility of the parents to ensure that their children reach the pick-up points well in time, as the transport will not be delayed if the child is not available at the pick-up point. In case of any problem regarding vans the Transport Incharge may be contacted.",
        img: "/images/schooltransport.jpg",
        href: "/Facility/Transport "
    },
    {
        title: "Library Facilities",
        desc: "The library in our school is being made the most attractive place in the school so that students will be naturally drawn to it. Research shows that reading for enjoyment is more important for children’s educational success that their family’s socio-economic status. To develop kids’ interest in reading, we have an interesting collection of story books like PANCHTANTRA , MORAL STORY BOOKS, GRANDMA’S STORIES,FAIRY TALES like Cindrella, Snow white and seven Dwarfs, etc. The way to get children reading is to leave the library door open and let them read anything and everything they want.",
        img: "/images/liberey.jpeg",
       
        href: "/Facility/Library"
    },
    {
        title: "Computer Labs",
        desc: "Computer education in school plays important role in students career development. Almost everywhere computers are used at large. This is the need of the hour to educate students in computer education.",
        img: "/images/computer.jpeg",
        
        href: "/Facility/Computerlab"
    },
    {
        title: "Sports Facilities",
        desc: "Playing sports can help students increase their self-esteem and develop more confidence . A sportsman knows that winning and losing are parts of sports, so maintaining , a sportsmanship is the best way of mental strength and success.",
        img: "/images/sport.jpeg",
        
        href: "/Facility/Sports"
    }
]

const Fisility = () => {
    const router = useRouter();
    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
                    <h1 className="text-blue-800 text-4xl font-extrabold sm:text-4xl">Facilities</h1>
                    <p className="text-red-600 text-2xl">Reasons To Believe Why Aadharshila  Choosing Success</p>
                    
                </div>
                <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((items, key) => (
                            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                                 <Link href={items.href}>
                                
                                    <Image height={800} width={800}  src={items.img} loading="lazy" alt={items.title} className="w-full rounded-lg" />
                                    <div className="mt-3 space-y-2">
                                        <span className="block text-gray-800 text-sm">{items.date}</span>
                                        <h1 className="text-xl text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                                            {items.title}
                                        </h1>
                                        <p className="text-gray-600 text-lg duration-150 group-hover:text-gray-800">{items.desc}</p>
                                    </div>
                                    <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"  onClick={() => router.push("/")}>Read More</button>
                               
                                </Link>
                            </li>
                            
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
export default Fisility;


