import React from 'react';
import { Link } from 'react-router';
import { Tooltip } from 'react-tooltip'
const NewPlantCard = ({newPlant}) => {
    const {_id,name,image} = newPlant;
    return (
        <div>
            <div className="card bg-base-200 shadow-md p-4 hover:scale-105">
            <figure>
                <img className='w-full h-[300px] object-cover rounded-2xl'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="text-lg font-bold text-center">Name: {name}</h2>
                <div className="card-actions justify-center">
                <Link to={`/plants/${_id}`}>
                    <button data-tooltip-id="view-tooltip"
                        data-tooltip-content="Click to see details" className="btn btn-primary">View Details</button>
                    <Tooltip id="view-tooltip" place='top'/>
                </Link>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default NewPlantCard;