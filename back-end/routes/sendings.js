const express = require('express'); 
const router = express.Router();
const nodemailer = require('nodemailer');

const feedbackTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'feedback-email@gmail.com', 
      pass: 'feedback-email-password', 
    },
  });
  
  const contactUsTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'contact-us-email@gmail.com', 
      pass: 'contact-us-email-password',
    },
  });

  router.post('/send-feedback', async (req, res) => {
    const { name, email, feedback } = req.body;
  
    const mailOptions = {
      from: 'feedback-email@gmail.com',
      to: 'recipient-feedback-email@gmail.com', 
      subject: 'Feedback from your website',
      text: `Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`,
    };
  
    try {
      await feedbackTransporter.sendMail(mailOptions);
      console.log('Feedback email sent successfully.');
      return res.status(200).send('Feedback email sent successfully.');
    } catch (error) {
      console.error('Error sending feedback email:', error);
      return res.status(500).send('Error sending feedback email.');
    }
  });
  
  router.post('/send-contact-us', async (req, res) => {
    const { name, email, message } = req.body;
  
    const mailOptions = {
      from: 'contact-us-email@gmail.com', // mets email pour envoyer
      to: 'contact-us-recipient@gmail.com', // email to recieve results
      subject: 'Contact Us Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    try {
      await contactUsTransporter.sendMail(mailOptions);
      console.log('Contact Us email sent successfully.');
      return res.status(200).send('Contact Us email sent successfully.');
    } catch (error) {
      console.error('Error sending Contact Us email:', error);
      return es.status(500).send('Error sending Contact Us email.');
    }
  });

  
module.exports = router;