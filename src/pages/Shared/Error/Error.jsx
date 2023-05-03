import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';

const Error = () => {
    return (
        <div>
            <img className='object-cover w-full max-h-screen relative' src="https://i.ibb.co/syJfQbg/20602754-6333074.jpg" alt="" />


            <button className="btn bg-red-600 border-0 text-white font-bold tracking-widest absolute bottom-0 left-1/2" onClick={() => window.history.back()}>
            <FaAngleLeft></FaAngleLeft> &nbsp; Go Back
            </button>
        </div>
    );
};

export default Error;