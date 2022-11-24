import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const DashBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile ">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-white  ">

                        <li className='bg-gray-400 max-w-xs mx-auto rounded-xl shadow-2xl'><Link to='/dashboard'>My Bookings</Link></li>




                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;


