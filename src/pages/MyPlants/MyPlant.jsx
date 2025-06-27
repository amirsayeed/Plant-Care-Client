import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyPlant = ({plant,idx,plants,setPlants}) => {

    const {_id,name,image,category,frequency} = plant
    const handleDelete = (_id) =>{
        console.log(_id);

        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        console.log(result.isConfirmed);
        if (result.isConfirmed) {
            fetch(`https://plant-care-tracker-server-pied.vercel.app/plants/${_id}`,{
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data => {
                console.log('after delete', data)
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
                });
                const remaining = plants.filter(plnt=>plnt._id !== _id);
                setPlants(remaining);
            })
            
        }
        });
    }
    return (
        <>
            <tr>
                <td>
                    {idx+1}
                </td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-16 w-16">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                {name}
                </td>
                <td>
                {category}
                </td>
                <td>{frequency}</td>
                <th>
                <div className='flex gap-2'>
                    <Link to={`/dashboard/updatePlants/${_id}`}>
                    <button className="btn btn-primary btn-sm">Update</button>
                    </Link>

                    <button onClick={()=> handleDelete(_id)} className="btn btn-primary btn-sm">Delete</button>
                </div>
                </th>
            </tr>
        </>
    );
};

export default MyPlant;