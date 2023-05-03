import React from 'react';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-5xl font-semibold text-center text-purple-700">
                    Login
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
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
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>
                    <a href="#" className="text-xs text-purple-600 hover:underline" >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full font-bold px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button
                        type="button" className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 hover:bg-yellow-600 hover:text-white">
                        <FaGoogle></FaGoogle>
                    </button>
                    <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 hover:bg-green-600 hover:text-white">
                        <FaTwitter></FaTwitter>
                    </button>

                </div>

                <p className="mt-8 font-light text-center text-gray-700 text-base">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/register" className="font-medium text-purple-600 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;