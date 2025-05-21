import React from 'react';
import { Link } from 'react-router';

const NewPlantCard = ({newPlant}) => {
    const {_id,name,image} = newPlant;
    return (
        <div>
            <div className="card bg-base-200 shadow-md p-4">
            <figure>
                <img className='w-full h-[300px] object-cover rounded-2xl'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="text-lg font-bold text-center">Name: {name}</h2>
                <div className="card-actions justify-center">
                <Link to={`/plants/${_id}`}>
                    <button className="btn btn-primary">View Details</button>
                </Link>
                
                </div>
            </div>
            </div>
        </div>
    );
};

export default NewPlantCard;