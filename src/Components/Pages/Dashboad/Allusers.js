import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../Loader/Loader';
// import Loader from '../../Loader/Loader'
const Allusers = () => {

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment12-server-six.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(users);
    const handlemakeAdmin = (id) => {
        fetch(`https://assignment12-server-six.vercel.app/users/admin/${id}`, {
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
    }
    return (

        <div className='mr-8 '>
            <h2 className="text-4xl text-center text-white">All users</h2>
            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handlemakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td><button onClick={()=>handledelete(user)} className='btn btn-xs btn-warning'>Delete</button></td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Allusers;