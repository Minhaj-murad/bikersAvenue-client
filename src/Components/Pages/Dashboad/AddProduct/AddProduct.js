
import React from 'react';
import { useForm } from 'react-hook-form';


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const handleAddBike = () => {
        console.log('btn clicked');
    }

  

    return (
        <div className='w-96 p-7 bg-gray-700 text-white text-center rounded-2xl'>
            <h2 className="text-4xl">Add A Bike</h2>
            <form onSubmit={handleSubmit(handleAddBike)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs text-black" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs text-black" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Bike Model</span></label>
                    <input type="text" {...register("bike", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs text-black" />
                    {errors.bike && <p className='text-red-500'>{errors.bike.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-primary w-full mt-4' value="Add Bike" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;