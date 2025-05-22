import React from 'react';

const Slider = () => {
    return (
            <div className="carousel mt-10 rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full px-1">
                <img
                src="https://i.ibb.co/HfndJkwK/shutterstock-1813119916-jpg-optimal.jpg"
                className="w-full h-[85vh] object-cover opacity-60" />
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-10 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className='max-w-md space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20'>
                    <h2 className="font-semibold text-3xl md:text-4xl"><span className='text-yellow-300'>Nurture Your Green Oasis,</span> Indoors & Out</h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>Keep track of watering, sunlight and care routines for all your plants—whether it's your cozy indoor fern or your kitchen lemon tree.</p>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co/tTH2qBfv/202203024-tm-flowers-in-containers.jpg"
                className="w-full h-[85vh] object-cover opacity-60" />
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-10 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className='max-w-md space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20'>
                    <h2 className="font-semibold text-3xl md:text-4xl"><span className='text-yellow-300'>Bring Color to Life, One Pot at a Time</span>, Indoors & Out</h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>Track blooming cycles, seasonal tips, and container-friendly care for your vibrant patio plants.</p>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co/7N02dTSk/Hero-16x9-min-3a6d239626.jpg"
                className="w-full h-[85vh] object-cover opacity-60" />
                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-10 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className='max-w-md space-y-5 absolute top-10 md:top-1/3 left-12 md:left-20'>
                    <h2 className="font-semibold text-3xl md:text-4xl"><span className='text-yellow-400'>Smart Care for Your</span> Modern Garden</h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>Stay organized with reminders and growth insights for your fruit trees and minimalist planters.</p>
                </div>
            </div>
        </div>
    );
};

export default Slider;