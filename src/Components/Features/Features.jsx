import img1 from "../../../src/assets/icons/group.svg"
import img2 from "../../../src/assets/icons/check.svg"
import img3 from "../../../src/assets/icons/deliveryt.svg"
import img4 from "../../../src/assets/icons/person.svg"
import img5 from "../../../src/assets/icons/Wrench.svg"
import { MdOutlineWatchLater } from "react-icons/md";




const Features = () => {
    return (
        <div>
            <div className="flex flex-col space-y-3 items-center justify-center mb-6">
                <h3 className="text-[20px] font-bold text-[#FF3811]">Core Features</h3>
                <h1 className="text-5xl font-bold text-black">Why Choose Us</h1>
                <p className="text-[#737373] text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col justify-center items-center rounded-xl border border-[#E8E8E8] p-7">
                    <img src={img1} alt="" />
                    <p className="font-bold text-black text-[18px]">Expert Team</p>
                </div>
                <div className="flex flex-col justify-center bg-[#FF3811] text-white items-center rounded-xl border border-[#E8E8E8] p-7">
                    <MdOutlineWatchLater className="text-5xl" />
                    <p className="font-bold text-[18px]">Timely Delivery</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl border border-[#E8E8E8] p-7">
                    <img src={img4} alt="" />
                    <p className="font-bold text-black text-[18px]">Expert Team</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl border border-[#E8E8E8] p-7">
                    <img src={img5} alt="" />
                    <p className="font-bold text-black text-[18px]">Best Equipment</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl border border-[#E8E8E8] p-7">
                    <img src={img2} alt="" />
                    <p className="font-bold text-black text-[18px]">100% Guranty</p>
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl border border-[#E8E8E8] p-7">
                    <img src={img3} alt="" />
                    <p className="font-bold text-black text-[18px]">Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;