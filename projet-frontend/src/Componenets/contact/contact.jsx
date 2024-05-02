import React from 'react';
import './contact.css';

const contact = () => {
  return (
    <div class="contact" id="contact">
<h2 className='title'>Nous contacter</h2>

<div className="contact-us-container">
  
  <div className="contact-info">
    <h2>Coordonnées de contact</h2>
    <ul>
      <li><span className="icon">📞</span> <strong>Téléphone:</strong> +213 7 935569962</li>
      <li><span className="icon">✉️</span> <strong>Email:</strong> md_bedjghit@esi.dz</li>
      <li><span className="icon">📍</span> <strong>Addresse:</strong> Ecole Nationale Supérieure d'Informatique (ESI ex.INI), <br/> Alger, Oued Smar 16309</li>
    </ul>
  </div>
  
  <div className="contact-form-container">
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name"><strong>Nom:</strong></label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="form-group">
        <label htmlFor="email"><strong>Email:</strong></label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="form-group-message">
        <label htmlFor="message"><strong>Message:</strong></label>
        <input id="message" name="message" rows="4"></input>
      </div>
      <button className = "boutton2" type="submit">Envoyer</button>
    </form>
  </div>
</div>
    </div>
    
  );
};

export default contact;
