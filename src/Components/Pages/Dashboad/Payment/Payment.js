import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout/Checkout';




const stripePromise = loadStripe(process.env.REACT_APP_StripePk);
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();

    return (
        <div>

            <p className='text-4xl text-white text-center'>Payment for : {booking.bikeName}</p>
            <p className='text-2xl text-white text-center mt-8'>Please pay ${booking.resaleprice}  </p>

            <div className='w-96 h-auto mx-auto mt-12  bg-gray-200 rounded-2xl shadow-2xl'>
                <Elements stripe={stripePromise}>
                    <Checkout booking={booking}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;