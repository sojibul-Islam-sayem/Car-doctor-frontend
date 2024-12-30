import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProviders';

const Booking = () => {
    const { user } = useContext(AuthContext)
    const serviceData = useLoaderData();
    const { title, price, img, service_id } = serviceData;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const amount = form.amount.value;

        const Booking = {
            name, email, date, amount, service_id, img, title
        }
        console.log(Booking);

        fetch('http://localhost:5000/booking', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Booking),

        })
            .then(res => res.json())
            .then(data => console.log(data))


    }


    return (
        <div className="max-w-7xl mx-auto my-12">

            <div className="relative w-full h-[300px] ">
                <img
                    className="w-full h-full rounded-lg" src='../../../assets/images/checkout/checkout.png' />
                <div className="absolute w-full rounded-lg bg-gradient-to-l from-[#15151500] to-[#151515] h-full left-0 top-0 flex items-center">
                    <h3 className="">Book Now:{title}</h3>
                </div>
            </div>
            <form onSubmit={handleBooking} className="bg-[#F3F3F3] p-24 rounded-xl flex flex-col space-y-6">
                <div className=" flex space-x-6">
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor="">Name</label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="text-[#A2A2A2] px-6 py-4 rounded-[10px]  bg-white" required />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor="">Date</label>
                        <input type="date" name="date" className='text-[#A2A2A2] px-6 py-4 rounded-[10px]  bg-white' required />
                    </div>
                </div>
                <div className="flex space-x-6">
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor="">Email</label>
                        <input type="email" name='email' defaultValue={user?.email} placeholder="Your Email" className="text-[#A2A2A2] px-6 py-4 rounded-[10px] bg-white" required />
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor="">Due Amount</label>
                        <input type="text" name='amount' defaultValue={'$' + price} placeholder='Due amount' className='text-[#A2A2A2] px-6 py-4 rounded-[10px] bg-white' required />
                    </div>
                </div>

                <input type="submit" className="bg-[#FF3811] text-white font-semibold px-6 py-4 rounded-lg" value="Confirm Booking" />

            </form>
        </div>
    );
};

export default Booking;