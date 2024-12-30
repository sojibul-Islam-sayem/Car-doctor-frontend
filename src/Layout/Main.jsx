import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Nabvar from '../Components/Navbar/Nabvar';

const Main = () => {
    return (
        <div className='bg-white font-inter'>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;