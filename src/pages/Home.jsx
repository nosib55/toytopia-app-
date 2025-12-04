import React from 'react';
import Slider from '../components/Slider';
import State from '../components/State';
import Testimonials from '../components/Testimonials';
import HomeProducts from './HomeProducts';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div className="bg-base-200">

            {/* FIXED CONTAINER */}
            <div className="max-w-7xl mx-auto px-4 space-y-16 py-5">

                <Slider />

                <HomeProducts />

                <WhyChooseUs />

                <Testimonials />

                <State />

            </div>
        </div>
    );
};

export default Home;
