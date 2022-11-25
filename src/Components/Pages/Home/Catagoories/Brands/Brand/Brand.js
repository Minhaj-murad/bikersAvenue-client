import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBike from './SingleBike/SingleBike';

const Brand = () => {
    const bikes =useLoaderData();
    console.log(bikes);
    
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
            {
                bikes.map(bike => <SingleBike
                    key={bike._id} bike={bike}> </SingleBike>)
            }
        </div>
    );
};

export default Brand;