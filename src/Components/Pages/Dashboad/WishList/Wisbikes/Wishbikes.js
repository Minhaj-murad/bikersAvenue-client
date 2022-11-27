import React from 'react';
import { Link } from 'react-router-dom';

const Wishbikes = ({ wish }) => {
    console.log(wish);
    const { bikeName, picture, location, used, resaleprice, originalprice, email, availability } = wish;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-60 w-full' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">{bikeName}</h2>
                  <div className='flex justify-between'>
                  <p className='font-bold text-md'>ShowRoom Price:{originalprice}</p> <p className='font-bold text-md'>Resale Price: {resaleprice}</p>
                  </div>
                   <div className='text-center'><Link to='/'><button className="btn btn-primary max-w-sm">Go Home</button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Wishbikes;