import React from 'react';
import Slider from '../../components/Slider/Slider';
import { useLoaderData } from 'react-router';
import NewPlantCard from '../../components/NewPlantCard/NewPlantCard';
import TrackingReasons from '../../components/TrackingReasons/TrackingReasons';
import EfficientCare from '../../components/EfficientCare/EfficientCare';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
const Home = () => {
    const allPlants = useLoaderData();
    const newAddedPlants = [...allPlants].reverse();
    //console.log(newAddedPlants);

    return (
        <div>
            <Slider/>
            
            <div className='my-6'>
                <div className='text-center space-y-6'>
                    <h2 className="font-bold text-3xl">New Plants</h2>
                    <p className='text-lg font-medium italic'>Recently Rooted, Ready to Thrive</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6'>
                    {
                        newAddedPlants.slice(0,8).map(newPlant => <NewPlantCard key={newPlant._id} newPlant={newPlant}/>)
                    }
                </div>
            </div>

            <TrackingReasons/>
            <EfficientCare/>
            <NewsLetter/>
        </div>
    );
};

export default Home;