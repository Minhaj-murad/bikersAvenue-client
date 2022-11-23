import React from 'react';

import img1 from '../../../../assests/Banner -img/bg-7.jpg';
import img2 from '../../../../assests/Banner -img/bg-2.jpg';
import img3 from '../../../../assests/Banner -img/bg-3.jpg';
import img4 from '../../../../assests/Banner -img/bg-4.jpg';
import img5 from '../../../../assests/Banner -img/bg-5.webp';
import img6 from '../../../../assests/Banner -img/bg-6.webp';

import './Banner.css'

const Banner = () => {

    return (
        <div className=' car-div mt-12 lg:w-[1400px] mx-auto '>
            <div className="carousel  w-full">
                <div id="item1" className="carousel-item relative  w-full">
                    <div className='car-image'>
                        <img src={img1} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                        <h1 className='text-6xl font-bold text-white'>
                           Find Your Best Match Today!!
                        </h1> <br />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 ">
                        <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img2} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60 lg:left-96 ">
                        <h1 className='text-6xl font-bold text-white'>
                           Find Your Best Match Today!!
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 lg:left-96 ">
                        <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img3} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                        <h1 className='text-6xl font-bold text-white'>
                           Find Your Best Match Today!!
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                        <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img4} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                        <h1 className='text-6xl font-bold text-white'>
                           Find Your Best Match Today!!
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                        <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item5" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img5} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                        <h1 className='text-6xl font-bold text-white'>
                           Find Your Best Match Today!!
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                        <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
                <div id="item6" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img6} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-60">
                        <h1 className='text-6xl font-bold text-white'>
                           Find Your Best Match Today!!
                        </h1>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-16 top-96 w-9/12">
                        <p className='text-xl font-bold text-white' > We are Always here for you to find a place ! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM). </p>
                    </div>
                </div>
           
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>


            </div>
        </div>
    );
};

export default Banner;