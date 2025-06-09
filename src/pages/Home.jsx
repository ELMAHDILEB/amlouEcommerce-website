import { memo } from 'react'
import DiscoverCards from '../components/Home/DiscoverCards.jsx';
import WhyChooseUs from '../components/Home/WhyChooseUs.jsx';
import FeaturedProducts from '../components/Home/FeaturedProducts.jsx';
import Testimonials from '../components/Home/Testimonials.jsx';
import Newsletter from '../components/Home/News.jsx';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/Home/HeroSection.jsx';
import MetaTag from '../components/MetaTag.jsx';



const Home = memo(() => {

  return (
    <>
    <MetaTag pageKey="home"/>
      <section className='relative w-full  px-4 md:px-0  mx-auto my-0 '>
        <HeroSection />
      </section>
      <DiscoverCards />
      <WhyChooseUs />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>

  )
})

export default Home;