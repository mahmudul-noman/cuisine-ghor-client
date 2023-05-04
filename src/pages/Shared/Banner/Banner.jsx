import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
const Banner = () => {
    return (
        <div className='relative'>
            <img className='object-cover lg:h-full h-96' src="https://i.ibb.co/r6YJCx5/banner.jpg" alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h4 className='text-white lg:text-5xl text-xl font-bold text-center'>Build good habits with us in no time</h4>
                <p className='lg:text-2xl text-base italic text-yellow-600 font-semibold tracking-widest mt-2'>-We are fluent in making appetizing meals.</p>
                <button className='btn btn-warning lg:btn-wide text-base tracking-widest mt-4'><FaClipboardList className='text-2xl text-black'></FaClipboardList> &nbsp; See Menu</button>
            </div>
        </div>
    );
};

export default Banner;