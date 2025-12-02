import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import sliderImg1 from '../assets/Cover.svg';
import sliderImg2 from '../assets/Banner.svg';
import sliderImg3 from '../assets/Banner2.svg';

const Slider = () => {
  const images = [sliderImg1, sliderImg2, sliderImg3];

  return (
    <div className='mt-7 container mx-auto '>
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      className="w-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] flex justify-center items-center">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Slider;
