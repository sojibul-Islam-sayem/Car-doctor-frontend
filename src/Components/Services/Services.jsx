import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('../../../public/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className=''>
            <div className='text-center'>
                <h3 className='font-bold text-[20px] text-[#FF3811]'>Service</h3>
                <h1 className="text-5xl text-black font-bold ">Our Service Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;