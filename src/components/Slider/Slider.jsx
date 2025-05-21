import React from 'react';

const Slider = () => {
    return (
            <div className="carousel my-5 rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co/HfndJkwK/shutterstock-1813119916-jpg-optimal.jpg"
                className="w-full h-[85vh] object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co/tTH2qBfv/202203024-tm-flowers-in-containers.jpg"
                className="w-full h-[85vh] object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co/7N02dTSk/Hero-16x9-min-3a6d239626.jpg"
                className="w-full h-[85vh] object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;