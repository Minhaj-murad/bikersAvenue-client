import React, { useEffect, useState } from 'react';
import Advertisingbike from './Advertisingbike';

const Advertise = ({marketting}) => {

     

    return (
       <div>
         <div className='mt-12  '>
               
           <div className='grid grid-cols-2'>
           {
              marketting?.map(market => <Advertisingbike
                
                market={market}
              ></Advertisingbike>)
            }
           </div>
        </div>
       </div>
    );
};

export default Advertise;