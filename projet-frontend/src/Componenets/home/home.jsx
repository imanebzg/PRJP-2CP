import React from 'react';
import './home.css'; // Assuming your styles are in a separate file


const Home = () => {
  return (
    <div>
    <div className="intro-text" id='home'>
      <h1>Calculateur du bilan de carbone</h1>
      <br/>
      <p>  Calculez du bilan carbone de votre entreprise  </p>
      <br />
     
      <button className="btn2" style={{ margin: '0.3125rem' }}>Demo</button> <a href="#sign-in">
      <button className="btn1">Commencer</button> </a>
      <br/>
      
    </div>

    </div>  
  );
};

export default Home;
