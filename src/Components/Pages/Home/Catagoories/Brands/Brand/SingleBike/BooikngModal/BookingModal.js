
import React, { useContext, useEffect, useState,} from 'react';
import { AuthContext } from '../../../../../../../Authprovider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BookingModal = ({vehicle,setvehicle,refetch}) => {
    const { user } = useContext(AuthContext);
     console.log(vehicle);
    const {bikeName,originalprice,resaleprice,picture}= vehicle;
    

    //  const [bikeName, setBikeName] = useState('')
    //  const [bikePrice, setBikePrice] = useState('')

    //  useEffect(() => {
    //      setBikeName(vehicle?.bikeName)
    //      setBikePrice(vehicle?.resaleprice)
    //  },[vehicle?.bikeName,vehicle?.resaleprice ])


    // const { bikeName, location, resaleprice, email } = bike;
    console.log(vehicle);
    const handlebooking = (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const bikeName = form.bikeName.value;
        const resaleprice = form.resaleprice.value;
        const originalprice = form.originalprice.value;
        const location = form.location.value;
        console.log(email, location, phone, bikeName);
        form.reset()
        const customer = {

            phone,
            picture,
            customername: name,
            bikeName,
            email,
            location,
            resaleprice,
            originalprice,
            availability:'sold'
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
                    <label onClick={()=>setvehicle(null)} htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handlebooking} >

                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full mt-6" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full mt-6" />
                      
                        <input name='bikeName' type="text" defaultValue={bikeName} className="input input-bordered w-full mt-6" />
                        <input name='resaleprice' type="text" defaultValue={resaleprice} className="input input-bordered w-full mt-6" />
                        <input name='originalprice' type="text" defaultValue={originalprice} className="input input-bordered w-full mt-6" />
                        <input name='phone' type="text" placeholder="Your Phone Number" className="input input-bordered w-full mt-6" />
                        <input name='location' type="text" placeholder="Location" className="input input-bordered w-full mt-6" />
                        <br /> <input type="submit" className='btn btn-accent w-full mt-6' value="Submit" />

                    </form>
                </div>
            </div>
            <ToastContainer  />

        </div>
    );
};

export default BookingModal;