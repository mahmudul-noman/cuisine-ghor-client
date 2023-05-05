/* eslint-disable no-unused-vars */
import React from 'react';
import loader from '/assets/load.gif';

const Loader = () => {
    return (
        <div>
            <span className='bg-black flex justify-center '>
                <img className='w-full h-screen object-contain' src={loader} alt="" />
            </span>I
        </div>
    );
};

export default Loader;

