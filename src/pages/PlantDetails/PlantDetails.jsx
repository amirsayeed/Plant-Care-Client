import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const {name,image,category,frequency,care,status,description,last,next} = useLoaderData();
    
    return (
        <div className='max-w-4xl mx-auto my-20'>
            <div className="flex flex-col md:flex-row items-start justify-center bg-base-300 shadow-sm p-5 gap-4 rounded-2xl">
            <figure className='max-w-sm'>
                <img className='rounded-3xl object-cover'
                src={image}
                alt="Album" />
            </figure>
            <div className="space-y-4">
                <h2 className="text-lg font-bold">Name: <span className='font-medium'>{name}</span></h2>
                <p className='text-lg font-bold'>Description : <span className='font-medium'>{description}</span></p>
                <p className='text-lg font-bold'>Category : <span className='font-medium'>{category}</span></p>
                <p className='text-lg font-bold'>Care Level : <span className='font-medium'>{care}</span></p>
                <p className='text-lg font-bold'>Watering Frequency : <span className='font-medium'>{frequency}</span></p>
                <p className='text-lg font-bold'>Last Watered Date : <span className='font-medium'>{last}</span></p>
                <p className='text-lg font-bold'>Next Watering Date : <span className='font-medium'>{next}</span></p>
                <p className='text-lg font-bold'>Health Status : <span className='font-medium'>{status}</span></p>
            </div>
            </div>
        </div>
    );
};

export default PlantDetails;