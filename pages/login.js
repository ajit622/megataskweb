import React, { useState } from 'react'
import Header from './componets/header'
import Link from 'next/link'
import connectDB from './connectDb'


const Login = () => {
    const [formState , setFormState]  = useState({email:"", password:""}); 
    const [message , setMessage]      =  useState("");
    const [showMessage , setShowMessage]  = useState(false);
    const handleInput = (e) =>{
        const {id, value}  = e.target;
        setFormState((prev) => ({
            ...prev,
            [id]:value,
        }));
    }

    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        try {       
            const res = await fetch("api/user/login",{
                method:"POST",
                body:JSON.stringify(formState),
                header:{
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            setMessage(data.message);
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);  
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }
    return (
        
        <>
            <Header />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

                <div className="container">
                    <div className="row">
                        <div className='col-md-8 m-auto'>
                          <div className='bg-info p-5'>
                          <div className="sm:mx-auto sm:w-full sm:max-w-sm w-50 bg-color-red">
                                <img
                                    className="mx-auto h-10 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt="Your Company"
                                />
                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    Sign in to your account
                                </h2>
                            </div>
                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" onSubmit={handleFormSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInput}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
                                            </label>
                                            <div className="text-sm">
                                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required 
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleInput}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                        
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-white ">
                                    Don't Have Account 
                                   <Link href={'/register'} className="font-semibold leading-6 ml-2 text-indigo-600 hover:text-indigo-500">
                                        Sign Up
                                   
                                   </Link>
                                   
                                </p>

                            </div>
                          </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Login