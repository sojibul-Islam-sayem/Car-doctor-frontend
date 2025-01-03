import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Singup/Signup";
import Checkout from "../Layout/Pages/Checkout/Checkout";
import Booking from "../Layout/Pages/Booking/Booking";
import Bookings from "../Layout/Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Layout/Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'checkout/:id',
                element:<Checkout></Checkout>,
                loader: ({params})=> fetch(`https://car-doctor-backend-phi.vercel.app/services/${params.id}`)
            },
            {
                path:'booking/:id',
                element:<PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({params})=> fetch(`https://car-doctor-backend-phi.vercel.app/services/${params.id}`)
            },
            {
                path:'bookings',
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path:'aboutus',
                element:<AboutUs></AboutUs>
            }
        ]
    },
]);

export default router;