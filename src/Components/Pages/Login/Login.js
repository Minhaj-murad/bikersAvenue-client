import React, { useContext } from 'react';
import { Link, } from 'react-router-dom';



const Login = () => {



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }

    return (
        <div className="sm:w-full lg:w-1/3 min-h-screen mx-auto mt-12 mb-12  my-20">
        
          

                <div className="card  w-full shadow-2xl bg-slate-100  text-gray-800 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-gray-800">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn text-gray-900 btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Bikers Avenue? <Link className='text-blue-600 font-bold' to="/signup">Sign Up</Link> </p>
                   

                </div>
                
            </div>
     
    
    );
};
export default Login;