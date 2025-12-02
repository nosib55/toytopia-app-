import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
const HomeLayout = () => {
    return (
       <div className='flex flex-col min-h-screen'>
        <NavBar></NavBar>
        
             <div className='flex-1'><Outlet /></div>
            
            <Footer></Footer>

           
        </div>
    );
};

export default HomeLayout;