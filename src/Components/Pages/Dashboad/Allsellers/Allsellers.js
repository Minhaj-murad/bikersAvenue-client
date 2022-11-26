import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import AllsellersData from './AllsellersData';
// import React, { useEffect, useState } from 'react';
// import AllsellersData from './AllsellersData';
// import AllsellersData from './AllsellersData';

const Allsellers = () => {

    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    console.log(users);
    const sellers = users.filter(allseller => allseller?.role === 'seller');
    console.log(sellers);

    const handleverify=(id)=>{
         fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT',
            // for verifyjwt we have to use bearer in headers
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin made Succesfully')
                    refetch()
                }
            })
    }
    // const handledelete =(user)=>{
    //     fetch(`http://localhost:5000/users/${user._id}`, {
    //         method: 'DELETE', 
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.deletedCount > 0){
    //             refetch();
    //              toast(` ${user.name} Deleted Successfully.`)
    //         }
    // //     })
    // }
    return (
        <div>
            <h2 className="text-4xl text-center text-white">All Sellers</h2>
            <h2 className="text-4xl text-center text-white">{sellers.length}</h2>

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
                            sellers.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{
                                seller?.type === 'verified' ?  
                                <h1 className='text-white bg-gray-700'> Verfied </h1>
                                :   <button onClick={handleverify} className='btn btn-xs btn-primary'>Verify</button>
                            }
                                </td>
                                <td><button className='btn btn-xs btn-warning'>Delete</button></td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allsellers;