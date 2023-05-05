import React from 'react';

const MenuItem = () => {
    return (
        <div className='bg-gray-300'>
            <div className='container mx-auto py-12'>
                <div className='text-center mb-12'>
                    <h4 className= 'italic text-xl font-semibold'>Special selection</h4>
                    <h2 className='text-4xl font-extrabold font-alt'><span className='text-red-500 ital'>From</span> Our Menu</h2>
                </div>

                <div className='lg:flex text-center lg:text-justify justify-around gap-4'>
                    <ul className='text-lg leading-10 font-semibold'>
                        <li>Spaghetti Carbonara - <span className='text-rose-500 font-semibold font-alt'>150$</span></li>
                        <li>Spaghetti Bolognese - <span className='text-rose-500 font-semibold font-alt'>200$</span></li>
                        <li>Caprese Salad - <span className='text-rose-500 font-semibold font-alt'>500$</span></li>
                        <li>Lasagna - <span className='text-rose-500 font-semibold font-alt'>100$</span></li>
                        <li>Fettuccine Alfredo - <span className='text-rose-500 font-semibold font-alt'>200$</span></li>
                    </ul>

                    <ul className='text-lg leading-10 font-semibold'>
                        <li>Bruschetta - <span className='text-rose-500 font-semibold font-alt'>150$</span></li>
                        <li>Risotto alla Milanese - <span className='text-rose-500 font-semibold font-alt'>250$</span></li>
                        <li>Gnocchi alla Sorrentina - <span className='text-rose-500 font-semibold font-alt'>480$</span></li>
                        <li>Spaghetti Carbonara - <span className='text-rose-500 font-semibold font-alt'>600$</span></li>
                        <li>Eggplant Parmigiana - <span className='text-rose-500 font-semibold font-alt'>120$</span></li>
                    </ul>

                    <ul className='text-lg leading-10 font-semibold'>
                        <li>Bruschetta - <span className='text-rose-500 font-semibold font-alt'>150$</span></li>
                        <li>Risotto alla Milanese - <span className='text-rose-500 font-semibold font-alt'>250$</span></li>
                        <li>Gnocchi alla Sorrentina - <span className='text-rose-500 font-semibold font-alt'>480$</span></li>
                        <li>Spaghetti Carbonara - <span className='text-rose-500 font-semibold font-alt'>600$</span></li>
                        <li>Eggplant Parmigiana - <span className='text-rose-500 font-semibold font-alt'>120$</span></li>
                    </ul>
                </div>
                <div className='flex justify-center mt-8'>
                    <button className='btn btn-outline btn-error'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;