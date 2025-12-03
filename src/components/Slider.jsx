import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import toy1 from "../assets/toy1.png";
import toy2 from "../assets/toy2.png";
import toy3 from "../assets/toy3.png";
import { Link } from "react-router";

const Slider = () => {
  const slides = [
    {
      title: "🧸 Explore the Magic of Play!",
      subtitle: "Colorful toys for curious little minds ✨",
      image: toy1,
      gradient: "from-pink-500/60 via-purple-500/60 to-yellow-400/50",
    },
    {
      title: "🎠 Fun • Play • Imagination",
      subtitle: "Toys that spark creativity & joy 🌈",
      image: toy2,
      gradient: "from-blue-500/60 via-purple-500/60 to-green-400/50",
    },
    {
      title: "🎁 New Arrivals Every Week!",
      subtitle: "Find the perfect toys for every age ⭐",
      image: toy3,
      gradient: "from-orange-500/60 via-pink-500/60 to-purple-500/50",
    },
  ];

  return (
    <div className="mt-6 w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={20}
        centeredSlides={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative w-full rounded-2xl overflow-hidden
                bg-gradient-to-r ${slide.gradient}
                flex flex-col lg:flex-row items-center 
                h-[300px] sm:h-[380px] md:h-[400px] lg:h-[450px]
                shadow-xl`}
            >
              {/* LEFT TEXT AREA */}
              <div className="flex-1 h-full flex flex-col justify-center 
                px-6 sm:px-10 md:px-14 lg:px-20 text-white">

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                  font-bold leading-snug drop-shadow-lg">
                  {slide.title}
                </h1>

                <p className="mt-3 text-sm sm:text-lg md:text-xl opacity-90">
                  {slide.subtitle}
                </p>

                <Link
                  to="/toys"
                  className="mt-6 w-fit px-6 py-3 
                    bg-white text-pink-600 rounded-full font-semibold
                    text-sm sm:text-base md:text-lg shadow-md
                    hover:scale-105 active:scale-95 transition"
                >
                  🛒 Shop Now
                </Link>
              </div>

              {/* RIGHT IMAGE AREA */}
              <div className="flex-1 h-full flex justify-center items-center 
                p-4 sm:p-6 md:p-10">

                <img
                  src={slide.image}
                  alt="Toy"
                  className="h-[180px] sm:h-[240px] md:h-[300px] lg:h-[350px]
                    object-contain drop-shadow-2xl"
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
