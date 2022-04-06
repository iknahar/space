import React from 'react';
import logo from '../img/logo.png'

const Nav = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
              <img src={logo} alt="" />
          </a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" style={{color: '#8C21ED'}} href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Story
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blog
                </a>
              </li>
                  <button className='btn btn-outline-primary outline'>Contact Us</button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
