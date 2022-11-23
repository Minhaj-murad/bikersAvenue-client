import React from 'react';

const Brands = ({company}) => {
    console.log(company);
    const {image,brand} =company;
    return (
        <div>
             
                <div className="hero h-80 rounded-2xl shadow-2xl " style={{ backgroundImage: `url(${image})` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{brand}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                
            </div>
        
    );
};

export default Brands;