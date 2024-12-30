import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import About from '../../../Components/About/About';
import Services from '../../../Components/Services/Services';
import DoctorPlaceDetail from '../../../Components/DoctorPlaceDetail/DoctorPlaceDetail';
import Products from '../../../Components/Products/Products';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <DoctorPlaceDetail></DoctorPlaceDetail>
           <Products></Products>
        </div>
    );
};

export default Home;