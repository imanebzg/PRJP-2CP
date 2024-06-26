import React from 'react';
import './home.css'; // Assuming your styles are in a separate file


const Home = () => {
  const authToken = localStorage.getItem('authToken');
  const handelsend  = () => {
  
    window.location.href = '/Info_entreprise'; 
    // You may also want to redirect the user to the login page or another appropriate page
  };


  const handlesecond = () => {
   
    window.location.href = '/hist-page'; 
    // You may also want to redirect the user to the login page or another appropriate page
  };
  return (
    <div>
    <div className="intro-text" id='home'>
      <h1>Calculateur de bilan de carbone</h1>
      <br/>
      <p>  Calculez le bilan carbone de votre entreprise  </p>
      <br />
     
  

      {authToken ? (
              <a  onClick={handelsend}> 
                <button className="btn2" style={{ margin: '0.4rem' }}>Mon compte</button> 
              </a>
            ) : (
              <a href="#sign-in" > 
              <button className="btn2" style={{ margin: '0.4rem' }}>Mon compte</button>
              </a>
            )}


               {authToken ? (
              <a  onClick={handlesecond} > 
                 <button className="btn1">Commencer</button>
              </a>
            ) : (
              <a href="#sign-in" > 
         <button className="btn1">Commencer</button>
              </a>
            )} 
     
      <br/>
      
    </div>

    </div>  
  );
};

export default Home;
