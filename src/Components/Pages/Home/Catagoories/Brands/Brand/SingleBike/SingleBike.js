import React from 'react';

const SingleBike = ({ bike }) => {
    console.log(bike);
    const{name,picture,location,used,resaleprice,originalprice}=bike;
    return (
        <div>
            <div className="card card-compact w-80 sm:h-96 lg:h-[500px] lg:w-[650px] gap-10 mt-12 mb-12 mx-auto  bg-gray-800 text-white shadow-xl">
                <figure ><img className='w-80 sm:h-56 lg:h-[350px] lg:w-[650px]'  src={picture} alt="Shoes" /></figure>
                <div className="card-body h-24 -mt-8">
                  <div className='flex justify-between'>  <h2 className="card-title">{name}</h2> <h2>{location}</h2></div>
                   <div className='flex '>
                   <p className='text-sm lg:text-xl font-bold'>Price:{resaleprice}</p>
                    <p  className='text-sm lg:text-xl  font-bold'>Original Price:{originalprice}</p>
                   </div>
                    <p  className='text-sm lg:text-xl  font-bold'>Duration of use: {used}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBike;