// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import Loader from '../../../Loader/Loader'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbbkey;
    console.log(imageHostKey);
    const navigate =useNavigate();

    const handleAddBike = (data) => {
        const picture = data.picture[0];
        const formData = new FormData();
        formData.append('image', picture);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
            // for posting image only we will use formdata othercase json.stringify(data)
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const bike = {
                    seller: data.name, 
                    email: data.email,
                    bikeName: data.bike,
                    resaleprice: data.resaleprice,
                    originalprice: data.originalprice,
                    location: data.location,
                    picture: imgData.data.url,
                    catagoryid:data.catagoryid
                }

                // save bike information to the database
                fetch(`http://localhost:5000/bikes`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                      
                    },
                    body: JSON.stringify(bike)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/addbike')
                })
            }
        })
    }

    // if(isLoading){
    //     return <Loader></Loader>
    // }



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
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Original Price</span></label>
                    <input type="text" {...register("originalprice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs text-black" />
                    {errors.originalprice && <p className='text-red-500'>{errors.originalprice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Resale Price</span></label>
                    <input type="text" {...register("resaleprice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs text-black" />
                    {errors.resaleprice && <p className='text-red-500'>{errors.resaleprice.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs text-black" />
                    {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Bike Model</span></label>
                    <input type="text" {...register("bike", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs text-black" />
                    {errors.bike && <p className='text-red-500'>{errors.bike.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Bike Models</span></label>
                    <select 
                    {...register('catagoryid')}
                    className="select input-bordered w-full max-w-xs text-black">
                      
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-lg font-semibold text-white">Photo</span></label>
                    <input type="file" {...register("picture", {
                        // required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs text-black" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-primary w-full mt-4' value="Add Bike" type="submit" />
            </form>
            <ToastContainer/>
        </div>
    );
};

export default AddProduct;