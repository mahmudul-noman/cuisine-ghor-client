import React, { useEffect, useState } from 'react';

const ChefCard = () => {

    const [chef, setChef] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])


    return (
        <div>
            {
                chef.map(chefHome => <p
                    key={chefHome.id}
                >
                    {chefHome.chef_name}
                </p>)
            }
        </div>
    );
};

export default ChefCard;