import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

// const slides = [
//   {
//     url: 'https://ipsjind.edu.in/templates/indus-jind//img/flash-img.jpg',
//   },
//   {
//     url: 'https://lh3.googleusercontent.com/p/AF1QipOWlm6X2EvBySArf-5uS79oT2n9CkacULfpF3UB=s680-w680-h510',
//   },
//   {
//     url: 'https://scontent.fdel3-4.fna.fbcdn.net/v/t39.30808-6/247882848_2727044740923505_6050696105191699017_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MK6HbhjxUSQAX-St6yi&_nc_ht=scontent.fdel3-4.fna&oh=00_AfCStz2ESErImT74CjQmAhRbqHegeW5giXt9X4RVkG37ig&oe=655C141E',
//   },
//   {
//     url: 'https://lh5.googleusercontent.com/p/AF1QipPbKhckUyR1Y1roeeu6pUhuQJLyEuwVM2xNKNSD=w141-h101-n-k-no-nu',
//   },
//   {
//     url: 'https://www.ipsjind.edu.in/downloads/photos/images/n64d4abecb69c5.jpg',
//   },
// ];

const Main = () => {
  // s

  return (
    <div className='max-w-full -z-10 h-[375px] w-full m-auto relative group'>
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center  bg-cover duration-500'
      >

<Image height={800} width={800} 
        src="/images/indus.jpg" aria-hidden="true"alt="Indus School"
        className='max-w-full -z-10 h-[375px] w-full m-auto relative group'
      />
      
      </div>
      
    </div>
  );
};

export default Main;
