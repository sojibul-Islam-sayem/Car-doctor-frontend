import React from 'react';
import Banner from '../../../Components/Banner/Banner';
import About from '../../../Components/About/About';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
           <Banner></Banner>
           <About></About>
        </div>
    );
};

export default Home;