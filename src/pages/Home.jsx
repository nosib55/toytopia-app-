import React from 'react';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import MapToys from './MapToys';
import State from '../components/State';
import Testimonials from '../components/Testimonials';
import HomeProducts from './HomeProducts';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <Slider></Slider>
          <HomeProducts></HomeProducts>
           <Testimonials></Testimonials>
           <State></State>
        </div>
    );
};

export default Home;