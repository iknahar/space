import React from 'react';

const DiscCard = (props) => {
    return (
<div class="card text-center">
  <div className="imgDiv">
  <img src={props.img} class="card-img-top mt-5 mb-3" alt="..."/>
  </div>
    <h5 class='cardTitle mb-4'>{props.title}</h5>
    <p class="card-text">At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.</p>
  </div>
    );
};

export default DiscCard;