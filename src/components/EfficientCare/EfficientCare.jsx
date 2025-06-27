import React, { useEffect, useState } from 'react';

const EfficientCare = () => {
    const [essentials, setEssentials] = useState([]);

    useEffect(()=>{
        fetch('/essentials.json')
        .then(res=>res.json())
        .then(data=>setEssentials(data))
    },[])

    return (
        <div className='my-6'>
            <div className='space-y-6 text-center'>
                <h2 className="font-bold text-2xl md:text-3xl"> Ensure Efficient Plant Care</h2>
                <p className="font-medium text-base md:text-lg italic">Equip yourself with the right tools, tips, and knowledge to grow healthier plants, indoors and out.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 px-1'>
                {
                    essentials.map(essential=><div key={essential.id} className="card card-border bg-base-300 p-4 rounded-2xl">
                        <figure>
                            <img src={essential.img} alt="" />
                        </figure>
                        <div className="card-body space-y-2">
                            <h2 className="text-xl font-semibold">{essential.name}</h2>
                            <p className='text-base font-medium'>{essential.description}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default EfficientCare;