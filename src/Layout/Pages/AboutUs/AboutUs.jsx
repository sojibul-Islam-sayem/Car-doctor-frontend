import React from 'react';
import About from '../../../Components/About/About';
import MechanicalTeam from '../../../Components/MechanicalTeam/MechanicalTeam';
import WebExpert from '../../../Components/WebExpert/WebExpert';
import DoctorPlaceDetail from '../../../Components/DoctorPlaceDetail/DoctorPlaceDetail';
import Testimonial from '../../../Components/Testimonial/Testimonial';

const AboutUs = () => {
    return (
        <div className='max-w-7xl mx-auto mb-8'>
            <About></About>
            <MechanicalTeam></MechanicalTeam>
            <WebExpert></WebExpert>
            <Testimonial></Testimonial>
            <DoctorPlaceDetail></DoctorPlaceDetail>
        </div>
    );
};

export default AboutUs;