import React from 'react';

import img1 from '../../../../assests/Banner -img/bg-7.jpg';
import img2 from '../../../../assests/Banner -img/bg-4.webp';
import img3 from '../../../../assests/Banner -img/img3.png';
import img4 from '../../../../assests/Banner -img/bg-4.jpg';
import img5 from '../../../../assests/Banner -img/bg-1.webp';
import img6 from '../../../../assests/Banner -img/bg-6.webp';

import './Banner.css'

const Banner = () => {

    return (
        <div className=' car-div mt-12 lg:max-w-fit mx-auto rounded-2xl'>
            <div className="carousel  w-full">
                <div id="item1" className="carousel-item relative  w-full">
                    <div data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500" className='car-image'>
                        <img src={img1} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className="absolute w-[320px] lg:w-[400px] flex justify-end transform -translate-y-1/2 left-20 lg:left-80 top-72">
                        <h1 className='text-3xl lg:text-7xl   font-bold text-neutral-content home-text'>
                            Make your ride Awesome with BIKERSavenue!!!!!
                        </h1> <br />
                    </div>

                </div>
                <div id="item2" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img4} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute w-[320px] lg:w-[400px] flex justify-end transform -translate-y-1/2 left-20 lg:left-80 top-72">
                        <h1 className='text-3xl lg:text-7xl   font-bold text-neutral-content home-text'>
                            Make your ride Awesome with BIKERSavenue!!!!!
                        </h1> <br />
                    </div>
                </div>
                <div id="item3" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img3} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute w-[320px] lg:w-[400px] flex justify-end transform -translate-y-1/2 left-20 lg:left-80 top-72">
                        <h1 className='text-3xl lg:text-7xl   font-bold text-neutral-content home-text'>
                            Make your ride Awesome with BIKERSavenue!!!!!
                        </h1> <br />
                    </div>
                </div>
                <div id="item4" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img2} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute w-[320px] lg:w-[400px] flex justify-end transform -translate-y-1/2 left-20 lg:left-80 top-72">
                        <h1 className='text-3xl lg:text-7xl   font-bold text-neutral-content home-text'>
                            Make your ride Awesome with BIKERSavenue!!!!!
                        </h1> <br />
                    </div>
                </div>
                <div id="item5" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img5} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute w-[320px] lg:w-[400px] flex justify-end transform -translate-y-1/2 left-20 lg:left-80 top-72">
                        <h1 className='text-3xl lg:text-7xl   font-bold text-neutral-content home-text'>
                            Make your ride Awesome with BIKERSavenue!!!!!
                        </h1> <br />
                    </div>
                </div>
                <div id="item6" className="carousel-item relative w-full">
                    <div className='car-image'>
                        <img src={img6} alt='' className="car-img rounded-xl shadow-2xl " />
                    </div>
                    <div className="absolute w-[320px] lg:w-[400px] flex justify-end transform -translate-y-1/2 left-20 lg:left-80 top-72">
                        <h1 className='text-3xl lg:text-7xl   font-bold text-neutral-content home-text'>
                            Make your ride Awesome with BIKERSavenue!!!!!
                        </h1> <br />
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