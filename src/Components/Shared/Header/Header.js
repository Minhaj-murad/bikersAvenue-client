import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assests/logo/logo1.webp'
import { AuthContext } from '../../Authprovider/Authprovider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogOut = () => {
    logOut()
      .then(() => { 
        navigate('/')
      })
      .catch(error => console.error(error))
  }


  const navItems = <>
    <li className='font-semibold text-white'><Link to='/'>Home</Link></li>
    {
      user?.email ?
        <>


          <li className='font-semibold text-white'><Link onClick={handleLogOut} >Logout</Link></li> </>
        :
        <li className='font-semibold text-white'><Link to='/login'>Login</Link></li>

    }
    <li className='font-semibold text-white'><Link to='/blog'>My Blog</Link></li>
    <li className='font-semibold text-white'><Link to='/dashboard'>DashBoard</Link></li>

  </>

  return (
    <div className="navbar h-20 mb-12 pt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52 ml-12">
            {navItems}

          </ul>
        </div>
        <div className='justify-center items-center '>
          <Link to='/'>
            <div className='sm:flex sm:justify-center items-center'>
              <img className='w-20 mx-auto lg:w-24   ' src={logo} alt="" />
              <h1 className='company-name text-white font-extrabold text-3xl'> BIKERSavenue</h1>
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ml-24">
          {navItems}

        </ul>
      </div>
      <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
    </div>
  );
};

export default Header;