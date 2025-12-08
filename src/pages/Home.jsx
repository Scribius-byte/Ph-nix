import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Exploits from '../components/Exploits';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Story />
            <Exploits />
        </div>
    );
};

export default Home;
