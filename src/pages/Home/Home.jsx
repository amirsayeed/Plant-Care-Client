import React from 'react';
import Slider from '../../components/Slider/Slider';
import { useLoaderData } from 'react-router';
import NewPlantCard from '../../components/NewPlantCard/NewPlantCard';
import TrackingReasons from '../../components/TrackingReasons/TrackingReasons';
const Home = () => {
    const allPlants = useLoaderData();
    const newAddedPlants = [...allPlants].reverse();
    console.log(newAddedPlants);

    return (
        <div>
            <Slider/>
            
            <div className='my-20'>
                <div className='text-center space-y-4'>
                    <h2 className="font-bold text-3xl">New Plants</h2>
                    <p className='text-lg font-medium italic'>Recently Rooted, Ready to Thrive</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                    {
                        newAddedPlants.slice(0,6).map(newPlant => <NewPlantCard key={newPlant._id} newPlant={newPlant}/>)
                    }
                </div>
            </div>

            <TrackingReasons/>
            
        </div>
    );
};

export default Home;