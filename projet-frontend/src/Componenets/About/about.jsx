import React from 'react';
import './about.css';  
import personIcon from '@material-design-icons/svg/filled/person.svg';
import phoneIcon from '@material-design-icons/svg/filled/phone.svg';
import targetIcon from '@material-design-icons/svg/filled/adjust.svg';

const About = () => {
  return (
    <div className="about" id='about'>
     
     <div class="content">
    <h1 >À propos de nous</h1>
    </div>
      <div className="services">
      <section class="grid-services">

      <div class="grid-group-services">
        <div class="grid-group-services-box">
           <div class="classe-icon" >
          <img src={targetIcon } alt="target icon" class="icons"  />
          </div>
          <div class="services-description">
            <h3>Notre mission?</h3>
            <p>Permettre aux individus et aux organisations de prendre des décisions informées.</p>
          </div>
        </div>
      </div>

      <div class="grid-group-services">
        <div class="grid-group-services-box">
          <div class="classe-icon">
       
      <img src={personIcon } alt="person icon" class="icons" />
        </div>
          <div class="services-description">
            <h3>Qui sommes-nous?</h3>
            <p>Des étudiants d'informatique qui s'engagent à aider les entreprises à mesurer leur bilan de carbone.</p>
          </div>
        </div>
      </div>

      <div class="grid-group-services">
        <div class="grid-group-services-box">
           <div class="classe-icon">
          <img src={phoneIcon } alt="phone icon" class="icons" />
              </div>
          <div class="services-description">
            <h3>Contact</h3>
            <p>N'hésitez pas à contacter notre équipe pour toute question ou demande d'assistance.</p>
          </div>
            </div>
          </div>
         </section>
       </div>
      <div class="line"></div>


    </div>
  );
};

export default About;