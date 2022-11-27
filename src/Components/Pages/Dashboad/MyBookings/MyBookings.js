import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Authprovider/Authprovider';
import Loader from '../../../Loader/Loader';


const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    console.log(user);

    const { data: bookings = [],isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await fetch(url, {
                    //  to get accesstoken from server and after signing up from localstorage
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                console.log(data);
                return data;
            }


        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h1 className='text-4xl text-white text-center mr-8'> My Orders</h1>
            <div className="overflow-x-auto mt-8 mr-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Bikename</th>
                            <th>Bike Price</th>
                            <th>Payment Status</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.map((booking, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    {
                                        booking.picture &&
                                        <div className="avatar">
                                            <div className="w-24 rounded-full">
                                                <img src={booking.picture} alt="" />
                                            </div>
                                        </div>

                                    }

                                </td>
                                <td>{booking.bikeName}</td>
                                <td> {booking.resaleprice}</td>
                                <td> {booking.price}</td>
                                <td> <button className='btn btn-accent btn-xs'>Pay</button> </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;