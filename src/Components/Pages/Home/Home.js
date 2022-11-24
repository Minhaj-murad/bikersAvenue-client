import React from 'react';
import Advertise from './Adverstise/Advertise';
import Banner from './Banner/Banner';
import Catagories from './Catagoories/Catagories';
import { Content } from './Content/Content';

const Home = () => {
    return (
        <div>
            <div className="min-h-screen ">
             
               <Banner></Banner> 
               <Advertise></Advertise>
               <Catagories></Catagories>
               <Content></Content>
            </div>
        </div>
    );
};

export default Home;