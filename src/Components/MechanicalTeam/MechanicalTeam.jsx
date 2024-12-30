import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import img1 from "../../assets/images/team/1.jpg"
import img2 from "../../assets/images/team/2.jpg"
import img3 from "../../assets/images/team/3.jpg"



const MechanicalTeam = () => {
    return (
        <div>
            <div className="flex flex-col space-y-3 items-center justify-center mb-6">
                <h3 className="text-[20px] font-bold text-[#FF3811]">Mechanical Team</h3>
                <h1 className="text-5xl font-bold text-black">Meet Our Team</h1>
                <p className="text-[#737373] text-center">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="flex justify-between">
                <div  className="w-[360px] border border-[#E8E8E8] rounded-xl flex flex-col  items-center  justify-center p-6">
                    <img className="rounded-xl" src={img1} alt="" />
                    <h3 className="text-[25px] font-bold text-[#444444]">Car Engine Plug</h3>
                    <p className="text-[20px] text-[#737373] font-semibold mb-2">Engine Expert</p>
                    <div className="flex text-2xl text-[#1d0b028c]">
                        <FaFacebook />
                        <AiFillTwitterCircle />
                        <AiFillInstagram />
                        <FaLinkedin />
                    </div>
                </div>
                <div  className="w-[360px] border border-[#E8E8E8] rounded-xl flex flex-col  items-center  justify-center p-6">
                    <img className="rounded-xl" src={img2} alt="" />
                    <h3 className="text-[25px] font-bold text-[#444444]">Car Engine Plug</h3>
                    <p className="text-[20px] text-[#737373] font-semibold mb-2">Engine Expert</p>
                    <div className="flex text-2xl text-[#1d0b028c]">
                        <FaFacebook />
                        <AiFillTwitterCircle />
                        <AiFillInstagram />
                        <FaLinkedin />
                    </div>
                </div>
                <div  className="w-[360px] border border-[#E8E8E8] rounded-xl flex flex-col  items-center  justify-center p-6">
                    <img className="rounded-xl" src={img3} alt="" />
                    <h3 className="text-[25px] font-bold text-[#444444]">Car Engine Plug</h3>
                    <p className="text-[20px] text-[#737373] font-semibold mb-2">Engine Expert</p>
                    <div className="flex text-2xl text-[#1d0b028c]">
                        <FaFacebook />
                        <AiFillTwitterCircle />
                        <AiFillInstagram />
                        <FaLinkedin />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MechanicalTeam;