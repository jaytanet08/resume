import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../assets/style/carousel.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function CarouselDetailPort({ img }) {

  return (
    <>

      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {img.map((src, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="carousel-image"
                src={src}
              />
            </SwiperSlide>
          )
        })}

      </Swiper>
    </>
  );

}
