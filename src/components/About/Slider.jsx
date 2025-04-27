import React, { useEffect, useState } from 'react';
import "./Slider.css"
import {data} from "../../Routes/MainRoutes"
import ContentAbout from './ContentAbout';

const Slider = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interVal = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length)
    }, 4000)

    return () => clearInterval(interVal);
  }, []);

  return (
    <section className='w-full h-full  flex flex-col md:flex-row items-center justify-center gap-10 bg-rd-200 pt-20'>
      <div key={data[currentIndex].id} className='flex items-center justify-center flex-col w-full md:w-[40%] h-fit aspect-square overflow-hidden py-5 '
      >
        <img src={data[currentIndex].img} alt={data[currentIndex].title} className='w-full h-fit object-contain animated-img  ' />
      </div>

      <ContentAbout />
    </section>
  )
}

export default Slider;


