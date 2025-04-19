import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { testimonials } from "../Routes/MainRoutes"
import { text } from 'framer-motion/client';


function TestimonialsCarousel() {
    return (
        <section className='w-full'>
            <Swiper
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
                            <SwiperSlide key={index} className=''>
                                <article className="w-full h-[22em] p-6 bg-[var(--cardColor)] rounded-lg shadow flex flex-col  items-center justify-between gap-4 text-center">
                                    <p className="  italic">"{text}"</p>
                                    <div className='w-[100px] h-[100px] rounded-[50%] flex items-center justify-center overflow-hidden bg-red-100'>
                                        <img className='w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300' src={imgSrc} alt={author} />
                                    </div>
                                    <h3 className="text-[#b6ce04] font-bold">{author}</h3>
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