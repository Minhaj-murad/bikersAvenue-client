import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Authprovider/Authprovider';
import Loader from '../../../Loader/Loader';


const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/sellerbikes?email=${user?.email}`
      
    // const [customers,setCustomers]=useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/customers')
    //     .then(res => res.json())
    //     .then(data => setCustomers(data))
    // },[])
    // console.log(customers);
    // const available= customers.map(buyer => buyer.availability)
    // console.log(available);
    //  const [available, setavailable]=useState(false)
    // //   const avaialablebutton =(seller)=>{
    // //     setavailable(!available)
    // //   }

    const { data: sellers = [],isLoading ,refetch} = useQuery({
        queryKey: ['sellers', user?.email],
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
    console.log(sellers);
    const handleadvertise = (seller) => {
        const sellerdata = {
            bikeName : seller.bikeName,
            catagoryid : seller.catagoryid,
            email : seller.email,
            location : seller.location,
            originalprice : seller.originalprice,
            picture : seller.picture,
            resaleprice : seller.resaleprice,
            seller : seller.seller,
            
            sellerid : seller._id, 
            
        }
        console.log(sellerdata);
        fetch('http://localhost:5000/advertises', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sellerdata)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Advertise Added Successfully')
                }
                else {
                    toast.warning(data.message)
                }
            })
    }

  
     const handlestatus =(id)=>{
        fetch(`http://localhost:5000/sellerbikes/${id}`,{
            method:'PUT',
            // for verifyjwt we have to use bearer in headers
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Status Changed Succesfully')
                
            }
        })
    }
        const handledelete =(id)=>{
            fetch(`http://localhost:5000/sellerbikes/${id}`, {
            method: 'DELETE', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                
                 toast(' Deleted Successfully.')
                 refetch()
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
                            <th>Availability</th>
                            <th>Advertise</th>
                            <th>Price</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers.map((seller, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{seller.seller}</td>
                                <td>{seller.bikeName}</td>
                                <td>{seller.phone}</td>
                                <td>{seller.location}</td>
                                <td>{
                                    seller.status !=='available' ? <>
                                    <button  className='btn btn-xs btn-accent'>Sold</button>
                                    </>
                                     : 
                                     <>
                                    <button onClick={()=>handlestatus(seller._id)}   className='btn btn-xs btn-accent'>Available</button></>
                                    }
                                    
                                </td>
                                <td>{
                                     seller.status ==='available' ? <>
                                    {<button onClick={() => handleadvertise(seller)} className='btn btn-xs btn-accent'>Advertise</button>}
                                    </>
                                    :
                                    <>
                                    {<button disabled className='btn btn-xs btn-accent'>Advertised</button>}
                                    </>
                                    
                                    }
                                    </td>
                                <td>{seller.resaleprice}</td>
                                <td> {<button onClick={()=>handledelete(seller._id)} className='btn btn-xs btn-accent'>Delete</button>}</td>
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