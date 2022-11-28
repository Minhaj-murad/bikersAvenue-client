import React, { useEffect, useState } from 'react';
import Advertise from './Adverstise/Advertise';
import Banner from './Banner/Banner';
import Catagories from './Catagoories/Catagories';
import { Content } from './Content/Content';
import './Home.css'
const Home = () => {

  const [marketting, setmarketting] = useState([]);

  useEffect(() => {
    fetch('https://assignment12-server-six.vercel.app/advertises')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setmarketting(data)
      })

  }, [])

  return (
    <div className='home'>
      <div className="min-h-screen ">

        <Banner></Banner>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000">
          {
            marketting.length > 0 && <Advertise marketting={marketting}></Advertise>
          }
        </div>
        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="3000" >
          <Catagories></Catagories>
        </div>
        <Content></Content>
      </div>
    </div>
  );
};

export default Home;