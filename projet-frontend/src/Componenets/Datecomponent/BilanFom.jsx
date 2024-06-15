// BilanForm.js
import React, { useState } from 'react';
import './Blianform.css'
import { FaExclamationCircle } from 'react-icons/fa'; // Importer l'icône d'avertissement de Font Awesome


function BilanForm({ onSaveBilan }) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSaveBilan = () => {
      localStorage.setItem('start_date',startDate)
      localStorage.setItem('end_date',endDate)
    };
  
    const handleSecond = () => {
      window.location.href = '/second-page'; 
    };
  
    const handleBoth = () => {
        // Vérifier si les champs de date de début et de fin sont remplis
        if (startDate && endDate) {
          // Si les deux champs sont remplis, appeler les fonctions handleSaveBilan et handleSecond
          handleSaveBilan();
          handleSecond();
          setErrorMessage('');
        } else {
          // Sinon, afficher un message d'erreur ou effectuer une autre action appropriée
          setErrorMessage('Veuillez remplir les champs de date de début et de fin!');
        }
      };
  
    return (
      <div className="bilan-form">
        <div className='title'>
          <p>Créer un Bilan</p>
        </div>
        <div className='contnuee'>
          <div className="date-container">
            <label htmlFor="start-date">Date de début :</label>
            <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <label htmlFor="end-date">Date de fin:</label>
            <input type="date" id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>
          <div className="button-container">
            <button className="btn" onClick={handleBoth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" className="svg-icon">
                <g strokeWidth="2" strokeLinecap="round" stroke="#fff">
                  <rect y="5" x="4" width="16" rx="2" height="16"></rect>
                  <path d="m8 3v4"></path>
                  <path d="m16 3v4"></path>
                  <path d="m4 11h16"></path>
                </g>
              </svg>
              <div>Créer le bilan et commencer les calculs</div>
              <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="white" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="white" d="M4 12.0601H14.17"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="white" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
              </svg>

            </button>
        
          </div>             {errorMessage && (
            <div className="error-container">
              <FaExclamationCircle className="error-icon" /> 
              <p className="error-message">{errorMessage}</p> 
            </div>
          )}

        </div>
      </div>
    );
  }
  
  export default BilanForm;
  