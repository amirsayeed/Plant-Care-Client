import React from 'react';
import Slider from '../../components/Slider/Slider';
import { useLoaderData } from 'react-router';
import NewPlantCard from '../../components/NewPlantCard/NewPlantCard';

const Home = () => {
    const allPlants = useLoaderData();
    const newAddedPlants = [...allPlants].reverse();
    console.log(newAddedPlants);

    return (
        <div>
            <Slider/>

            <div className='my-20'>
                <h2 className="text-center font-bold text-2xl">New Plants</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
                    {
                        newAddedPlants.slice(0,6).map(newPlant => <NewPlantCard key={newPlant._id} newPlant={newPlant}/>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Home;