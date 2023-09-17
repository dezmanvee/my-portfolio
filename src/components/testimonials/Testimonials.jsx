import "./Testimonials.css"
import { Data } from "./Data"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// Initialize Swiper modules
const Testimonials = () => {
  return (
    <section className="section  container testimonials" id="testimonials">
        <h2 className="section__title">What people say</h2>
        <span className="section__subtitle">Testimonials</span>

        <Swiper className="testimonial__container"
       
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
       >
            {Data.map(person =>{
                const{id, image, name, description} = person
                return(
                    <SwiperSlide key={id} className="testimonial__card">
                        <img src={image} alt={name} className="testimonial__img" />
                        <h3 className="testimonial__name">{name}</h3>
                        <p className="testimonial__decription">{description}</p>
                    </SwiperSlide>
                   )
               })
            }

        </Swiper>
    </section>
  )
}
export default Testimonials