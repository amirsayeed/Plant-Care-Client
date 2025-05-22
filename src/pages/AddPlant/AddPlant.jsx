import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthContext';

const AddPlant = () => {
    const {user} = use(AuthContext);
    const handleAddPlant = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const plantData = Object.fromEntries(formData.entries());
        console.log(plantData);

        fetch('http://localhost:5000/plants',{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(plantData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
            console.log('after adding',data);
            Swal.fire({
            title: "Plant added successfully",
            icon: "success",
            draggable: true
            });
            }
        })
    }

    return (
        <div>
            <div className='px-12 md:px-24 my-20'>
                <div className='p-12 space-y-4 text-center bg-base-300'>
                    <h3 className="text-3xl font-semibold">Add New Plant</h3>
                    <p className='text-lg font-medium italic'>Every plant has a story — let’s begin yours</p>

                    <form onSubmit={handleAddPlant} className='fieldset'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Image</label>
                                <input type="text" name='image' className="input w-full" placeholder="Image URL" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Plant Name</label>
                                <input type="text" name='name' className="input w-full" placeholder="Plant Name" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Category</label>
                                <select defaultValue="Select a category" name='category' className="select w-full">
                                    <option disabled={true}>Select a category</option>
                                    <option value="succulent">Succulent</option>
                                    <option value="fern">Fern</option>
                                    <option value="flowering">Flowering</option>
                                </select>
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Description</label>
                                <input type="text" name='description' className="input w-full" placeholder="Description" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Care Level</label>
                                <select defaultValue="Select a level" name='care' className="select w-full">
                                    <option disabled={true}>Select a level</option>
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="difficult">Difficult</option>
                                </select>
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Watering Frequency</label>
                                <input type="text" name='frequency' className="input w-full" placeholder="Watering Frequency" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Last Watered Date</label>
                                <input type="date" name='last' className="input w-full" placeholder="Last Watered Date" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Next Watering Date</label>
                                <input type="date" name='next' className="input w-full" placeholder="Next Watering Date" />
                            </fieldset>
                            <fieldset className='fieldset rounded-box p-4'>
                                <label className="label">Health Status</label>
                                <input type="text" name='status' className="input w-full" placeholder="Health Status" />
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
                            <input type='submit' className='btn w-full bg-[#D2B48C]' value='Add Plant'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPlant;