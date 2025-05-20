import React from 'react';
import { useLoaderData } from 'react-router';

const AllPlants = () => {
    const allPlants = useLoaderData();
    console.log(allPlants);
    return (
        <div>
            <div className="overflow-x-auto my-20 max-w-7xl mx-auto">
                <table className="table">
                    <thead className='text-lg font-bold'>
                    <tr>
                        <th>No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Watering Frequency</th>
                        <th>Details</th>
                    </tr>
                    </thead>
                    <tbody className='text-base font-medium'>
                        {
                            allPlants.map((plant,idx)=><tr>
                        <td>
                            {idx+1}
                        </td>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-16 w-16">
                                    <img
                                    src={plant.image}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {plant.name}
                        </td>
                        <td>
                        {plant.category}
                        </td>
                        <td>{plant.frequency}</td>
                        <th>
                        <button className="btn btn-primary btn-sm">View details</button>
                        </th>
                    </tr>)
                        }
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPlants;