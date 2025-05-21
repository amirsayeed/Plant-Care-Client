import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { format } from 'date-fns';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { Tooltip } from 'react-tooltip'

const AllPlants = () => {
    const allPlants = useLoaderData();
    //console.log(allPlants);
    const [nextDate, setNextDate] = useState(allPlants);

    const handleDescSort = () => {
        const lateDate = [...allPlants].sort((a,b)=> new Date(b.next) - new Date(a.next));
        setNextDate(lateDate);
    }

    const handleAscSort = () => {
        const earliestDate = [...allPlants].sort((a,b)=> new Date(a.next) - new Date(b.next));
        setNextDate(earliestDate);
    }

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
                        <th>
                            <div className='flex items-center'>
                                Next Watering Date
                                <div className='flex flex-col gap-1'>
                                    <span data-tooltip-id="asc-tooltip"
                                    data-tooltip-content="Earliest Date"
                                    onClick={handleAscSort}><IoMdArrowDropup size={20} /></span>
                                    <span data-tooltip-id="desc-tooltip"
                                    data-tooltip-content="Latest Date" onClick={handleDescSort}><IoMdArrowDropdown size={20} /></span>
                                    <Tooltip id="asc-tooltip" place='right' />
                                    <Tooltip id="desc-tooltip" place='right' />
                                </div>
                            </div>
                            
                        </th>
                        <th>Plant Details</th>
                    </tr>
                    </thead>
                    <tbody className='text-base font-medium'>
                        {
                            nextDate.map((plant,idx)=><tr key={plant._id}>
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
                        <td>{format(new Date(plant.next), 'MMM dd, yyyy')}</td>
                        <th>
                        <Link to={`/plants/${plant._id}`}>
                            <button data-tooltip-id="view-tooltip"
                            data-tooltip-content="Click to see details" className="btn btn-primary btn-sm">View details</button>
                            <Tooltip id="view-tooltip" place='top'/>
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