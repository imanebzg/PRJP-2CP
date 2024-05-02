import React from 'react';
import './navbar.css'; 
import { Link } from 'react-router-dom';

import globe from './img/globe.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>CAS</h1>
      </div>
      <div className="right">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkBtn">
          <i className="fa fa-bars"></i>
        </label>
        <ul className="list">
          <li><a href="#home">Accueil</a></li>
          <li><a href="#why">Pourquoi ?</a></li>
          <li><a href="#more">Ressources</a></li>
          <li><a href='#about' >À propos</a></li>
          <li><a href="#contact">Contact</a></li>
          <div className="language">
            <div className="language-selected">
              <img src={globe}  alt="earth" className="navbar-logo" />
            </div>
            <ul className="navbar-lang-list">
              <li>
               
                <a href="#" className="fr">Français</a>
              </li>
              <br />
              <li>
               
                <a href="#" className="en">English</a>
              </li>
            </ul>
          </div>
          <li>  <a href="#sign-in" className="no-underline" > 
          <div className="button1">
 
    <span className="text start now">Commencer</span>
    <span className="arrow1"></span>

</div>  </a>
          </li>
        </ul>
      </div>
    </div>
  );
  
};

export default Navbar;
