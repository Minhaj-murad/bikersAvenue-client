import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
 



  const navItems = <>
    <li className='font-semibold text-white'><Link to='/'>Home</Link></li>
  
        <>
          <li className='font-semibold text-white'><Link to='/myblogs'>My Blogs</Link></li>
    
          <li className='font-semibold text-white'><Link >Logout</Link></li>

        <li className='font-semibold text-white'><Link to='/login'>Login</Link></li> </>
    
   
  </>

  return (
    <div className="navbar h-20 mb-12 pt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ml-12">
            {navItems}
            
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl gap-4 -mt-6">
          {/* <img className='w-16 ' src={img} alt="" /> */}
          <h1 className='company-name text-white font-extrabold text-3xl'> Bikers Avenue!</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ml-24">
          {navItems}
          <li className='font-semibold text-white'><Link to='/blog'>My Blog</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
       
      </div>
    </div>
  );
};

export default Header;