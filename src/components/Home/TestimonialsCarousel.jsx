import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { useTestimonials } from "../../Routes/MainRoutes";
import bg from "../../assets/testimonialsPicture/bg.jpg";
import { useTranslation } from 'react-i18next';

function TestimonialsCarousel() {
    const testimonials = useTestimonials();
    const { t, i18n } = useTranslation();

    return (
        <section className='w-full'>
            <Swiper
                key={i18n.language}
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {
                    testimonials.map((item, index) => {
                        const { text, author, imgSrc } = item;
                        return (
                            <SwiperSlide key={index} >
                                <article className="w-full h-[22em] relative p-6   rounded-[15px] shadow flex flex-col  items-center justify-between gap-4 text-center cursor-pointer overflow-hidden font-montserrat">
                                    <div
                                        className="w-full h-full  absolute top-0 left-0 -z-10 opacity-[40%] bg-cover bg-center"
                                        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }}
                                    ></div>
                                    <p className="  italic">"{t(text)}"</p>
                                    <div className='w-[100px] h-[100px] rounded-[50%] flex items-center justify-center overflow-hidden bg-slate-100'>
                                        <img className='w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300' src={imgSrc} alt={t(author)} />
                                    </div>
                                    <h3 className="text-[#b6ce04] font-bold">{t(author)}</h3>
                                </article>
                            </SwiperSlide>
                        )

                    })
                }
            </Swiper>
        </section>
    );
}

export default TestimonialsCarousel;