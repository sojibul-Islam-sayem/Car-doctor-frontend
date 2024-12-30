import { FaStar } from "react-icons/fa";
import img1 from "../../assets/images/products/1.png"
import img2 from "../../assets/images/products/2.png"
import img3 from "../../assets/images/products/3.png"
import img4 from "../../assets/images/products/4.png"
import img5 from "../../assets/images/products/5.png"
import img6 from "../../assets/images/products/6.png"



const Products = () => {
    return (
        <div>
            <div className="flex flex-col space-y-3 items-center justify-center mb-6">
                <h3 className="text-[20px] font-bold text-[#FF3811]">Popular Products</h3>
                <h1 className="text-5xl font-bold text-black">Browse Our Products</h1>
                <p className="text-[#737373] text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-x-[100px]">
                <div className="w-[360px] border border-[#E8E8E8] rounded-xl flex flex-col space-y-2 items-center  justify-center p-6">
                    <div className="bg-[#F3F3F3] rounded-xl px-20 py-4 mb-6">
                        <img className="w-[155px] mx-auto" src={img6} alt="" />
                    </div>
                    <div className="flex text-[#FF912C]">{[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}</div>
                    <h3 className="text-[25px] font-bold text-[#444444]">Car Engine Plug</h3>
                    <p className="text-[20px] font-semibold text-[#FF3811]">$25.00</p>
                </div>
                <div className="w-[360px] border border-[#E8E8E8] rounded-xl flex flex-col space-y-2 items-center  justify-center p-6">
                    <div className="bg-[#F3F3F3] rounded-xl px-20 py-4 mb-6">
                        <img className="w-[155px] mx-auto" src={img3} alt="" />
                    </div>
                    <div className="flex text-[#FF912C]">{[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}</div>
                    <h3 className="text-[25px] font-bold text-[#444444]">Car Air Filter</h3>
                    <p className="text-[20px] font-semibold text-[#FF3811]">$30.00</p>
                </div>
                <div className="w-[360px] border border-[#E8E8E8] rounded-xl flex flex-col space-y-2 items-center  justify-center p-6">
                    <div className="bg-[#F3F3F3] rounded-xl px-20 py-4 mb-6">
                        <img className="w-[155px] mx-auto" src={img1} alt="" />
                    </div>
                    <div className="flex text-[#FF912C]">{[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}</div>
                    <h3 className="text-[25px] font-bold text-[#444444]">Cool Break Pad</h3>
                    <p className="text-[20px] font-semibold text-[#FF3811]">$15.00</p>
                </div>
                <div className="w-[360px] border border-[#E8E8E8] rounded-xl flex flex-col space-y-2 items-center  justify-center p-6">
                    <div className="bg-[#F3F3F3] rounded-xl px-20 py-4 mb-6">
                        <img className="w-[155px] mx-auto" src={img2} alt="" />
                    </div>
                    <div className="flex text-[#FF912C]">{[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}</div>
                    <h3 className="text-[25px] font-bold text-[#444444]">Suspenssion</h3>
                    <p className="text-[20px] font-semibold text-[#FF3811]">$22.00</p>
                </div>
                <div className="w-[360px] border border-[#E8E8E8] rounded-xl flex flex-col space-y-2 items-center  justify-center p-6">
                    <div className="bg-[#F3F3F3] rounded-xl px-20 py-4 mb-6">
                        <img className="w-[155px] mx-auto" src={img5} alt="" />
                    </div>
                    <div className="flex text-[#FF912C]">{[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}</div>
                    <h3 className="text-[25px] font-bold text-[#444444]">Sports Tayer</h3>
                    <p className="text-[20px] font-semibold text-[#FF3811]">$18.00</p>
                </div>
                <div className="w-[360px] border border-[#E8E8E8] rounded-xl flex flex-col space-y-2 items-center  justify-center p-6">
                    <div className="bg-[#F3F3F3] rounded-xl px-20 py-4 mb-6">
                        <img className="w-[155px] mx-auto" src={img4} alt="" />
                    </div>
                    <div className="flex text-[#FF912C]">{[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}</div>
                    <h3 className="text-[25px] font-bold text-[#444444]">LED Battery</h3>
                    <p className="text-[20px] font-semibold text-[#FF3811]">$20.00</p>
                </div>
            </div>
            <div className='flex justify-center mt-5 mb-9'>
                <button className="border px-3 py-2 rounded text-[#FF3811] border-[#FF3811]">
                    More Products
                </button>
            </div>
        </div>
    );
};

export default Products;