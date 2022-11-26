import { useQuery } from '@tanstack/react-query';
import AllsellersData from './AllsellersData';
// import React, { useEffect, useState } from 'react';
// import AllsellersData from './AllsellersData';
// import AllsellersData from './AllsellersData';

const Allsellers = () => {
    
    const { data: sellers = [], } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });
    console.log(sellers);

    
    return (
        <div>
             <h2 className="text-4xl text-center text-white">All Sellers</h2>
             <h2 className="text-4xl text-center text-white">{sellers.length}</h2>

             {
                sellers.map((seller,i) => <AllsellersData key={seller._id} seller={seller} i={i}></AllsellersData>)
             }
        </div>
    );
};

export default Allsellers;