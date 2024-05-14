import React from 'react';
import './footer.css'; // Assuming your styles are in a separate file


const Footer = () => {
  return (
    <div className="footer">
    
          <div className="heading">
            <h2>C2OO | Carbon Operation options</h2>
        

            <div className="buttons-container"><a href="#sign-in"className="no-underline">
                <div className="button">
                  <span className="text">S'identifier</span> <span class="arrow"></span>
                </div></a >
                <div className="button">
                  <span className="text "mail>Contacter</span> <span class="arrow"></span>
                </div>
              </div>
              
          </div>
          <br/><br/>
          <div className="contenue">
            <div className="Navigation">
              <h4>Navigation</h4>
              <p><a href="#home">Accueil</a></p>
              <p><a href="#about">À propos</a></p>
              <p><a href="#why">Pourquoi CAS?</a></p>
              <p><a href="#learn">Plus de details</a></p>
              <p><a href="#blog">Blogs</a></p>
            </div>
            <div className="details">
                <h4 className="What We Do">Que faisons-nous</h4>
                <p>
                Calculateur d'empreinte carbone
                </p>
              </div>
            <div className="Support">
                <h4>Support</h4>
                <p><a href="#">Centre d'aide</a></p>
                <p><a href="#">FAQ</a></p>
                <p><a href="#contact">Contact</a></p>
                <p><a href="#feedback">Avis</a></p>
              </div>
              <div className="Legal">
                <h4>Legal</h4>
                <p><a href="#">Informations générales</a></p>
                <p><a href="#">Politique de confidentialité</a></p>
                <p><a href="#">Conditions d'utilisation</a></p>
              </div>
            <div className="social-media">
              <h4>Réseaux</h4>
              <p>
                <a href="#"
                  ><i className="fab fa-linkedin"></i> Linkedin</a>
              </p>
              <p>
                <a href="#"
                  ><i className="fab fa-twitter"></i> Twitter</a >

              </p>
              <p>
                <a href="#"
                  ><i className="fab fa-github"></i> Github</a >

                             </p>
              <p>
                <a href="#"
                  ><i className="fab fa-facebook"></i> Facebook</a >
              </p>
              <p>
                <a href="#"
                  ><i className="fab fa-instagram"></i> Instagram</a >
              </p>
            </div>
           
          </div>
          <footer>
            <hr />
             © 2024 cas. Tous droits réservés.
          </footer>
        
    </div>
    
  );
};

export default Footer;
