import React from 'react';

const Slider = () => {
    return (
        <div className="carousel rounded-md">

            <div id="slide1" className="carousel-item relative w-full px-1 h-[80vh]">
                <img
                    src="https://i.ibb.co/HfndJkwK/shutterstock-1813119916-jpg-optimal.jpg"
                    className="w-full h-full object-cover"
                    alt="Slide 1"
                />
            
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10"></div>

                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-30 transform justify-between pointer-events-auto">
                    <a href="#slide3" className="btn btn-circle bg-white/70 hover:bg-white">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-white/70 hover:bg-white">❯</a>
                </div>

                <div className="max-w-md space-y-4 absolute top-10 md:top-1/3 left-12 md:left-20 z-20 text-white drop-shadow-lg pointer-events-none">
                    <h2 className="font-semibold text-2xl md:text-3xl">
                        <span className='text-yellow-300'>Nurture Your Green Oasis,</span> Indoors & Out
                    </h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>
                        Keep track of watering, sunlight and care routines for all your plants—whether it's your cozy indoor fern or your kitchen lemon tree.
                    </p>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full h-[80vh]">
                <img
                    src="https://i.ibb.co/tTH2qBfv/202203024-tm-flowers-in-containers.jpg"
                    className="w-full h-full object-cover"
                    alt="Slide 2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10"></div>

                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-30 transform justify-between pointer-events-auto">
                    <a href="#slide1" className="btn btn-circle bg-white/70 hover:bg-white">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-white/70 hover:bg-white">❯</a>
                </div>

                <div className="max-w-md space-y-4 absolute top-10 md:top-1/3 left-12 md:left-20 z-20 text-white drop-shadow-lg pointer-events-none">
                    <h2 className="font-semibold text-2xl md:text-3xl">
                        <span className='text-yellow-300'>Bring Color to Life, One Pot at a Time</span>, Indoors & Out
                    </h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>
                        Track blooming cycles, seasonal tips, and container-friendly care for your vibrant patio plants.
                    </p>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full h-[80vh]">
                <img
                    src="https://i.ibb.co/7N02dTSk/Hero-16x9-min-3a6d239626.jpg"
                    className="w-full h-full object-cover"
                    alt="Slide 3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10"></div>

                <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 z-30 transform justify-between pointer-events-auto">
                    <a href="#slide2" className="btn btn-circle bg-white/70 hover:bg-white">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-white/70 hover:bg-white">❯</a>
                </div>

                <div className="max-w-md space-y-4 absolute top-10 md:top-1/3 left-12 md:left-20 z-20 text-white drop-shadow-lg pointer-events-none">
                    <h2 className="font-semibold text-2xl md:text-3xl">
                        <span className='text-yellow-400'>Smart Care for Your</span> Modern Garden
                    </h2>
                    <p className='text-sm md:text-base font-medium text-wrap'>
                        Stay organized with reminders and growth insights for your fruit trees and minimalist planters.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Slider;
