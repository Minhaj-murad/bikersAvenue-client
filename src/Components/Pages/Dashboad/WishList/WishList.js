import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Authprovider/Authprovider';
import Loader from '../../../Loader/Loader';
import Wishbikes from './Wisbikes/Wishbikes';

const WishList = () => {
       const {user}=useContext(AuthContext)
       const url = `http://localhost:5000/wishlist?email=${user?.email}`
    const { data: wishlists = [],isLoading ,} = useQuery({
        queryKey: ['wishlists', user?.email],
        queryFn: async () => {
            if (user?.email) {
                const res = await fetch(url)
                const data = await res.json();
                console.log(data);
                return data;
            }


        }
       
    })

 
    if(isLoading){
        return <Loader></Loader>
    }
     
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:ml-24'>
          {
           wishlists.map(wish => <Wishbikes key={wish._id} wish={wish}></Wishbikes>)
          }
        </div>
    );
};

export default WishList;