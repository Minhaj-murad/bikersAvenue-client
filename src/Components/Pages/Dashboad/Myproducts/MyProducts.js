import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Authprovider/Authprovider';


const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/sellerbikes?email=${user?.email}`


    const { data: customers = [] } = useQuery({
        queryKey: ['customers', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await fetch(url,{
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
    const handleadvertise = (customer)=>{
           
        fetch('http://localhost:5000/users/advertise',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(customer)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.acknowledged){
                toast.success('Advertise Added Successfully')
            }
            else{
                toast.warning(data.message)
            }
        })
    }
    return (
        <div>
            <h1 className='text-4xl text-white text-center mr-8'> My Products</h1>
            <div className="overflow-x-auto mt-8 mr-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Bikename</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>Advertise</th>
                            <th>Price</th>
                           
                        </tr>
                    </thead>
                    <tbody>

                        {
                            customers.map((customer, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{customer.seller}</td>
                                <td>{customer.bikeName}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.location}</td>
                                <td>{ <button onClick={() => handleadvertise(customer)} className='btn btn-xs btn-accent'>Advertise</button>}</td>
                                <td>{customer.resaleprice}</td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default MyProducts;