import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { testimonials } from "../Routes/MainRoutes";
import bg from "../assets/testimonialsPicture/bg.jpg";


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
                                {/* <article className="w-full h-[22em] p-6 bg-[var(--cardColor)] rounded-lg shadow flex flex-col  items-center justify-between gap-4 text-center "> */}
                                <article className="w-full h-[22em] relative p-6   rounded-lg shadow flex flex-col  items-center justify-between gap-4 text-center cursor-pointer">
                                    <div
                                        className="w-full h-full  absolute top-0 left-0 -z-10 opacity-[40%] bg-cover bg-center"
                                        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }}
                                    ></div>
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