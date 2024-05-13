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
            return res.status(400).json({ok: false, error: "Erreur de verification de la disponibilité de l'email."});
        }
        if (result.length > 0) {
            return res.status(400).json({ok: false, error: 'Email déjà utilisé.' });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ok:false, error :'Email incorrect.'});
        }
            
        if (!passwordRegex.test(password)) {
            return res.status(400).json({ok: false, error: "Mot de passe doit contenir au moins une lettre majiscule, une lettre miniscule, un chiffre, et un caractère spécial. Le mot de passe doit avoir un minimum de 8 caractères."});
        }
    
        if (password !== confirmPassword) {
             return res.status(400).json({ok: false, error :"Les mots de passe ne correspondent pas"});
        }

        if (!algerianPhoneRegex.test(phoneNumber)) {
            return res.status(400).json({ok: false, error : "Numéro de téléphone Algérien invalid."});
        }
        /*
        if (!verification) {
            return res.render('registerpage', {message: 'Error : verification'}); 
        }*/

        let hashedPassword = await bcrypt.hash(password, 8); 
        connection.query('INSERT INTO companies SET ?', {company_name: companyName, email: email, password: hashedPassword, location: location, industry: industry, contact_person: contactPerson, phone_number: phoneNumber, postal_code: postalCode}, (err, result) => {
            if (err) {
                console.log(err);
                return res.status(400).json({ok: false, error: "Erreur connection pour la sauvegrade des données."});
            }
            else {
                const user = req.body;
                const token = generateAuthToken(user);
                return res.status(200).json({ok: true, message: 'Registration successful', user, token});

            }
        });
    });
}

exports.login = (req, res) => {
    const {email, password} = req.body; 
    connection.query('SELECT * FROM companies WHERE TRIM(`email`) = ?', [email], (err, results)=> {
        if (err) {
            console.error('Error retrieving user data:', err);
            return res.status(400).json({ok: false, error: 'Erreur de connection pour la verification des informations entrées.' });
          }
          if (results.length === 0) {
            return res.status(400).json({ok: false, error: 'Email incorrect.' });
          }

          const hashedPassword = results[0].password;

          bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) {
              return res.status(400).json({ok: false, error: 'Une erreur s\'est produite lors de la verification du mot de passe.' });
            }
            if (isMatch) {
              // Passwords match
              const user = results[0];
              const token = generateAuthToken(user);
              return res.status(200).json({ok: true, message: 'User authenticated', user, token});
            } else {
              // Passwords don't match
              return res.status(400).json({ok: false, error: 'Mot de passe incorrect.' });
            }
        });
    });
}

