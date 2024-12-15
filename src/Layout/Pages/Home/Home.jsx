import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import About from '../../../Components/About/About';
import Services from '../../../Components/Services/Services';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <Banner></Banner>
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;