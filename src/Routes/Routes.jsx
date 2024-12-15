import Main from "../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";

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
                path:'/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;