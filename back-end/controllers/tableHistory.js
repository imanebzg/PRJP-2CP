
const mysql = require('mysql');
const connection = require('../config/database');

// Fetch history of bilans from the database
exports.getHistory = (req, res) => {
  const company_id = req.headers['x-company-id']; 
  
  const query = `SELECT DATE_FORMAT(start_date, '%Y-%m-%d') AS start_date, DATE_FORMAT(end_date, '%Y-%m-%d') AS end_date, ROUND(bilan, 3) AS bilan FROM history WHERE id_company = ?`;
  connection.query(query, [company_id], (err, results) => {
    if (err) {
      console.error('Error fetching history of bilans: ', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json(results);
  });
};
