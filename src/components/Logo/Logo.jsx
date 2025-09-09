import React from 'react';
import navLogo from '../../assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to={'/'}>
            <div className='flex gap-1 items-center'>
            <img className='hidden md:flex w-12 h-10 object-cover' src={navLogo} alt="" />
            <h2 className="text-lg md:text-2xl font-bold">Plant Care</h2>
            </div>
        </Link>
    );
};

export default Logo;