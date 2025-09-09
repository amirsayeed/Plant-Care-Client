import React from 'react';
import { Link } from 'react-router';
import { Tooltip } from 'react-tooltip'
const NewPlantCard = ({newPlant}) => {
    const {_id,name,image,shortDesc} = newPlant;
    return (
        <div>
            <div className="card bg-base-200 h-[430px] shadow-md p-4 hover:scale-105">
            <figure>
                <img className='w-full h-[220px] object-center rounded-2xl'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="my-3 space-y-3">
                <h2 className="text-lg font-semibold text-center">{name}</h2>
                <p className='text-base font-medium text-center'>{shortDesc}</p>
                <div className="card-actions justify-center">
                <Link to={`/plants/${_id}`}>
                    <button data-tooltip-id="view-tooltip"
                        data-tooltip-content="Click to see details" className="btn btn-primary rounded-md">View Details</button>
                    <Tooltip id="view-tooltip" place='top'/>
                </Link>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default NewPlantCard;