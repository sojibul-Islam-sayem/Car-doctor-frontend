import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Signup from "../Layout/Pages/Singup/Signup";
import Checkout from "../Layout/Pages/Checkout/Checkout";

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
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
]);

export default router;