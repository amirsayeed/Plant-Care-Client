import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyPlant from './MyPlant';

const MyPlants = () => {
    const myPlants = useLoaderData();
    //console.log(myPlants);
    const [plants,setPlants] = useState(myPlants);

    return (
        <div>
            <div className="overflow-x-auto my-20 max-w-7xl mx-auto bg-base-200 border rounded-2xl p-3">
                <table className="table">
                    <thead className='text-lg font-bold'>
                    <tr>
                        <th>No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Watering Frequency</th>
                        <th>Plant Details</th>
                    </tr>
                    </thead>
                    <tbody className='text-base font-medium'>
                        {
                            plants.map((plant,idx)=><MyPlant key={plant._id} 
                            idx={idx} 
                            plant={plant} 
                            plants={plants}
                            setPlants={setPlants}/>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPlants;