import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Authprovider/Authprovider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
const Checkout = ({booking}) => {
    const {user}=useContext(AuthContext)
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
  
    const stripe = useStripe();
    const elements = useElements();
    const { bikeName,resaleprice,_id } = booking;
  
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://assignment12-server-six.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ resaleprice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [resaleprice]);
  
    const handleSubmit = async (event) => {
        event.preventDefault();
  
        if (!stripe || !elements) {
            return
        }
  
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
  
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
  
        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: bikeName,
                        email: user?.email
                    },
                },
            },
        );
  
        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                resaleprice,
                transactionId: paymentIntent.id,
                email: user?.email,
                bookingId: _id
            }
            fetch('https://assignment12-server-six.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);
  
  
    }
  
    return (
        < div className='mt-12 px-12 py-12 '>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
               <div className='text-center'>
               <button
                    className='btn btn-sm mt-4 btn-primary'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
               </div>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div className='text-center'>
                    <p className='text-green-500 font-bold text-lg'>{success}</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </div>
    );
  };

export default Checkout;