import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllPlants = () => {
    const allPlants = useLoaderData();
    console.log(allPlants);
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
                        <Link to={`/plants/${plant._id}`}>
                            <button className="btn btn-primary btn-sm">View details</button>
                        </Link>
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