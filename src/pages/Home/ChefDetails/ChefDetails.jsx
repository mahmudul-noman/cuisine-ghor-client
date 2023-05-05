import React, { useEffect, useState } from 'react';
import { FaHeart, FaStar, FaStarHalfAlt, FaThumbsUp } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ChefDetails = () => {
    const details = useLoaderData();

    const { chef_image, chef_name, chef_experience, chef_recipes_name, total_likes, id, chef_bio, recipe_img, recipe_name, recipe_ingredients, cooking_method, recipe_rating, recipe_name2, recipe_ingredients2, cooking_method2, recipe_rating2, recipe_img2, recipe_name3, recipe_ingredients3, cooking_method3, recipe_rating3, recipe_img3 } = details;

    const [fav, setFav] = useState(true);
    const addToFav = () => {
        toast.success('SuccessFully Added To Favorite', {
            style: { color: 'red' }
        });
        setFav(false);
    };

    const [favO, setFavO] = useState(true);
    const addToFavO = () => {
        toast.success('SuccessFully Added To Favorite', {
            style: { color: 'red' }
        });
        setFavO(false);
    };


    const [favT, setFavT] = useState(true);
    const addToFavT = () => {
        toast.success('SuccessFully Added To Favorite', {
            style: { color: 'red' }
        });
        setFavT(false);
    };

    return (
        <div className='pb-12'>
            <div className='relative'>
                <div>
                    <img src="https://i.ibb.co/BqG4xTP/1.jpg" className='h-96 w-full object-cover' alt="" />
                </div>

                <div className='lg:flex gap-4 items-center absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <img src={chef_image} className='hidden lg:block h-48 w-48 object-cover card' alt="" />
                    <div>
                        <h4 className='lg:text-5xl text-2xl font-extrabold mb-2 text-yellow-500 font-alt'>{chef_name}</h4>
                        <p className='mb-2'><span className='text-lg text-amber-500 font-extrabold'>About - {chef_name}:</span> {chef_bio}</p>
                        <p className='flex gap-2 text-lg font-bold'><span><FaThumbsUp className='text-rose-600'></FaThumbsUp></span>{total_likes}</p>
                        <p><span className='text-lg font-extrabold text-amber-500'>Recipes:</span> {chef_recipes_name}</p>
                        <p><span className='text-lg font-extrabold text-amber-500'>Experience:</span> {chef_experience}</p>
                    </div>
                </div>
            </div>

            <div className='px-4 lg:px-0'>
                <div className="lg:card border border-gray-300 lg:card-side bg-base-100 shadow-xl container mx-auto  mt-8 mb-12 p-8 items-center">
                    <figure className='w-full'><img src={recipe_img} className='w-full h-full' alt="Movie" /></figure>
                    <div className="card-body w-full">
                        <h2 className="card-title font-extrabold">Recipe Name: {recipe_name}</h2>
                        <h5 className='text-lg mt-4'><span className='font-extrabold mb-4'>Ingredients:</span> {recipe_ingredients}</h5>
                        <h5 className='text-lg'><span className='font-extrabold'>Cooking Method:</span> {cooking_method}</h5>

                        <div className='flex gap-4 items-center h-full text-2xl mt-4 mb-4'>
                            <Rating
                                readonly
                                placeholderRating={recipe_rating}
                                emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                                placeholderSymbol={<FaStar className='text-amber-400 shadow-md'></FaStar>}
                                fullSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                            />
                            <h4 className='font-extrabold text-2xl'>{recipe_rating}</h4>
                        </div>

                        <div className='flex gap-2'>
                            <h4 className='text-rose-600 text-xl font-extrabold'>Add to Favorite</h4>
                            <button disabled={!fav} onClick={addToFav}>
                                <FaHeart className={fav ? 'w-5 h-5 text-gray-500 shadow-xl' : 'w-5 h-5 text-rose-600 shadow-xl'} />
                            </button>
                        </div>

                    </div>
                </div>

                <div className="lg:card border border-gray-300 lg:card-side bg-base-100 shadow-xl container mx-auto mb-12 p-8 items-center">
                    <figure className='w-full'><img src={recipe_img2} className='w-full h-full' alt="Movie" /></figure>
                    <div className="card-body w-full">
                        <h2 className="card-title font-extrabold">Recipe Name: {recipe_name2}</h2>
                        <h5 className='text-lg mt-4'><span className='font-extrabold mb-4'>Ingredients:</span> {recipe_ingredients2}</h5>
                        <h5 className='text-lg'><span className='font-extrabold'>Cooking Method:</span> {cooking_method2}</h5>

                        <div className='flex gap-4 items-center h-full text-2xl mt-4 mb-4'>
                            <Rating
                                readonly
                                placeholderRating={recipe_rating2}
                                emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                                placeholderSymbol={<FaStar className='text-amber-400 shadow-md'></FaStar>}
                                fullSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                            />
                            <h4 className='font-extrabold text-2xl'>{recipe_rating2}</h4>
                        </div>
                        <div className='flex gap-2'>
                            <h4 className='text-rose-600 text-xl font-extrabold'>Add to Favorite</h4>
                            <button disabled={!favO} onClick={addToFavO}>
                                <FaHeart className={favO ? 'w-5 h-5 text-gray-500 shadow-xl' : 'w-5 h-5 text-rose-600 shadow-xl'} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="lg:card border border-gray-300 lg:card-side bg-base-100 shadow-xl container mx-auto mb-12 p-8 items-center">
                    <figure className='w-full'><img src={recipe_img3} className='w-full h-full' alt="Movie" /></figure>
                    <div className="card-body w-full">
                        <h2 className="card-title font-extrabold">Recipe Name: {recipe_name3}</h2>
                        <h5 className='text-lg mt-4'><span className='font-extrabold mb-4'>Ingredients:</span> {recipe_ingredients3}</h5>
                        <h5 className='text-lg'><span className='font-extrabold'>Cooking Method:</span> {cooking_method3}</h5>

                        <div className='flex gap-4 items-center h-full text-2xl mt-4 mb-4'>
                            <Rating
                                readonly
                                placeholderRating={recipe_rating3}
                                emptySymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                                placeholderSymbol={<FaStar className='text-amber-400 shadow-md'></FaStar>}
                                fullSymbol={<FaStarHalfAlt></FaStarHalfAlt>}
                            />
                            <h4 className='font-extrabold text-2xl'>{recipe_rating3}</h4>
                        </div>
                        <div className='flex gap-2'>
                            <h4 className='text-rose-600 text-xl font-extrabold'>Add to Favorite</h4>
                            <button disabled={!favT} onClick={addToFavT}>
                                <FaHeart className={favT ? 'w-5 h-5 text-gray-500 shadow-xl' : 'w-5 h-5 text-rose-600 shadow-xl'} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefDetails;