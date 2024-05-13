const express = require('express'); 
const router = express.Router();
const connection = require('../config/database');
const nodemailer = require('nodemailer');


  
  const contactUsTransporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'reachsendings@gmail.com', 
      pass: 'rjbp afea hlht mdeb', 
    },
   });

  router.post('/send-contact-us', async (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: 'reachsendings@gmail.com', // mets email pour envoyer
      to: 'md_bedjghit@esi.dz', // email to recieve results
      subject: 'Contact Us Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    try {
      await contactUsTransporter.sendMail(mailOptions);
      console.log('Contact Us email sent successfully.');
      return res.status(200).json({ok: true, message: 'Message envoyé avec succès.'});
    } catch (error) {
      console.error('Error sending Contact Us email:', error);
      return res.status(500).json({ok: false, error: 'Problème de connection.'});
    }
  });


  router.post('/feedbacks', (req, res) => {
    const { name, email, feedback } = req.body;
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Current timestamp
  
    const sql = `INSERT INTO feedbacks (name, email, feedback, created_at) VALUES (?, ?, ?, ?)`;
    const values = [name, email, feedback, createdAt];
  
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error storing feedback:', err);
        res.status(500).json({ ok: false, error: 'Erreur : problème de connection.' });
      } else {
        res.status(201).json({ ok:true, message: 'Feedback retenu' });
      }
    });
  });
  
  // Endpoint to retrieve last three feedbacks
  router.get('/recent-feedbacks', (req, res) => {
    const sql = `SELECT * FROM feedbacks ORDER BY created_at DESC LIMIT 4`;
  
    connection.query(sql, (err, results) => {
      if (err) {
        console.error('Error retrieving recent feedbacks:', err);
        res.status(500).json({ ok: false, error: 'Error retrieving recent feedbacks' });
      } else {
        res.status(200).json({ok: true, results});
      }
    });
  });
  
module.exports = router;