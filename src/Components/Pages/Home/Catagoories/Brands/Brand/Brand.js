import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './SingleBike/BooikngModal/BookingModal';
import SingleBike from './SingleBike/SingleBike';

const Brand = () => {
    const bikes =useLoaderData();
    console.log(bikes);
    const [vehicle,setvehicle]=useState(null);
    return (
        <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-fit mx-auto'>
            {
                bikes.map(bike => <SingleBike
                    key={bike._id} bike={bike}
                    setvehicle={setvehicle}
                    > </SingleBike>)
            }
               {
                vehicle &&   <BookingModal vehicle={vehicle}
                setvehicle={setvehicle}
                ></BookingModal>
               }
        </div>
    );
};

export default Brand;