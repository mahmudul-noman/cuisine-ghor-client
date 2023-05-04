import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleChefCard = ({ chefHome }) => {

    const { chef_image, chef_name, chef_experience, chef_recipes_name, total_likes, id } = chefHome;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full h-96 object-cover' src={chef_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{chef_name}</h2>
                <p className='text-base'><span className='font-bold'>Experiences:</span> {chef_experience}</p>
                <p className='text-base'><span className='font-bold'>Recipes:</span> {chef_recipes_name}</p>
                <p className='flex gap-2 text-lg font-bold mt-2'><span><FaThumbsUp className='text-rose-600'></FaThumbsUp></span>{total_likes}</p>
                <div className="card-actions justify-end">
                    <Link to={`/chef/${id}`}><button className="btn btn-warning">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleChefCard;