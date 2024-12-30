import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('https://car-doctor-backend-phi.vercel.app/services');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.error("Fetching services failed:", error);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className='mt-24'>
            <div className='text-center flex flex-col space-y-5 mb-4'>
                <h3 className='font-bold text-[20px] text-[#FF3811]'>Service</h3>
                <h1 className="text-5xl text-black font-bold ">Our Service Area</h1>
                <p className="text-[#737373] mb-7">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-14'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mt-5 mb-9'>
                <button className="border px-3 py-2 rounded text-[#FF3811] border-[#FF3811]">
                    More Services
                </button>
            </div>
        </div>
    );
};

export default Services;