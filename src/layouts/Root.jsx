import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
          <Navbar/>
          <div className='max-w-7xl mx-auto'>
            <Outlet/>
          </div>
          <Footer/>
        </div>
    );
};

export default Root;