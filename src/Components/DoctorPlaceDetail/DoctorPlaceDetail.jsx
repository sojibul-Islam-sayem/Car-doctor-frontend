import { MdDateRange } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


const DoctorPlaceDetail = () => {
    return (
        <div className="bg-[#151515] max-w-7xl rounded-xl flex justify-between mx-auto px-16 py-24">
            <div className="flex items-center space-x-4">
                <MdDateRange className="text-5xl" />
                <div>
                    <p className="font-medium text-white">We are open monday-friday</p>
                    <h3 className="font-bold text-[25px] text-white">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <FaPhoneAlt  className="text-5xl" />
                <div>
                    <p className="font-medium text-white">Have a question?</p>
                    <h3 className="font-bold text-[25px] text-white">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <FaLocationDot  className="text-5xl" />
                <div>
                    <p className="font-medium text-white">Need a repair? our address</p>
                    <h3 className="font-bold text-[25px] text-white">Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default DoctorPlaceDetail;