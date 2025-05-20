import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthContext';

const UpdatePlant = () => {
    const {_id,name,image,description,care,category,frequency,status,last,next} = useLoaderData();
    const {user} = use(AuthContext);
    
    const handleUpdatePlant = e =>{
        
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedPlant = Object.fromEntries(formData.entries());
        console.log(updatedPlant);

        fetch(`http://localhost:5000/plants/${_id}`,{
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPlant)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                console.log('after update',data);
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your plant has been updated",
                showConfirmButton: false,
                timer: 1500
                });
            }
           
        })
    }

    return (
        <div>
            <div className='px-12 md:px-24 my-20'>
                <div className='p-12 space-y-3 text-center bg-base-300'>
                    <h3 className="text-3xl font-semibold">Update Existing Plant</h3>
                    <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    <form onSubmit={handleUpdatePlant} className='fieldset'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Image</label>
                                <input type="text" name='image' defaultValue={image} className="input w-full" placeholder="Image URL" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Plant Name</label>
                                <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Plant Name" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Category</label>
                                <select name='category' defaultValue={category} className="select w-full">
                                    <option disabled={true}>Select a category</option>
                                    <option value="succulent">Succulent</option>
                                    <option value="fern">Fern</option>
                                    <option value="flowering">Flowering</option>
                                </select>
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Description</label>
                                <input type="text" name='description' defaultValue={description} className="input w-full" placeholder="Description" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Care Level</label>
                                <select name='care' defaultValue={care} className="select w-full">
                                    <option disabled={true}>Select a level</option>
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="difficult">Difficult</option>
                                </select>
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Watering Frequency</label>
                                <input type="text" name='frequency' defaultValue={frequency} className="input w-full" placeholder="Watering Frequency" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Last Watered Date</label>
                                <input type="date" name='last' defaultValue={last} className="input w-full" placeholder="Last Watered Date" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Next Watering Date</label>
                                <input type="date" name='next' defaultValue={next} className="input w-full" placeholder="Next Watering Date" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Health Status</label>
                                <input type="text" name='status' defaultValue={status} className="input w-full" placeholder="Health Status" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">User Email</label>
                                <input type="email" name='uemail' defaultValue={user.email} className="input w-full" placeholder="Email" readOnly />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">User Name</label>
                                <input type="text" name='uname' defaultValue={user.displayName} className="input w-full" placeholder="User Name" readOnly/>
                            </fieldset>
                        </div>
                        <div className='p-4'>
                            <input type='submit' className='btn w-full bg-[#D2B48C]' value='Update Plant'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePlant;