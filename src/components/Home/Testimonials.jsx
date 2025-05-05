import TestimonialsCarousel from "./TestimonialsCarousel";
import { useTranslation } from "react-i18next";
const  Testimonials = ()=> {
  const {t} = useTranslation();
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 p-4 mx-auto ">
        <h1  className="break-normal uppercase tracking-[4px] font-black text-[var(--primary)] leading-[32px] py-5  md:py-10 text-center" style={{ fontSize: "clamp(15px, 4vw, 50px)" }}>{t("testimonials.primaryTitle")}</h1>

        <TestimonialsCarousel/>

    </section>
  )
}

export default Testimonials;