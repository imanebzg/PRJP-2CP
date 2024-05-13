const express = require('express');
const router = express.Router();
const connection = require('../config/database');


router.post('/history', (req, res) => {
    const {company_id, totalSum , start_date , end_start } = req.body;

    // console.log("req.body",req.body)
      const query = "INSERT INTO history (id_company,bilan,start_date,end_date) VALUES (?, ? ,? ,?); ";

  
    connection.query(query, [company_id , totalSum , start_date , end_start], (err, result) => {
      if (err) {
        console.error('Error saving total sum to database: ', err);
        res.status(500).send('Error saving total sum to database');
        return;
      }
      console.log('Total sum saved to database');
      res.status(200).send('Total sum saved to database');
    });
  });
  
  module.exports = router;