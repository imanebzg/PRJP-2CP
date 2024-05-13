import React, { useState, useEffect } from 'react';
import './feedback.css'; // corrected import

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentFeedback, setCurrentFeedback] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showPreviousFeedbacks, setShowPreviousFeedbacks] = useState(false);

  useEffect(() => {
    const storedFeedbacks = localStorage.getItem('feedbacks');
    if (storedFeedbacks) {
      setFeedbacks(JSON.parse(storedFeedbacks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleInputChange = (event) => {
    setCurrentFeedback(event.target.value);
  };

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handleAddFeedback = () => {
    if (currentFeedback.trim() !== '' && userName.trim() !== '' && userEmail.trim() !== '') {
      const newFeedback = {
        name: userName,
        email: userEmail,
        feedback: currentFeedback
      };
      setFeedbacks([newFeedback, ...feedbacks]); // Adding new feedback at the beginning
      setCurrentFeedback('');
      setUserName('');
      setUserEmail('');
    }
  };

  const toggleFeedbackView = () => {
    setShowPreviousFeedbacks(!showPreviousFeedbacks);
  };

  return (

      <div className="feedback-container">
        <div className='title'><p>Avis</p></div>
<div className='contenue'>
      <div className="button-container">
        <button className='b1' onClick={toggleFeedbackView}>
          {showPreviousFeedbacks ? 'Masquer les retours précédents' : 'Afficher les retours précédents'}
        </button>
        <button className='b1' onClick={() => setShowPreviousFeedbacks(false)}>Écrire un commentaire</button>
      </div> 
      {!showPreviousFeedbacks && (
        <div>
          <input
            type="text"
            placeholder="votre Nom"
            value={userName}
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="votre Email"
            value={userEmail}
            onChange={handleEmailChange}
          />
          <input
            placeholder="Veuillez partager vos commentaires ici..."
            value={currentFeedback}
            onChange={handleInputChange}
          ></input>
          <button className='b2' onClick={handleAddFeedback}>Soumettre un commentaire</button>
        </div>
      )}
      {showPreviousFeedbacks && (
        <div>
          <h3>Retours précédents :</h3>
          {feedbacks.map((feedback, index) => (
            <div className="feedback-card" key={index}>
              <p className='fb-con'>Nom: {feedback.name}</p>
              <p className='fb-con'>Retours: {feedback.feedback}</p>
            </div>
          ))}
        </div>
      )}
    </div></div>
  );
};

export default Feedback;
