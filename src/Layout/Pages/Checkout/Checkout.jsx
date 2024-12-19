import { useLoaderData } from "react-router-dom";
import img from '../../../assets/images/checkout/checkout.png'

const Checkout = () => {
    const service = useLoaderData();
    const { title, _id } = service

    return (
        <div className="max-w-7xl mx-auto my-12">

            <div className="relative w-full h-[300px] ">
                <img
                    src={img}
                    className="w-full h-full rounded-lg" />
                <div className="absolute w-full rounded-lg bg-gradient-to-l from-[#15151500] to-[#151515] h-full left-0 top-0 flex items-center">
                    <h3 className="">Book Now:{title}</h3>
                </div>
            </div>
            <form className="bg-[#F3F3F3] p-24 rounded-xl flex flex-col space-y-6">
                <div className=" flex space-x-6">
                    <input type="text" placeholder="First Name" className="text-[#A2A2A2] px-6 py-4 rounded-[10px] w-1/2 bg-white" required />
                    <input type="text" placeholder="Last Name" className="text-[#A2A2A2] px-6 py-4 rounded-[10px] w-1/2 bg-white" required />
                </div>
                <div className="flex space-x-6">
                    <input type="number" placeholder="Your Number" className="text-[#A2A2A2] px-6 py-4 rounded-[10px] w-1/2 bg-white" required />
                    <input type="email" placeholder="Your Email" className="text-[#A2A2A2] px-6 py-4 rounded-[10px] w-1/2 bg-white" required />
                </div>
                <div className="">
                    <textarea className="textarea textarea-bordered p-6 text-base bg-white textarea-md  w-full" name="Your message" placeholder="Your Message" id="Message"></textarea>
                </div>
                <button className="bg-[#FF3811] text-white font-semibold px-6 py-4 rounded-lg">Order Confirm</button>
            </form>
        </div>
    );
};

export default Checkout;