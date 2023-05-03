import React from 'react';

const MenuItem = () => {
    return (
        <div className='bg-gray-300'>
            <div className='container mx-auto py-12'>
                <div className='text-center mb-12'>
                    <h4 className='italic text-xl font-semibold'>Special selection</h4>
                    <h2 className='text-4xl font-extrabold'><span className='text-amber-500 ital'>From</span> Our Menu</h2>
                </div>

                <div className='flex justify-around gap-4'>
                    <ul className='text-lg leading-10 font-semibold'>
                        <li>Spaghetti Carbonara - 150$</li>
                        <li>Spaghetti Bolognese - 200$</li>
                        <li>Caprese Salad - 500$</li>
                        <li>Lasagna - 100$</li>
                        <li>Fettuccine Alfredo - 200$</li>
                    </ul>

                    <ul className='text-lg leading-10 font-semibold'>
                        <li>Bruschetta - 150$</li>
                        <li>Risotto alla Milanese - 250$</li>
                        <li>Gnocchi alla Sorrentina - 480$</li>
                        <li>Spaghetti Carbonara - 600$</li>
                        <li>Eggplant Parmigiana - 120$</li>
                    </ul>

                    <ul className='text-lg leading-10 font-semibold'>
                        <li>Bruschetta - 150$</li>
                        <li>Risotto alla Milanese - 250$</li>
                        <li>Gnocchi alla Sorrentina - 480$</li>
                        <li>Spaghetti Carbonara - 600$</li>
                        <li>Eggplant Parmigiana - 120$</li>
                    </ul>
                </div>
                <div className='flex justify-center mt-8'>
                    <button className='btn btn-outline btn-warning'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;