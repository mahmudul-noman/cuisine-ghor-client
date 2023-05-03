import React, { useEffect, useState } from 'react';
import SingleChefCard from './SingleChefCard';

const ChefCard = () => {

    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])


    return (
        <div className='grid grid-cols-3 container mx-auto my-8 gap-4'>
            {
                chef.map(chefHome => <SingleChefCard
                    key={chefHome.id}
                    chefHome={chefHome}

                ></SingleChefCard>)
            }
        </div>
    );
};

export default ChefCard;