import React, { useContext } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import './NavBar.css';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    // console.log(user.email);

    return (
        <div className='shadow-md'>
            <div className="navbar bg-base-100 container mx-auto py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <ActiveLink to="/" className=''>Home</ActiveLink>
                            <ActiveLink to="/blog" className=''>Blog</ActiveLink>
                        </ul>
                    </div>
                    <Link className="lg:text-xl text-sm font-bold flex gap-2 uppercase lg:tracking-widest"><FaUtensils className='text-2xl text-amber-600'></FaUtensils>Cuisine Ghor</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <ActiveLink to="/" className='myNav'>Home</ActiveLink>
                        <ActiveLink to="/blog" className='myNav'>Blog</ActiveLink>
                        <ActiveLink to="/about" className='myNav'>About</ActiveLink>
                    </ul>
                </div>



                <div className="navbar-end">
                    {
                        user?.email ? <div className='flex items-center'>
                            <li className='list-none'>{user?.email}</li>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar me-2">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1683089653~exp=1683090253~hmac=1ec6d1ff6da3dd434216779f9d407770a0f25f4dac9e47c1784a31ddb3b49353" />
                                </div>
                            </label>
                            <Link onClick={logOut} className="btn btn-outline btn-error border-2 tracking-widest">Logout</Link>
                        </div>

                            :
                            <Link to="/login" className="btn btn-outline btn-warning border-2 tracking-widest">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;