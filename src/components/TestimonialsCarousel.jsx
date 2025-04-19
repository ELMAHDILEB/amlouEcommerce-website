import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {testimonials} from "../Routes/MainRoutes"


function TestimonialsCarousel() {
    return (
     <section className='w-full'>
           <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
            }}
        >
            {testimonials.map((item) => (
                <SwiperSlide key={item.id} className='w-full bg-red-400'>
                    <div className=" h-[22em] p-6 bg-white rounded-lg shadow flex flex-col gap-4 text-center">
                        <p className="text-gray-700 italic">"{item.text}"</p>
                        <h3 className="text-[var(--primary)] font-bold">{item.author}</h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
     </section>
    );
}

export default TestimonialsCarousel;