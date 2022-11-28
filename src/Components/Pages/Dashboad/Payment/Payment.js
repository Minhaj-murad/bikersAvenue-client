import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './Checkout/Checkout';




const stripePromise = loadStripe('pk_test_51M5vp5Jv1ZDGvic901SWD45Wcoev34ma6vOG4qDqDKrNoy9UpMBimVcQK3VHC3KvcBnlmNyLEEZXC8Ud4XOpR52k00cD07VR4x');
console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();

    return (
        <div>

            <p className='text-4xl text-white text-center'>Payment for : {booking.bikeName}</p>
            <p className='text-2xl text-white text-center mt-8'>Please pay ${booking.resaleprice}  </p>

            <div className='w-96 mt-12 h-48 bg-white'>
                <Elements stripe={stripePromise}>
                    <Checkout booking={booking}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;