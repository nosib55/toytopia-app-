import React from 'react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import MapToys from './MapToys';
import State from '../components/State';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Slider></Slider>
           <div className=' mt-4 flex justify-center'> <h2 className='text-center text-3xl w-[30%] font-bold text-[#fff] bg-gradient-to-r from-blue-500 to-indigo-600 '>POPULAR TOYS</h2></div>
           <MapToys></MapToys>
           <Testimonials></Testimonials>
           <State></State>
        </div>
    );
};

export default Home;