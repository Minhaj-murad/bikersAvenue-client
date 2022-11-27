
import React, { useContext, useEffect, useState,} from 'react';
import { AuthContext } from '../../../../../../../Authprovider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BookingModal = ({vehicle,setvehicle,refetch}) => {
    const { user } = useContext(AuthContext);


     const [bikeName, setBikeName] = useState('')
     const [bikePrice, setBikePrice] = useState('')

     useEffect(() => {
         setBikeName(vehicle?.bikeName)
         setBikePrice(vehicle?.resaleprice)
     },[vehicle?.bikeName,vehicle?.resaleprice ])


    // const { bikeName, location, resaleprice, email } = bike;
    console.log(vehicle);
    const handlebooking = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        console.log(email, location, phone, name);
        form.reset()
        const customer = {

            phone,
            customername: name,
            // bikeName: bikeName,
            email,
            location,
            // price: resaleprice

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setvehicle(null)
                    toast.success('Booking Added Successfully')
                }
                else {
                    toast.warning(data.message)
                }
            })


    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handlebooking} >

                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full mt-6" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full mt-6" />
                        <p>{bikeName}</p>
                        <p>{bikePrice}</p>
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mt-6" />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full mt-6" />
                        <br /> <input type="submit" className='btn btn-accent w-full mt-6' value="Submit" />

                    </form>
                </div>
            </div>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />

        </div>
    );
};

export default BookingModal;