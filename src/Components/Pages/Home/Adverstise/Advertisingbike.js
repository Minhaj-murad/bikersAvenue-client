import React from 'react';
import { Link } from 'react-router-dom';

const Advertisingbike = ({ market }) => {
    const { bikeName, picture, location, used, resaleprice, originalprice } = market;
    console.log(bikeName);


    return (
        <div>
            <div className="card w-72 glass">
                <figure><img className='h-60 w-full' src={picture} alt="car!" /></figure>
                <div className="card-body ">
                    <div className='text-center'><h2 className=" text-white  ">{bikeName}</h2></div>
                   
                </div>
            </div>

        </div>
    )
};

export default Advertisingbike;