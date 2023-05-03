import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
                <a className="text-xl font-bold italic">Cuisine Ghor</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>



            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar me-2">
                    <div className="w-10 rounded-full">
                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1683089653~exp=1683090253~hmac=1ec6d1ff6da3dd434216779f9d407770a0f25f4dac9e47c1784a31ddb3b49353" />
                    </div>
                </label>
                <a className="btn btn-outline btn-primary">Login</a>
            </div>
        </div>
    );
};

export default NavBar;