import React, { useEffect, useState } from 'react';
import "./Slider.css";
import { data } from "../../Routes/MainRoutes";
import ContentAbout from './ContentAbout';

const Slider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interVal = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(interVal);
  }, [data.length]);

  const {id, img,title} = data[currentIndex]

  return (
    <section className='relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-5  pt-0 lg:pt-20 ' >
      <div className='relative w-full md:w-[40%] h-[200px] lg:h-fit aspect-square overflow-hidden py-2  flex justify-center items-center'>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='absolute z-[-1] w-full h-full '>
          <path fill="#7c8c03" d="M58,-48.3C68.9,-32.5,67.4,-8.7,61.9,13.6C56.4,35.9,46.9,56.7,29.9,66.7C12.9,76.6,-11.5,75.6,-29.2,65.3C-46.9,55,-57.9,35.3,-64.6,12.8C-71.3,-9.8,-73.7,-35.2,-62.3,-51.2C-50.8,-67.2,-25.4,-73.7,-0.9,-73C23.5,-72.2,47,-64.2,58,-48.3Z" transform="translate(100 100)" />
        </svg>
        <div key={id} className='absolute z-[1000] flex items-center justify-center w-full h-[80%]'>
          <img src={img} alt={title} className='w-full h-full object-contain  animated-img' />
        </div>
      </div>
      <ContentAbout />
      
    </section>
  );
}

export default Slider;
