import person1 from "../../assets/images/team/2149915895.jpg"
import person2 from "../../assets/images/team/2149915931.jpg"
import quotes from "../../assets/icons/quote.svg"
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div>
            <div className="flex flex-col space-y-3 items-center justify-center mb-6 mt-14">
                <h3 className="text-[20px] font-bold text-[#FF3811]">Testimonial</h3>
                <h1 className="text-5xl font-bold text-black">What Customer Says</h1>
                <p className="text-[#737373] text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="flex justify-between space-x-3 mb-8">
                <div className="border w-1/2 p-12 rounded-xl">
                    <div className="flex justify-between mb-5">
                        <div className="flex space-x-3">
                            <img className="w-16 h-16 rounded-full" src={person1} alt="" />
                            <div>
                                <h3 className="text-[25px] text-[#444444] font-bold ">Awlad Hossain</h3>
                                <p className="font-bold text-[20px] text-[#737373]">Businessman</p>
                            </div>
                        </div>
                        <img className="w-14 h-14" src={quotes} alt="" />
                    </div>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <div className="flex space-x-1 mt-5 text-[#FF912C]">{[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}</div>
                </div>
                <div className="border p-12 w-1/2  rounded-xl">
                    <div className="flex justify-between mb-5">
                        <div className="flex space-x-3">
                            <img className="w-16 h-16 rounded-full" src={person2} alt="" />
                            <div>
                                <h3 className="text-[25px] text-[#444444] font-bold ">Awlad Hossain</h3>
                                <p className="font-bold text-[20px] text-[#737373]">Businessman</p>
                            </div>
                        </div>
                        <img className="w-14 h-14" src={quotes} alt="" />
                    </div>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <div className="flex space-x-1 mt-5 text-[#FF912C]">{[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}</div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;