const connection = require('../config/database'); 
const validator = require('validator');
const jwt = require('jsonwebtoken'); 
const bcrypt = require('bcryptjs'); 
const { post } = require('../routes/pages');

// Function to generate JWT token
const generateAuthToken = (user) => {
    return jwt.sign({ id: user.company_id }, 'Ahbv dhd bcfvbcfcf', { expiresIn: '1d' }); 
};

exports.register = (req, res) => {
    const {companyName, industry, email, password, confirmPassword, contactPerson, phoneNumber, location, postalCode} = req.body;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/;
    const algerianPhoneRegex = /^0[0-9]{9}$/;
    connection.query('SELECT email FROM companies WHERE email = ?', [email], async (err, result) => {
        // email already used
        if (err) {
            return res.status(400).json({error: "An error occurred while checking email availability"});
        }
        if (result.length > 0) {
            return res.status(400).json({ error: 'Email is already registered.' });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({error :'Email incorrect!'});
        }
            
        if (!passwordRegex.test(password)) {
            return res.status(400).json({error: "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character and be at least 8 characters long."});
        }
    
        if (password !== confirmPassword) {
             return res.status(400).json({error :"Passwords don't match"});
        }

        if (!algerianPhoneRegex.test(phoneNumber)) {
            return res.status(400).json({error : "Invalid Algerian phone number format"});
        }
        /*
        if (!verification) {
            return res.render('registerpage', {message: 'Error : verification'}); 
        }*/

        let hashedPassword = await bcrypt.hash(password, 8); 
        connection.query('INSERT INTO companies SET ?', {company_name: companyName, email: email, password: hashedPassword, location: location, industry: industry, contact_person: contactPerson, phone_number: phoneNumber, postal_code: postalCode}, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).json({error: "ERROR"});
            }
            else {
                const user = req.body;
                const token = generateAuthToken(user);
                return res.status(200).json({ message: 'Registration successful', user, token});

            }
        });
    });
}

exports.login = (req, res) => {
    const {email, password} = req.body; 
    connection.query('SELECT * FROM companies WHERE TRIM(`email`) = ?', [email], (err, results)=> {
        if (err) {
            console.error('Error retrieving user data:', err);
            return res.status(400).json({ error: 'An error occurred while retrieving user data' });
          }
          if (results.length === 0) {
            return res.status(400).json({ error: 'Email is incorrect.' });
          }

          const hashedPassword = results[0].password;

          bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) {
              return res.status(400).json({error: 'An error occurred while comparing passwords' });
            }
            if (isMatch) {
              // Passwords match
              const user = results[0];
              const token = generateAuthToken(user);
              return res.status(200).json({ message: 'User authenticated', user, token});
            } else {
              // Passwords don't match
              return res.status(400).json({ message: 'Password is incorrect.' });
            }
        });
    });
}

