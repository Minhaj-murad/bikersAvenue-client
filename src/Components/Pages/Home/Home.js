import React, { useEffect, useState } from 'react';
import Advertise from './Adverstise/Advertise';
import Banner from './Banner/Banner';
import Catagories from './Catagoories/Catagories';
import { Content } from './Content/Content';
import './Home.css'
const Home = () => {

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
        <div className='home'>
            <div className="min-h-screen ">
             
               <Banner></Banner> 
             {
                marketting.length> 0 &&  <Advertise marketting={marketting}></Advertise>
             }
               <Catagories></Catagories>
               <Content></Content>
            </div>
        </div>
    );
};

export default Home;