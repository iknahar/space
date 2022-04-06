import React from 'react';
import logo from '../img/logo.png'
import fb from '../img/fb.png'
import ld from '../img/ld.png'
import tw from '../img/tw.png'

const Footer = () => {
  return (
    <div className="FooterDiv">
      <div className="container">
        <h1 className="subHeader text-center">Newsletter</h1>
        <div class="input-group mb-3 justify-content-center py-3">
          <input
            type="email"
            placeholder="Email Address"
            className='inputStyle'
          />
          <button
            class="btn outline"
            type="button"
          >
            Subscribe
          </button>
        </div>
        <div className="lastRow d-flex justify-content-between pt-5 pb-3">

                <img src={logo} alt="" />
                <p className='footerP'>Space 2020, All rights reserved.</p>
                <div className="social">
                <img src={tw} style={{ height: "17px", marginRight: "10px" }} alt="" />
                <img src={fb} style={{ height: "17px" , marginRight: "10px"}} alt="" />
                <img src={ld} style={{ height: "17px" }} alt="" />
                </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
