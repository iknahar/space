import React from 'react';
import rightImg from '../img/heroright.png';
import r8 from '../img/r8.png'
import Nav from './Nav';

const Hero = () => {
  return (
    <div className="heroDiv">
        <Nav/>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 heroLeft">
          <div className='top d-inline'>
              <img className="icon" src={r8} alt="" />
              <p className='d-inline ptop'>Welcome to Stella</p>
          </div>
            <h1 className="heroHeader">SPACE FOR EVERYONE</h1>
            <p className="heroPara">
              At PIAP Space, we believe that we can <br /> make Space and Earth
              cleaner, engineering, <br /> and delivering top-quality robotics{' '}
              <br />
              solutions.
            </p>
            <button className='buttonHero'>GET START</button>
          </div>
          <div className="col-md-7">
            {' '}
            <img className="rightImg" src={rightImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
