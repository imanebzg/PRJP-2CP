import React, { useState, useEffect } from 'react';
import './contact.css';

  const Contact = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [sendingError, setSendingError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [sendMessage, setSendMessage] = useState('');
    const [sendFlag, setSendFlag] = useState(false);
  
  
    const handleContact = async () => {
        if (userName.trim() !== '' && userEmail.trim() !== '') {
        try {
          const response = await fetch('http://localhost:3001/sendings/send-contact-us', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: userName.trim(), email: userEmail.trim(), message: userMessage })
          });

          const data = await response.json();
          if (response.ok) {
            console.log('Contact email sent successfully.');
            setSendFlag(true);
            setSendMessage(data.message);
            setUserName('');
            setUserEmail('');
            setUserMessage('');
          } else {
            console.error('Failed to send contact email.');
            setSendingError(true); 
            setErrorMessage(response.error);
          }
        } catch (error) {
          console.error('Error sending contact email:', error);
          setSendingError(true); 
          setErrorMessage(error);
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
              <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email"><strong>Email:</strong></label>
              <input type="email" id="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            </div>
            <div className="form-group-message">
              <label htmlFor="message"><strong>Message:</strong></label>
              <textarea id="userMessage"  value={userMessage} onChange={(e) => setUserMessage(e.target.value)} ></textarea>
            </div>
            <button className="boutton2" type="button" onClick={handleContact}>Envoyer</button>
            {sendFlag && <p style={{ color: 'green' }}>{sendMessage}</p>} 
            {sendingError && <p style={{ color: 'red' }}>{errorMessage}</p>} 
          </form>
        </div>
</div>
    </div>
    
  );
};

export default Contact;