import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import toy1 from "../assets/toy1.png";
import toy2 from "../assets/toy2.png";
import toy3 from "../assets/toy3.png";
import { Link } from 'react-router';

const Slider = () => {
  const slides = [
    {
      title: "🧸 Explore the Magic of Play!",
      subtitle: "Colorful toys for curious little minds ✨",
      image: toy1,
      gradient: "from-pink-300 via-purple-300 to-yellow-200"
    },
    {
      title: "🎠 Fun • Play • Imagination",
      subtitle: "Toys that spark creativity & joy 🌈",
      image: toy2,
      gradient: "from-blue-300 via-purple-300 to-green-200"
    },
    {
      title: "🎁 New Arrivals Every Week!",
      subtitle: "Find the perfect toys for every age ⭐",
      image: toy3,
      gradient: "from-orange-300 via-pink-300 to-purple-300"
    }
  ];

  return (
    <div className="mt-7 container mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px] 
              rounded-2xl overflow-hidden flex bg-gradient-to-r ${slide.gradient}`}
            >
              {/* LEFT SIDE — TEXT */}
              <div className="w-1/2 flex flex-col justify-center px-6 md:px-12 text-white font-toy">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="mt-3 text-md sm:text-lg md:text-xl opacity-90">
                  {slide.subtitle}
                </p>

               <Link
  to="/toys"
  className="mt-6 w-fit px-6 py-3 bg-white text-pink-600 
  rounded-full font-semibold text-lg shadow-md 
  hover:scale-105 transition-transform inline-block"
>
  🛒 Shop Now
</Link>
              </div>

              {/* RIGHT SIDE — IMAGE */}
              <div className="w-1/2 flex justify-center items-center p-6">
                <img
                  src={slide.image}
                  alt="Toy"
                  className="h-full object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
