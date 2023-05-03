import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-5xl font-semibold text-center text-rose-700">
                    Register
                </h1>
                <form className="mt-6">

                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name <span className='text-xl text-red-600 font-bold'>*</span>
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email <span className='text-xl text-red-600 font-bold'>*</span>
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password <span className='text-xl text-red-600 font-bold'>*</span>
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>


                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Photo URL <span className='text-xl text-red-600 font-bold'>*</span>
                        </label>
                        <input
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>


                    <a href="#" className="text-xs text-purple-600 hover:underline" >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full font-bold px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-rose-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Register
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>


                <p className="mt-8 font-light text-center text-gray-700 text-base">
                    {" "}
                    Already have an account?{" "}
                    <Link to="/login" className="font-medium text-green-600 hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;