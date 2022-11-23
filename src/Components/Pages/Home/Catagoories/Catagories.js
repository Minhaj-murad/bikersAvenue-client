import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Brands from './Brands/Brands';

const Catagories = () => {
    const companies = useLoaderData();
    console.log(companies);
    return (
        <div>
            <h1 className='text-white text-center font-serif text-4xl font-bold mt-12'>Our Most Popular Brand catagories</h1>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 p-8'>
                {
                    companies.map(company => <Brands
                        key={company.id}
                        company={company}
                    >
                    </Brands>)
                }
            </div>
        </div>
    );
};

export default Catagories;