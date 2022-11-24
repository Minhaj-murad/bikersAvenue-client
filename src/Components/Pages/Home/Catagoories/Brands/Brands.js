import React from 'react';
import { Link } from 'react-router-dom';

const Brands = ({company}) => {
    console.log(company);
    const {image,brand,intro,_id} =company;
    return (
        <div>
             
                <div className="hero h-80 rounded-2xl shadow-2xl " style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{brand}</h1>
                            <p className="mb-5">{intro}</p>
                            <button className="btn btn-primary"><Link to={`/bikecategories/${_id}`} className=' font-bold'>See Details </Link></button>
                        </div>
                    </div>
                </div>
                
            </div>
        
    );
};

export default Brands;