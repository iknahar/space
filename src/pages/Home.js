import React from 'react';
import Discover from '../components/Discover';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Discover/>
            <Footer/>
        </div>
    );
};

export default Home;