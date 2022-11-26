import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Authprovider/Authprovider';
import useToken from '../../Hooks/useToken';


const Register = () => {
    const { createUser, updateUser, googlesignin } = useContext(AuthContext);
    const googleprovider = new GoogleAuthProvider();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUPError] = useState('')
    const[createduseremail,setcreateduseremail]=useState('')
     const [token]=useToken(createduseremail);
     const navigate =useNavigate()


    const handleSignUp = (data) => {

        if(token){
            navigate('/');
        }
    
        setSignUPError('');
        createUser(data.email, data.password, data.role)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,data.role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email,role) => {
        const user = { name, email,role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('saveuser', data)
                // getUserToken(email)
                setcreateduseremail(email)

            })
    }
    const handlegooglesignin = () => {
        googlesignin(googleprovider)
            .then(result => {
                const user = result.user;
                console.log(user);

                savebuyer(user.displayName, user.email);

            })
            .catch(error => console.error(error));
    }

    const savebuyer = (name, email) => {
        const buyer = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(buyer)
        })
            .then(res => res.json())
            .then(data => {
                console.log('savebuyer', data)

            })
    }
    //  Using JWTTOKEN in client side

    // const getUserToken = email => {
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem('accessToken', data.accessToken)

    //             }
    //         })
    // }


    return (
        <div>

            <div className=' sm:w-full lg:w-1/3 min-h-screen mx-auto mt-12 mb-12  my-20 shadow-2xl bg-slate-100  text-gray-800 py-20 '>
                <div className='w-96 mx-auto p-7'>
                    <h2 className='text-2xl font-bold text-center  text-gray-800'>Sign UP</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>


                         

                        <select {...register("role", { required: "buyer  is required" })} className="select select-bordered w-full max-w-xs mt-8">
                            <option disabled selected>Select Your Choice</option>
                            <option value="buyer">Buyer</option>
                            <option value='seller' >Seller</option>
                        </select>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-gray-800">Email</span>
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                        </div>
                        {/* SEE HANDLE ERROR IN REACT HOOK FORM */}
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-gray-800">Password</span>
                            </label>
                            <input type="password" {...register("password",
                                {
                                    required: "Pssword is required",

                                    minLength: { value: 6, message: 'Password should be 6 characters longer' }
                                    //   use pattern here
                                })} className="input input-bordered w-full " />
                            {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                            <label className="label">
                                <span className="label-text">Forget Password?</span>
                            </label>

                        </div>

                        <input className='btn text-gray-900 btn-primary w-full' value="Log in" type="submit" />
                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    </form>
                    <p>Already Have an account?<Link to='/login' className='text-primary'> Go to Login</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={handlegooglesignin} className='bg-amber-600 py-1 px-2 rounded-lg text-center w-full mx-auto  border border-gray-700 text-black'>Continue With Google</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;