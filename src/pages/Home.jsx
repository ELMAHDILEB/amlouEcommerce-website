import { memo} from 'react'
import { NavLink } from "react-router-dom";
import WrapperResponsiveImage from '../components/WrapperResponsiveImage';
import DiscoverCards from '../components/DiscoverCards.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import FeaturedProducts from '../components/FeaturedProducts.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Newsletter from '../components/News.jsx';
import Footer from '../components/Footer.jsx';



const Home = memo(() => {

  return (
    <>
      <section className='relative w-full  px-4 md:px-0  mx-auto my-0'>
        <main className='w-full h-full flex flex-col items-center justify-around'>
          <div className=' w-full flex items-center  justify-evenly  flex-col md:flex-row'>
            <WrapperResponsiveImage />
            <div className='flex items-center justify-center  w-full md:w-3xl h-full uppercase font-extrabold  ' style={{ fontSize: "clamp(25px, 4vw, 50px)" }}>
              <h1 className='text-center '>Your Destination for <span className='text-[var(--primary)] font-lobster tracking-[10px]'>Organic & Natural</span> Food </h1>
            </div>
          </div>
          <NavLink to="/products" className='px-10 py-3 bg-[var(--primary)] rounded-[30px] font-medium uppercase text-black ' data-discover="true" aria-label="Products page">
            See More
          </NavLink>
        </main>
      </section>
      <DiscoverCards/>
      <WhyChooseUs/>
      <FeaturedProducts/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </>

  )
})

export default Home;