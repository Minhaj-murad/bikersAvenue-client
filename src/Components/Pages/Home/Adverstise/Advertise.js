import React, { useEffect, useState } from 'react';
import Advertisingbike from './Advertisingbike';

const Advertise = ({ marketting }) => {



  return (
    <div>

      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 mt-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-lg font-bold tracking-wider text-amber-600 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">OUR</span>
          </span>{' '}
         MOST POPULAR FEATURED BIKES
        </h2>
        <p className=" text-neutral-content md:text-lg">
        In these areas, we will bring the universal passion of Honda to “serve people worldwide with the joy of expanding their life's potential.” And toward this end, we will “lead the advancement of mobility and enable people everywhere in the world
        </p>
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-fit mx-auto'>
        {
          marketting?.map(market => <Advertisingbike

            market={market}
          ></Advertisingbike>)
        }
      </div>

    </div>

  );
};


export default Advertise;