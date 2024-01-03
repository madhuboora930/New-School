import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const slides = [
  {
    url: '/images/indus.jpg',
  },
  {
    url: '/images/pluspoint.jpg',
  },
  
  {
    url: '/images/akshit.jpg',
  },
  {
    url: '/images/plus.jpg',
  },
];

const Main = () => {
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
    <div className='max-w-full -z-10 h-[375px] w-full m-auto relative group'>
      {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div> */}
      {/* Left Arrow */}
      {/* ... (unchanged) */}
      {/* Right Arrow */}
      {/* ... (unchanged) */}
      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${slideIndex === currentIndex ? 'text-blue-500' : 'text-gray-500'}`}
          > */}
            {/* Consider using a different icon or style for the dots */}
            {/* {slideIndex === currentIndex ? '●' : '○'}
          </div>
        ))}
      </div> */}
      <div id="indicators-carousel" className="relative w-full" data-carousel="static">
  {/* Carousel wrapper */}
  <div className="relative h-96 overflow-hidden rounded-lg">
      <div
          className={`w-full h-full absolute top-0 left-0 transform transition-transform duration-700 ease-in-out 
         `}
        data-carousel-item={'active'}
      >
        <Image height={800} width={800}  src={slides[currentIndex].url} className="w-full h-full object-cover" alt={`Slide ${currentIndex}`} />
      </div>

  </div>
  {/* ... (unchanged) */}
</div>

    </div>
  );
};

export default Main;
