import React from 'react';
import './testimonials.css';
import {data} from './data'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id='testimonials' >
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data &&
          data.map(({id, avatar, name, review}) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img  src={avatar} alt='Ava one' />
            </div>
            <h5 className='client__name'> {name} </h5>
            <small className='client__review'>
              {review}
            </small>
          </SwiperSlide>
          ))
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;
