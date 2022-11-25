import { useQuery } from '@tanstack/react-query';
import React from 'react';


const AllBuyers = () => {

    const { data: buyers = [], } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/customers');
            const data = await res.json();
            return data;
        }
    });
    console.log(buyers);

    
    return (
       
            <div className='mr-8 '>
                <h2 className="text-4xl text-center text-white">All buyers</h2>
                <div className="overflow-x-auto mt-8">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Bike Model</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                buyers.map((buyer, i) => <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.customername}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.bikeName}</td>
                                    <td><button className='btn btn-xs btn-warning'>Delete</button></td>
                                    
                                    
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            );
};

   

export default AllBuyers;