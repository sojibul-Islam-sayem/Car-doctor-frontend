import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProviders";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";


const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    // const [loading, setLoading] = useState(true);
    const { user, loading } = useContext(AuthContext);


    const url = `http://localhost:5000/bookings?email=${user?.email}`;


    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookings(res.data)
            })
    }, [])



    return (
        <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
                <table className="table-auto  table border-separate rounded-none bg-white font-raleway text-black '">
                    <thead>

                    </thead>
                    <tbody>

                        {bookings.map(booking => <tr key={booking._id} className="font-bold text-[20px] text-[#2D2D2D]">
                            <th>
                                <label>
                                    <RxCross2 className="h-10 cursor-pointer p-2 text-white w-10 rounded-full bg-[#2D2D2D]" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="h-36 w-36 rounded-xl">
                                            <img src={booking.img} />
                                        </div>
                                    </div>
                                    <div>
                                        {booking.title}
                                    </div>
                                </div>
                            </td>
                            <td>
                                {booking.amount}
                            </td>
                            <td>{booking.date}</td>
                            <th>
                                <button className="bg-[#FF3811] px-6 py-4 text-white rounded-lg ">Pending</button>
                            </th>
                        </tr>)}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Bookings;
