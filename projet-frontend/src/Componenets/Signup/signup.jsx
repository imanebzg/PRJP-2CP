import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign-up.css';
import myGif from './gif/gif1.gif'; 
import myGif2 from './gif/gif2.gif';

const Signup = () => {
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null); // Assuming user data structure

    // State for the sign-in form
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    // State for the sign-up form
    const [signUpData, setSignUpData] = useState({
        companyName: '',
        industry: '',
        email: '',
        password: '',
        confirmPassword: '',
        contactPerson: '',
        phoneNumber: '',
        location: '',
        postalCode: '',
        //verification: '',
    });

    useEffect(() => {
        const handleScroll = () => {
            const hasScrolled = window.scrollY > 0;
            document.body.classList.toggle('scrolled', hasScrolled);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const signUpButton = containerRef.current.querySelector('#signUp');
        const signInButton = containerRef.current.querySelector('#signIn');

        signUpButton.addEventListener('click', () => {
            containerRef.current.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            containerRef.current.classList.remove("right-panel-active");
        });
    }, []);
    const handleSignIn = async (event) => {
        event.preventDefault();
  
        const response = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: signInEmail, password: signInPassword })
        });
    
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('authToken', data.token);
            navigate('/second-page');
            // Set session timeout for 1 day (24 hours)
            setTimeout(() => {
                localStorage.removeItem('authToken'); // Clear authToken after timeout
                // Redirect or perform any other action on session timeout
            }, 86400000); // 24 hours timeout

            setIsAuthenticated(true);
            setUser(data.user);
        } else {
            alert(data.error);
        }
    };
    
    const handleSignUp = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify(signUpData));
        try {
            const response = await fetch('http://localhost:3001/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signUpData)
            });
    
            const data = await response.json();
            if (response.ok) {
                alert('Registration successful');
                //navigate('../profile/profile.jsx'); // to create the page "profile"
                localStorage.setItem('authToken', data.token);
                //navigate('/second-page')
                // Set session timeout for 1 day (24 hours)
                setTimeout(() => {
                    localStorage.removeItem('authToken'); // Clear authToken after timeout
                // Redirect or perform any other action on session timeout

                }, 86400000); // 24 hours timeout
            } else {
                alert(data.message || "An unknown error occurred"); // Provide a fallback message
            }
        } catch (error) {
            console.error('Fetch error:', error);
            alert('An error occurred while processing your request');
        }
    };
    


    const updateSignUpData = (field, value) => {
        setSignUpData(prev => ({ ...prev, [field]: value }));
    };


    return (
        <div className="sign-in" id='sign-in'>
            <div className="container" id="container" ref={containerRef}>
                <div className="form-container sign-up-container">

                    <form onSubmit={handleSignUp}>
                  
<h1>Commencez dès aujourd'hui</h1>
<p>Créez le compte de votre entreprise pour commencer à calculer votre empreinte carbone</p>        <input type="text" value={signUpData.companyName} onChange={(e) => updateSignUpData('companyName', e.target.value)} placeholder="Nom de la compagnie" required/>
                      
<select name="industry" value={signUpData.industry} onChange={(e) => updateSignUpData('industry', e.target.value)} required>
<option className ="p" value="" disabled>Sélectionnez votre industrie</option>
<option value="manufacturing">Industrie manufacturière</option>
<option value="agroalimentaire">Industrie alimentaire</option>
<option value="pharmaceutique">Pharmaceutique</option>
<option value="energie">Énergie</option>
<option value="tic">Technologies de l'information et de la communication</option>
<option value="automobile">Automobile</option>
<option value="aerospatiale">Aérospatiale</option>
<option value="chimique">Chimique</option>
<option value="construction">Construction</option>
<option value="miniere">Minière</option>
<option value="transport">Transport et logistique</option>
<option value="materiaux">Matériaux de construction</option>
<option value="biens">Biens de consommation</option>
<option value="medias">Médias et divertissement</option>
<option value="tourisme">Tourisme et hôtellerie</option>
<option value="sante">Santé</option>
<option value="mode">Mode et textile</option>
<option value="sciences">Sciences de la vie</option>

                        </select>
                        <input type="email" value={signUpData.email} onChange={(e) => updateSignUpData('email', e.target.value)} placeholder="Email" required/>
                        <input type="password" value={signUpData.password} onChange={(e) => updateSignUpData('password', e.target.value)} placeholder="Mot de passe" required/>
                        <input type="password" value={signUpData.confirmPassword} onChange={(e) => updateSignUpData('confirmPassword', e.target.value)} placeholder="Confirmez votre mot de passe" required/>
                        <input type="text" value={signUpData.contactPerson} onChange={(e) => updateSignUpData('contactPerson', e.target.value)} placeholder="Nom complet de la personne à contacter"required/>
                        <input type="tel" value={signUpData.phoneNumber} onChange={(e) => updateSignUpData('phoneNumber', e.target.value)} placeholder="Numéro de téléphone" required/>
                        <input type="text" value={signUpData.location} onChange={(e) => updateSignUpData('location', e.target.value)} placeholder="Localisation" required/>
                        <input type="text" value={signUpData.postalCode} onChange={(e) => updateSignUpData('postalCode', e.target.value)} placeholder="Code Postal" required/>
                        <input type="number" value={signUpData.verification} onChange={(e) => updateSignUpData('verification', e.target.value)} placeholder="Vérification humaine: 2 + 2 =" required/>
                        <button class='btn' type="submit">S'inscrire</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleSignIn}>
                       
<h1>Bienvenue de retour !</h1>
<p>Connectez-vous pour commencer à calculer votre bilan de carbone</p>
                        <input type="text" value={signInEmail} onChange={(e) => setSignInEmail(e.target.value)} placeholder="Email" required/>
                        <input type="password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} placeholder="Mot de passe" required/>
                            <button class='btn' type="submit">Se connecter</button>  
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                          <img src={myGif2} alt="Gif2" /> 
                            <p>Pour rester connecté avec nous, veuillez vous connecter avec vos informations personnelles</p>
                            <Link to="/second-page">        <button className="btn2" id="signIn">Se connecter</button></Link > 
                        </div>
                        <div className="overlay-panel overlay-right">
                             <img src={myGif} alt="Gif1" />
                            <p>Entrez vos coordonnées personnelles et commencez votre parcours avec nous</p>
                             <button className="btn2" id="signUp">Inscrivez-vous</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;