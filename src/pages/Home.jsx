import React from 'react';
import Slider from '../components/Slider';
import MapToys from './MapToys';
import State from '../components/State';
import Testimonials from '../components/Testimonials';
import HomeProducts from './HomeProducts';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
           
           <Slider></Slider>
          <HomeProducts></HomeProducts>
          <WhyChooseUs></WhyChooseUs>
           <Testimonials></Testimonials>
           <State></State>
        </div>
    );
};

export default Home;