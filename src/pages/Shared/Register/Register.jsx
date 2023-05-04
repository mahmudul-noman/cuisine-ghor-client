import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const [error, setError] = useState();
    const [success, setSuccess] = useState();




    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');
        setError('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);


        // validate
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Ensure string has two uppercase letters.');
            return;
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Ensure string has one special case letter.');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Ensure string has two digits.')
            return;
        }

        // console.log(name, email, password, photo);

        createUser(email, password, name, photo)
            .then(result => {
                const createdUser = result.user;
                setError('');
                setSuccess('')
                event.target.reset();
                setSuccess('User Created Successfully');
                updateUser(result.user, name, photo);
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const updateUser = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {
                console.log("User Name Updated");
            })
            .catch(error => setError(error.message))
    }




    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-5xl font-semibold text-center text-rose-700">
                    Register
                </h1>
                <form onSubmit={handleRegister} className="mt-6">

                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Name <span className='text-xl text-red-600 font-bold'>*</span>
                        </label>
                        <input name='name' type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>

                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email <span className='text-xl text-red-600 font-bold'>*</span>
                        </label>
                        <input name='email' type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password <span className='text-xl text-red-600 font-bold'>*</span>
                        </label>
                        <input name='password' type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>


                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Photo URL <span className='text-xl text-red-600 font-bold'>*</span>
                        </label>
                        <input name='photo' type="text"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40" required
                        />
                    </div>

                    <p className='text-sm font-extrabold text-green-600'>{success}</p>
                    <p className='text-sm font-extrabold text-red-600'>{error}</p>


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