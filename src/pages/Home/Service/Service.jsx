import React, { useEffect, useState } from 'react';

const Service = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://cuisine-ghor-server-mhnoman75-gmailcom.vercel.app/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-3 px-2 lg:px-0 gap-4 container mx-auto justify-center py-12 '>
            {
                service.map(s => <div key={s.id} className='shadow border-1 border-gray-500 p-8 text-center'>
                    <img className='w-28 h-28 mx-auto mb-4' src={s.service_image} alt="" />
                    <h2 className='text-4xl font-extrabold '>{s.service_title}</h2>
                    <p className='mt-4 text-lg font-semibold'>{s.service_description}</p>
                </div>)
            }
        </div>
    );
};

export default Service;