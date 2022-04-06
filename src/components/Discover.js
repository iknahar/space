import React from 'react';
import DiscCard from './DiscCard';
import d1 from '../img/d1.png';
import d2 from '../img/d2.png';
import d3 from '../img/d3.png';

const Discover = () => {
    return (
        <div className=' disDiv'>
            <div className='container discover'>
            <h1 className='subHeader text-center'>Discover Univerce</h1>
            <div className="row justify-content-between">
            <DiscCard img={d1} title="Mission Bongo"/>
            <DiscCard img={d2} title="Mission Bongo"/>
            <DiscCard img={d3} title="Mission Bongo"/>
            </div>
            </div>
        </div>
    );
};

export default Discover;