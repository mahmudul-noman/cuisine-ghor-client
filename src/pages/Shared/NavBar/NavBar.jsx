import React, { useContext } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import './NavBar.css';
import { AuthContext } from '../../../providers/AuthProvider';
import logo from '/assets/logo.png';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

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
                    <div className='flex items-center'>
                        <img className='w-14 h-14' src={logo} alt="" />
                        <p className="lg:text-xl text-sm font-bold uppercase">Cuisine Ghor</p>
                    </div>
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
                        user ? <div className='flex items-center'>
                            <div>
                                <img className='w-14 h-14 border-2 border-gray-500 p-1 rounded-full object-cover' title={user?.displayName} src={user?.photoURL} alt="" />
                            </div>
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