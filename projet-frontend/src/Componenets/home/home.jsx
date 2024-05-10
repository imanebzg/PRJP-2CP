import React from 'react';
import './home.css'; // Assuming your styles are in a separate file


const Home = () => {
  const authToken = localStorage.getItem('authToken');
  const handelsend  = () => {
  
    window.location.href = '/first-page'; 
    // You may also want to redirect the user to the login page or another appropriate page
  };


  const handlesecond = () => {
   
    window.location.href = '/second-page'; 
    // You may also want to redirect the user to the login page or another appropriate page
  };
  return (
    <div>
    <div className="intro-text" id='home'>
      <h1>Calculateur du bilan de carbone</h1>
      <br/>
      <p>  Calculez du bilan carbone de votre entreprise  </p>
      <br />
     
  

      {authToken ? (
              <a  onClick={handelsend} className="no-underline"> 
                <button className="btn2" style={{ margin: '0.3125rem' }}>Mon compte</button> 
              </a>
            ) : (
              <a href="#sign-in" className="no-underline"> 
              <button className="btn2" style={{ margin: '0.3125rem' }}>Mon compte</button>
              </a>
            )}


               {authToken ? (
              <a  onClick={handlesecond} className="no-underline"> 
                 <button className="btn1">Commencer</button>
              </a>
            ) : (
              <a href="#sign-in" className="no-underline"> 
         <button className="btn1">Commencer</button>
              </a>
            )} 
     
      <br/>
      
    </div>

    </div>  
  );
};

export default Home;
