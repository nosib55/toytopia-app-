"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    {
      name: "Ayesha Rahman",
      text: "Great quality toys at amazing prices! My kids loved every item.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Hasibul Islam",
      text: "Fast delivery and excellent packaging. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=18",
    },
    {
      name: "Rafia Binte Karim",
      text: "Best toy store online! Very safe for kids and durable.",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "John Adams",
      text: "I bought educational toys, and the quality is top-notch!",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      name: "Maria Lopez",
      text: "Great variety of toys. Love the cute character collections!",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Kevin Brown",
      text: "Customer support is amazing. Toys arrived within 2 days.",
      avatar: "https://i.pravatar.cc/150?img=22",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900 transition">
      <h2 className="text-4xl font-extrabold text-center text-blue-600 dark:text-blue-400">
        Toy Store Reviews
      </h2>

      <div className="max-w-4xl mx-auto mt-14">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFlip, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl 
                         shadow-xl p-8 text-center transition"
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <img
                  src={item.avatar}
                  className="w-20 h-20 rounded-full object-cover shadow-md"
                  alt={item.name}
                />
              </div>

              <p className="text-gray-700 dark:text-gray-300 mt-6 italic">
                "{item.text}"
              </p>

              <h3 className="mt-4 font-bold text-gray-900 dark:text-white">
                {item.name}
              </h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
