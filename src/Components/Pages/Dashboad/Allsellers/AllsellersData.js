import React from 'react';

const AllsellersData = ({ seller,i }) => {
    console.log(seller);
    return (
        <div>
            {
                seller.role === 'seller' &&
                <div className="overflow-x-auto mt-8">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                                    <tr key={seller._id}>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button className='btn btn-xs btn-warning'>Delete</button></td>


                                </tr>
                            

                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default AllsellersData;