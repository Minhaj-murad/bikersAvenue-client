import React, { useContext, useEffect, useState } from 'react';

// import BookingModal from './BooikngModal/BookingModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../../../../Authprovider/Authprovider';


const SingleBike = ({ bike, setvehicle }) => {
  const { user } = useContext(AuthContext)
  console.log(bike);
  const time = new Date();
  console.log(time);
  const { bikeName, picture, location, used, resaleprice, originalprice, email, availability } = bike;
  console.log(bikeName);


  const [verified, setVerified] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setData(data.find(a => a.email === email)))
  }, [email])


  useEffect(() => {
    if (data?.type === 'verified') {
      setVerified(true)
    }
    else {
      setVerified(false)
    }
  }, [data?.type])

  console.log(verified);



  const handlewish = () => {

    const motorbike = {
      bikeName,
      picture,
      location,
      used,
      resaleprice,
      originalprice,
      email: user.email,
      availability,
      postingid: bike._id


    }


    fetch(`http://localhost:5000/wishlists`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(motorbike)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Added to WishList Succesfully')

        }
      })
  }



  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img className='h-60 w-full' src={picture} alt="Shoes" /></figure>
        <div className="card-body">
         <div className='flex justify-between'>
         <h2 className="text-xl font-bold">{bikeName}</h2>
          <button onClick={() => handlewish()} className='btn btn-warning max-w-[60px]'>Wishlist </button>
         </div>
          <div className='flex justify-between'>
            <p className='font-bold text-md'>ShowRoom Price:{originalprice}</p> <p className='font-bold text-md'>Resale Price: {resaleprice}</p>
          </div>
          <div className="card-actions justify-end">

            <label htmlFor="booking-modal" onClick={() => setvehicle(bike)} className="btn btn-primary">Buy Now</label>

          </div>
        </div>
      




      </div >
    </div >


  );

};

export default SingleBike;