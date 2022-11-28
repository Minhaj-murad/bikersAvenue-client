import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Loader from '../../../Loader/Loader';

// import AllsellersData from './AllsellersData';
// import React, { useEffect, useState } from 'react';
// import AllsellersData from './AllsellersData';
// import AllsellersData from './AllsellersData';
// <p>{bikeName}</p>
// <p>{bikePrice}</p>
const Allsellers = () => {

    const { data: sellers = [], refetch, isLoading} = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://assignment12-server-six.vercel.app/users');
            const data = await res.json();
            return data.filter(allseller => allseller?.role === 'seller');
        }
    });
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(sellers);
    // const sellers = users.filter(allseller => allseller?.role === 'seller');
    // console.log(sellers);

    const handleverify=(seller)=>{
         fetch(`https://assignment12-server-six.vercel.app/users/seller/${seller._id}`, {
            method: 'PUT',
            // for verifyjwt we have to use bearer in headers
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast('Seller Verified Succesfully')
                    refetch()
                }
            })
    }
    const handledelete =(user)=>{
        fetch(`https://assignment12-server-six.vercel.app/users/seller/${user._id}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                 toast(` ${user.name} Deleted Successfully.`)
            }
        })
        fetch(`https://assignment12-server-six.vercel.app/users/sellerbike/${user.email}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                 toast(` ${user.name} Deleted Successfully.`)
            }
        })
    }
    return (
        <div>
            <h2 className="text-4xl text-center text-white">All Sellers</h2>
         

            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{
                                seller?.type === 'verified' ?  
                                <button  className='btn btn-xs btn-primary font-bold btn-disabled '>Verified</button>
                                :   <button onClick={()=>handleverify(seller)} className='btn btn-xs btn-primary'>Verify</button>
                            }
                                </td>
                                <td><button onClick={()=>handledelete(seller)} className='btn btn-xs btn-warning'>Delete</button></td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allsellers;