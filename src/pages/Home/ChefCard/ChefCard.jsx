import React, { useEffect, useState } from 'react';
import SingleChefCard from './SingleChefCard';

const ChefCard = () => {

    const [chef, setChef] = useState([]);


    useEffect(() => {
        fetch('https://cuisine-ghor-server-mhnoman75-gmailcom.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])


    return (
        <div className='my-24'>
            <div className='text-center'>
                <h4 className='lg:text-5xl text-lg font-semibold italic text-rose-600 font-alt'>Our Expert Chefs</h4>
                <p className='text-lg font-semibold mt-4'>Everything You Want to Know</p>
            </div>
            <div className='grid lg:grid-cols-3 px-2 lg:px-0 container mx-auto my-8 gap-4'>

                {
                    chef.map(chefHome => <SingleChefCard
                        key={chefHome.id}
                        chefHome={chefHome}

                    ></SingleChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefCard;