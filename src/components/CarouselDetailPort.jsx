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

export default function CarouselDetailPort() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
           <SwiperSlide><img alt="example" src="/assets/img/portfolio/b1.png" /></SwiperSlide>
           <SwiperSlide><img alt="example" src="/assets/img/portfolio/a1.png" /></SwiperSlide>
      </Swiper>
    </>
  );

}
