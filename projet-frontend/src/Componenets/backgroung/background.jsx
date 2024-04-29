import React from 'react';
import './background.css'; // Assuming your styles are in a separate file
import vid1 from './vid/r.mp4';



const  Video = () => {
  return (
    <div className="intro">
    <div class="flou-bas"></div>
    <div class="couleur-video"></div>
      <video autoPlay loop muted>
    <source src={vid1} type="video/mp4" />
   </video>
    </div>
     
  );
};

export default Video;
