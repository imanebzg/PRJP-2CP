import React, { useState, useEffect } from 'react';
import './contact.css';

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [currentContact, setCurrentContact] = useState('');


  const handleContact = async () => {
      if (currentContact.trim() !== '' && userName.trim() !== '' && userEmail.trim() !== '') {
        const newContact = {
          name: userName,
          email: userEmail,
          contact: currentContact
      };
      try {
        const response = await fetch('http://localhost:3001/sendings/send-contact-us', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newContact),
        });
        if (response.ok) {
          console.log('Contact email sent successfully.');
        } else {
          console.error('Failed to send contact email.');
        }
      } catch (error) {
        console.error('Error sending contact email:', error);
      }
    }
  };

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
      <button className = "boutton2" onClick={handleContact} type="submit">Envoyer</button>
    </form>
  </div>
</div>
    </div>
    
  );
};

export default Contact;
