import React, { useEffect, useState } from 'react';
import Advertisingbike from './Advertisingbike';

const Advertise = () => {

     const [marketting,setmarketting]=useState([]);
     
     useEffect(()=>{
     fetch('http://localhost:5000/advertises')
     .then(res => res.json())
     .then(data => {
      console.log(data);
      setmarketting(data)
    })

     },[])
       

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