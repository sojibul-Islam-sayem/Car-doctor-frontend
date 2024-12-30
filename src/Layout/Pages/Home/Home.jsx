import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import About from '../../../Components/About/About';
import Services from '../../../Components/Services/Services';
import DoctorPlaceDetail from '../../../Components/DoctorPlaceDetail/DoctorPlaceDetail';
import Products from '../../../Components/Products/Products';
import MechanicalTeam from '../../../Components/MechanicalTeam/MechanicalTeam';
import WebExpert from '../../../Components/WebExpert/WebExpert';
import Features from '../../../Components/Features/Features';
import Testimonial from '../../../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <DoctorPlaceDetail></DoctorPlaceDetail>
            <Products></Products>
            <MechanicalTeam></MechanicalTeam>
            <Features></Features>
            <WebExpert></WebExpert>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;