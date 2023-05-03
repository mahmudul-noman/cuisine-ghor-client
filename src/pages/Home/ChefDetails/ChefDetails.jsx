import React, { useEffect } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const details = useLoaderData();

    const { chef_image, chef_name, chef_experience, chef_recipes_name, total_likes, id, chef_bio } = details;

    return (
        <div className='relative'>
            <div>
                <img src="https://i.ibb.co/BqG4xTP/1.jpg" className='h-96 w-full object-cover' alt="" />
            </div>

            <div className='flex gap-4 items-center absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <img src={chef_image} className='h-48 w-48 object-cover card' alt="" />
                <div>
                    <h4 className='text-2xl font-extrabold mb-2'>{chef_name}</h4>
                    <p className='mb-2'><span className='text-lg text-amber-500 font-extrabold'>About - {chef_name}:</span> {chef_bio}</p>
                    <p className='flex gap-2 text-lg font-bold'><span><FaThumbsUp className='text-rose-600'></FaThumbsUp></span>{total_likes}</p>
                    <p><span className='text-lg font-extrabold text-amber-500'>Recipes:</span> {chef_recipes_name}</p>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;