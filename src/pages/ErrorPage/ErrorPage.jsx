import React from 'react';
import notFound from '../../assets/404_page-not-found.png'
import { Link } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const ErrorPage = () => {
    return (
        <>
        <Navbar/>
        <div className='max-w-md mx-auto px-1'>
            <div className='flex flex-col items-center justify-center min-h-screen my-10'>
            <img className='h-[350px] object-cover' src={notFound} alt="" />
            <Link to='/'>
                <button className='btn btn-primary'>Go Back Home</button>
            </Link>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ErrorPage;