import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer/Footer';
import Loading from '../components/Loading/Loading';

const Root = () => {
  const {state} = useNavigation();
  // console.log(state);
    return (
        <div>
          <Navbar/>
          <div className='max-w-[1500px] mx-auto'>
            {state==='loading' ? <Loading/> : <Outlet/>}
          </div>
          <Footer/>
        </div>
    );
};

export default Root;