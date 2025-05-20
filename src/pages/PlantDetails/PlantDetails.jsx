import React from 'react';
import { useLoaderData } from 'react-router';

const PlantDetails = () => {
    const {name,image,category,frequency,care,status,description,last,next} = useLoaderData();
    
    return (
        <div className='my-20'>
            <div className="max-w-4xl mx-auto card md:card-side bg-base-300 shadow-sm p-5 gap-3 rounded-2xl">
            <figure>
                <img className='w-[320px] rounded-3xl object-cover'
                src={image}
                alt="Album" />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="text-lg font-bold">Name: <span className='font-medium'>{name}</span></h2>
                <p className='text-base font-bold'>Description : <span className='font-medium'>{description}</span></p>
                <p className='text-base font-bold'>Category : <span className='font-medium'>{category}</span></p>
                <p className='text-base font-bold'>Care Level : <span className='font-medium'>{care}</span></p>
                <p className='text-base font-bold'>Watering Frequency : <span className='font-medium'>{frequency}</span></p>
                <p className='text-base font-bold'>Last Watered Date : <span className='font-medium'>{last}</span></p>
                <p className='text-base font-bold'>Next Watering Date : <span className='font-medium'>{next}</span></p>
                <p className='text-base font-bold'>Health Status : <span className='font-medium'>{status}</span></p>
            </div>
            </div>
        </div>
    );
};

export default PlantDetails;