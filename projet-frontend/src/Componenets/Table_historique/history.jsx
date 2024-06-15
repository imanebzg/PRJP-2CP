import React, { useEffect, useState } from 'react';
import './history.css';

const HistoryTable = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch history of bilans from backend
    const fetchHistory = async () => {
      try {
        const company_id = localStorage.getItem('userEmail'); 
        const response = await fetch('http://localhost:3001/table_bilans/table_history', {
          headers: {
            'Content-Type': 'application/json',
            'X-Company-Id': company_id
          }
        });
        if (response.ok) {
          const data = await response.json();
          setHistory(data);
        } else {
          console.error('Error fetching history of bilans');
        }
      } catch (error) {
        console.error('Error fetching history of bilans: ', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-table-container">
      <h2>Historique de Bilans</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Bilan</th>
            <th> Date début</th>
            <th> Date fin</th>
          </tr>
        </thead>
        <tbody>
          {history.map(item => (
            <tr key={item.id}>
              <td>{item.bilan}</td>
              <td>{item.start_date}</td>
              <td>{item.end_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryTable;