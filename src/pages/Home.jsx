import { memo, useCallback, useState } from 'react'
import { NavLink } from "react-router-dom";
import WrapperResponsiveImage from '../components/WrapperResponsiveImage';
import DiscoverCards from '../components/DiscoverCards.jsx';







const Home = memo(() => {




  return (
    <>
      <section className='relative w-full  px-4 md:px-0  h-[calc(100vh-80px)] mx-auto my-0'>
        <main className='w-full h-full  flex flex-col items-center justify-around'>

          {/* <div className='absolute w-full h-full -z-50 '>
            {
              images.map((img, index) => {
                const { src, alt, className } = img;
                return (
                  <motion.img
                    initial={{ y: 0 }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    key={index} src={src} alt={alt} className={`object-cover absolute  ${className} opacity-80`} width="100px" height="100px" loading='lazy' />
                )
              })
            }
          </div> */}

          <div className=' w-full flex items-center  justify-evenly  flex-col md:flex-row'>


            <WrapperResponsiveImage />

            <div className='flex items-center justify-center  w-full md:w-3xl h-full uppercase font-extrabold  ' style={{ fontSize: "clamp(25px, 4vw, 50px)" }}>

              <h1 className='text-center '>Your Destination for <span className='text-[var(--primary)] font-xander'>Organic & Natural</span> Food </h1>
            </div>



          </div>


          <NavLink to="/products" className='px-10 py-3 bg-[var(--primary)] rounded-[30px] font-medium uppercase text-black' data-discover="true" aria-label="Products page">
            See More
          </NavLink>

        </main>
      </section>

      <DiscoverCards/>
  
    </>

  )
})

export default Home;