import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const Register = () => {
    const {createUser,googlesignin} = useContext(AuthContext);
    const googleprovider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password,name);
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true })
        })
        .catch(err => console.error(err));
    }
     
    const handlegooglesign = () => {
        googlesignin(googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

                
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="sm:w-full lg:w-1/3 min-h-screen mx-auto mt-12 mb-12  my-20">
        
          

                <div className="card  w-full shadow-2xl bg-slate-100  text-gray-800 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-800">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered " />
                        </div>
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
                    <p className='text-center'>Already Have an Account? <Link className='text-blue-600 font-bold' to="/login">Login</Link> </p>
                    <div className="divider">OR</div>
                    
                    <div className='text-center'>
                        <h1>Or Login With: </h1>
                    <span><button onClick={handlegooglesign} className='bg-amber-600 py-1 px-2 rounded-lg text-center w-28 mx-auto  border border-gray-700 text-black'>Google </button></span>
                    </div>

                </div>
                
            </div>
     
    
    );
};

export default Register;