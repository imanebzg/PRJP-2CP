// BilanForm.js
import React, { useState } from 'react';

function BilanForm({ onSaveBilan }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSaveBilan = () => {
    localStorage.setItem('start_date',startDate)
    localStorage.setItem('end_date',endDate)
  };

  return (
    <div className="bilan-form">
      <h2>Create Bilan</h2>
      <label htmlFor="start-date">Start Date:</label>
      <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      <label htmlFor="end-date">End Date:</label>
      <input type="date" id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      <button onClick={handleSaveBilan}>Creer le bilan et commencer les calculs</button>
    </div>
  );
}

export default BilanForm;