import React, { useContext, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import MyPlant from './MyPlant';
import { AuthContext } from '../../provider/AuthContext';

const MyPlants = () => {
    const {user} = useContext(AuthContext);
    const [plants,setPlants] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/plants')
        .then(res=>res.json())
        .then(data => {
            const userPlants = data.filter(plnt=> plnt.uemail === user.email);
            setPlants(userPlants);
        })
    },[user?.email])

    
    return (
        <div>
            {plants.length === 0 ? (
                <div className="flex items-center justify-center my-20 text-3xl font-bold">
                    <h3>No plants added yet</h3>
                </div> ) : (
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
            </div>)
            }   
        </div>
    );
};

export default MyPlants;