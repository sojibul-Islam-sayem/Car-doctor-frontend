import { Link, useLoaderData } from "react-router-dom";
import img1 from '../../../assets/images/checkout/checkout.png'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import { FaRegPlayCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import logo from '../../../assets/logo.svg'





const Checkout = () => {

    const [titles, setTitles] = useState([]);


    useEffect(() => {
        axios.get('https://car-doctor-backend-phi.vercel.app/services', { withCredentials: true })
            .then(res => {
                const titleList = res.data.map(service => service.title);
                setTitles(titleList);
            })
    }, [])
    const service = useLoaderData();
    const { title, _id, img, description, facility,price } = service
    console.log(titles);

    return (
        <div className="max-w-7xl mx-auto my-12">

            <div className="relative w-full h-[300px] mb-9">
                <img
                    src={img1}
                    className="w-full h-full rounded-lg" />
                <div className="absolute w-full rounded-lg bg-gradient-to-l from-[#15151500] to-[#151515] h-full left-0 top-0 flex items-center">
                    <h3 className="text-4xl text-white font-bold p-20">Service Details</h3>
                </div>
            </div>

            <div className="flex space-x-6 md:flex-row flex-col">
                <div className="w-8/12">
                    <img className="w-full rounded-xl" src={img} alt="" />
                    <h3 className="text-4xl font-bold mb-7 text-[#151515]">{title}</h3>
                    <p className="text-[#737373] mb-7">{description}</p>
                    <div className="grid grid-cols-2 gap-6 mb-7">
                        {facility.map(fac => <div className="bg-[#F3F3F3] rounded-xl border-t-2 border-[#FF3811] p-8">
                            <h3 className="text-[20px] text-[#444444] mb-2 font-bold">{fac.name}</h3>
                            <p className="text-[#737373]">{fac.details}</p>
                        </div>)}
                    </div>
                    <p className="mb-12 text-[#737373]">{description}</p>
                    <div className="mb-8">
                        <h3 className="text-4xl font-bold mb-7 text-[#151515]">3 Simple Steps to Process</h3>
                        <p className="text-[#737373] mb-8">{description}</p>
                        <div className="flex space-x-6 text-center">
                            <div className="border flex flex-col justify-center items-center border-[#E8E8E8] p-8 rounded-xl">
                                <h3 className="bg-[#FF3811] flex items-center justify-center text-white text-[20px] font-bold w-[53px]  h-[53px] rounded-full border-8 border-[#FF38111A]">01</h3>
                                <h3 className="text-[20px] font-bold text-[#151515]">STEP ONE</h3>
                                <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
                            </div>
                            <div className="border flex flex-col justify-center items-center border-[#E8E8E8] p-8 rounded-xl">
                                <h3 className="bg-[#FF3811] flex items-center justify-center text-white text-[20px] font-bold w-[53px]  h-[53px] rounded-full border-8 border-[#FF38111A]">02</h3>
                                <h3 className="text-[20px] font-bold text-[#151515]">STEP TWO</h3>
                                <p className="text-[#737373]">This step involves preparing the necessary documents.</p>
                            </div>
                            <div className="border flex flex-col justify-center items-center border-[#E8E8E8] p-8 rounded-xl">
                                <h3 className="bg-[#FF3811] flex items-center justify-center text-white text-[20px] font-bold w-[53px]  h-[53px] rounded-full border-8 border-[#FF38111A]">03</h3>
                                <h3 className="text-[20px] font-bold text-[#151515]">STEP THREE</h3>
                                <p className="text-[#737373]">Finalize your booking and confirm your appointment.</p>
                            </div>
                        </div>
                    </div>
                    <a className="relative" href="https://www.facebook.com/share/v/15jtdLErtb/" target="_blank" rel="noopener noreferrer">
                        <img className="rounded-xl" src={img2} alt="" />
                        <FaRegPlayCircle className="absolute bottom-0 right-0 text-8xl text-[#FF381166]" />
                    </a>
                </div>


                <div className="w-4/12 flex flex-col space-y-7">
                    <div className="bg-[#F3F3F3] flex flex-col space-y-4  p-10 rounded-xl">
                        <h3 className="text-[25px] text-black font-bold">Services</h3>
                        {titles.map((tit, index) => <p key={index} className={`font-semibold rounded-md p-4 flex items-center justify-between ${tit == title ? "bg-[#FF3811] text-white" : "bg-white text-black"}`}><span>{tit}</span> <FaArrowRight />
                        </p>)}
                    </div>
                    <div className="text-white bg-[#151515] rounded-xl p-8">
                        <h3 className="text-[25px] font-bold mb-5">Download</h3>
                        <div className="flex mb-5 items-center justify-between font-semibold">
                            <div className="flex items-center space-x-2">
                            <IoDocumentTextOutline className="text-2xl" />
                            <p className="flex flex-col leading-tight"><span className="text-[18px] ">Our Brochure</span>
                                <span className="text-[14px] font-normal">Download</span></p>
                            </div>
                            <div className="bg-[#FF3811] flex items-center justify-center rounded-lg w-10 h-10">
                                <FaArrowRight className="text-2xl" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between font-semibold">
                            <div className="flex items-center space-x-2"><IoDocumentTextOutline className="text-2xl" />
                                <p className="flex flex-col leading-tight"><span className="text-[18px] ">Company Details</span>
                                    <span className="text-[14px] font-normal">Download</span></p></div>
                            <div className="bg-[#FF3811] flex items-center justify-center rounded-lg w-10 h-10">
                                <FaArrowRight className="text-2xl" />
                            </div>
                        </div>

                    </div>

                    <div className="bg-[#151515] rounded-xl flex flex-col p-12 pb-20 space-y-7 items-center">
                        <h3 className="text-3xl font-bold text-white ">Car Doctor</h3>
                        <p className="text-[20px] font-bold text-center">Need Help? We Are Here <br />
                        To Help You</p>
                        <div className="bg-white relative flex flex-col px-12 py-5 rounded-xl items-center">
                            <p className="text-[20px] text-black font-bold text-center"><span className="text-[#FF3811]">Car Doctor </span>Special</p>
                            <p className="text-[#737373] font-bold text-base">Save up to <span className="text-[#FF3811]">60% off</span></p>
                            <button className="bg-[#FF3811] absolute -bottom-8 font-semibold text-white px-10 py-3 rounded-md">GET A QUOTE</button>
                        </div>
                    </div>
                    <h3 className="text-[#151515] text-3xl font-bold">Price ${price}</h3>
                    <Link to={`/booking/${_id}`}><button className="bg-[#FF3811] text-white w-full font-semibold px-6 py-4 rounded-lg">Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;