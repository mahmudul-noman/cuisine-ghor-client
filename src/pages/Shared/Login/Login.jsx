import React, { useContext, useState } from 'react';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const { GoogleSignIn, githubSignIn } = useContext(AuthContext);


    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const handleLogin = () => {
        event.preventDefault();
        setSuccess('');
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);


        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                setSuccess('');
                setSuccess('Login Successfully');
                // updateUser(result.user, name);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // const handleGoogleSignIn = () => {
    //     GoogleSignIn(email, password)
    //     .then(result => {
    //         const user = result.user;
    //     })
    // }

    // const updateUser = (user, name, photo) => {
    //     updateProfile(user, {
    //         displayName: name,
    //         photoURL: photo
    //     })
    //         .then(() => {
    //             console.log("User Name Updated");
    //         })
    //         .catch(error => setError(error.message))
    // }



    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-5xl font-semibold text-center text-purple-700">
                    Login
                </h1>
                <form onSubmit={handleLogin} className="mt-6">
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input name='email'
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
                        <input name='password'
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>

                    <p className='text-sm font-extrabold text-green-600'>{success}</p>
                    <p className='text-sm font-extrabold text-red-600'>{error}</p>

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
                    <button onClick={GoogleSignIn}
                        type="button" className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 hover:bg-yellow-600 hover:text-white">
                        <FaGoogle></FaGoogle>
                    </button>
                    <button onClick={githubSignIn} className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 hover:bg-green-600 hover:text-white">
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