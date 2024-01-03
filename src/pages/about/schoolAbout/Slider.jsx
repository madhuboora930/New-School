import Image from 'next/image';
import  { useState, useEffect } from 'react'
const slides = [
  {
    url: '/images/slide-2.jpg',
  },
  {
    url: '/images/indus.jpg',
  },
  {
    url: '/images/pluspoint.jpg',
  },
  // Add more slide objects as needed
];
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };



  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-advance to the next slide every 5 seconds (adjust as needed)
  useEffect(() => {
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };

    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  
  return (
    <div>
      

      


      <div id="indicators-carousel" className="relative w-full" data-carousel="static">
  {/* Carousel wrapper */}
   <div className="relative h-96 overflow-hidden rounded-lg">
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`w-full h-full absolute top-0 left-0 transform transition-transform duration-700 ease-in-out ${
          index === currentIndex ? 'opacity-100' : 'opacity-0'
        }`}
        data-carousel-item={index === currentIndex ? 'active' : ''}
      >
        <Image height={800} width={800}  src={slide.url} className="w-full h-full object-cover" alt={`Slide ${index + 1}`} />
      </div>
    ))}
  </div> 
  {/* ... (unchanged) */}
 </div> 


</div>
  )
}

export default Slider