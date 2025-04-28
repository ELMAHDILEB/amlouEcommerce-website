import Slider from "../components/About/Slider.jsx";
import ContentAbout from "../components/About/ContentAbout.jsx";

function About() {
  return (
    <section className="w-full  px-4 md:px-0  mx-auto my-0 font-montserrat md:py-4 flex flex-col md:flex-row items-center justify-center gap-5  pt-0 lg:pt-20 text-[var(--colorBlack)]">
        <Slider/>
        <ContentAbout />
    </section>
    
  )
}

export default About;