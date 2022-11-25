import React from 'react';
import BookingModal from './BooikngModal/BookingModal';

const SingleBike = ({ bike }) => {
    console.log(bike);
    const time =new Date ();
    console.log(time);
    const{bikeName,picture,location,used,resaleprice,originalprice}=bike;
    console.log(bikeName);
      
    return (
        <div>
            <div className="card card-compact w-80 sm:h-96 lg:h-[550px] lg:w-[650px] gap-10 mt-12 mb-12 mx-auto  bg-gray-800 text-white shadow-xl">
                <figure ><img className='w-80 sm:h-56 lg:h-[350px] lg:w-[650px]'  src={picture} alt="Shoes" /></figure>
                <div className="card-body h-24 -mt-8">
                  <div className='flex justify-between'>  <h2 className="card-title">{bikeName}</h2> <h2>{location}</h2></div>
                   <div className='flex '>
                   <p className='text-sm lg:text-xl font-bold'>Price:{resaleprice}</p>
                    <p  className='text-sm lg:text-xl  font-bold'>Original Price:{originalprice}</p>
                   </div>
                    <p  className='text-sm lg:text-xl  font-bold'>Duration of use: {used}</p>
                    <p  className='text-sm lg:text-xl  font-bold'>Posted Time: </p>

                    <div className="card-actions justify-end">
                    <label  htmlFor="booking-modal" className="btn btn-primary">Buy Now</label>
                    </div>
                </div>
            </div>
            <BookingModal bikeName={bikeName} location={location} resaleprice={resaleprice} ></BookingModal>
        </div>
    );
};

export default SingleBike;