import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assests/error-img/img1.jpg'
const ErrorPage = () => {
    return (
        <section className='flex items-center min-h-screen p-16  text-white-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div > <img className='lg:h-[400px] rounded-2xl shadow-2xl' src={img} alt="" /> </div>
                <div className='max-w-md text-center'>
                  
                    <p className='text-2xl font-semibold md:text-3xl text-white mb-8'>
                        Sorry, we couldn't find this page.
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-primary text-gray-900'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}
  
export default ErrorPage;