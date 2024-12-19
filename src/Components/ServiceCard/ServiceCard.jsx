import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service
    return (
        <div className="w-96 border-[#E8E8E8] border rounded-lg p-6 drop-shadow-xl">
            <img className="rounded-lg" src={img} />
            <div className="">
                <h2 className="text-[25px] font-bold text-black">{title}</h2>
                <div className="flex items-center justify-between">
                    <p className="text-[#FF3811] text-[20px] font-semibold">Price :${price}</p>
                    <Link to={`/checkout/${_id}`}><button className="bg-[#FF3811] text-sm text-white py-1 px-4 font-semibold rounded-lg">Process</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;