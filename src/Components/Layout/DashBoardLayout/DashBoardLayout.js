import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import Header from '../../Shared/Header/Header';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile  ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-white  ">

                        <li className='bg-gray-700 font-semibold w-full  max-w-xs mx-auto rounded-xl shadow-2xl mt-4'><Link to='/dashboard/myorders'>My Orders</Link></li>

                        {
                            isSeller && <>
                                <li className='bg-gray-700 font-semibold w-full  max-w-xs mx-auto rounded-xl shadow-2xl mt-4'><Link to='/dashboard/addbike'>Add Bike</Link></li>
                                <li className='bg-gray-700 font-semibold w-full  max-w-xs mx-auto rounded-xl shadow-2xl mt-4'><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }

                        {
                            isAdmin &&
                            <>
                               <li className='bg-gray-700 font-semibold w-full  max-w-xs mx-auto rounded-xl shadow-2xl mt-4'><Link to='/dashboard/addbike'>Add Bike</Link></li>
                                <li className='bg-gray-700 font-semibold w-full  max-w-xs mx-auto rounded-xl shadow-2xl mt-4'><Link to='/dashboard/myproducts'>My Products</Link></li>
                                <li className='bg-gray-700 font-semibold w-full  max-w-xs mx-auto rounded-xl shadow-2xl mt-4'><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li className='bg-gray-700 font-semibold w-full  max-w-xs mx-auto rounded-xl shadow-2xl mt-4'><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li className='bg-gray-700 font-semibold w-full  max-w-xs mx-auto rounded-xl shadow-2xl mt-4'><Link to='/dashboard/allsellers'>All sellers</Link></li>
                            </>
                        }



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;


