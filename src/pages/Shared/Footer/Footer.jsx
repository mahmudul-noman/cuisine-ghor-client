import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaMapMarkerAlt, FaRegCalendarAlt, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white'>
            <div className='grid lg:grid-cols-3 gap-4 container mx-auto lg:px-0 px-2 lg:px-0 py-24 lg:justify-items-center'>


                <div>
                    <h4 className='text-2xl font-extrabold mb-3 text-amber-500'>About Us</h4>
                    <p className='text-base mb-4'>What are the purpose of a recipe?
                        A recipe is simply defined as a set of instructions with a list of ingredients used to prepare a particular food, dish or drink. People use recipes to replicate foods they enjoy that they otherwise do not know how to make.</p>
                    <ul className='flex gap-5 text-2xl'>
                        <li><FaFacebookSquare></FaFacebookSquare></li>
                        <li><FaInstagramSquare></FaInstagramSquare></li>
                        <li><FaTwitterSquare></FaTwitterSquare></li>
                    </ul>
                </div>


                <div>
                    <h4 className='text-2xl font-extrabold mb-3 text-amber-500'>The Menu</h4>
                    <ul className='cursor-pointer'>
                        <li className='text-base font-semibold mb-2'>Speacial Items</li>
                        <li className='text-base font-semibold mb-2'>Fresh Breakfast</li>
                        <li className='text-base font-semibold mb-2'>Lunch Menu</li>
                        <li className='text-base font-semibold'>Dinner Items</li>
                    </ul>
                </div>


                <div>
                    <h4 className='text-2xl font-extrabold mb-3 text-amber-500'>Get in Touch</h4>
                    <div className='flex gap-2'>
                        <ul>
                            <FaRegCalendarAlt className='text-4xl mb-2 text-white'></FaRegCalendarAlt>
                        </ul>
                        <ul>
                            <li className='mb-4'>
                                <p className='font-semibold'>Monday- Friday:</p>
                                <p>08am - 12pm</p>
                            </li>
                            <li>
                                <p className='font-semibold'>Saturday - Sunday:</p>
                                <p>10am - 11pm</p>
                            </li>
                        </ul>
                    </div>


                    <div className='mt-4 flex gap-2 justify-content-center'>
                        <ul><FaMapMarkerAlt className='text-4xl mb-2 text-white'></FaMapMarkerAlt></ul>
                        <ul><p>Mirpur-1, Dhaka, Bangladesh</p></ul>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;