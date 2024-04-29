import './Securite.css';
import React from 'react';
const Securite = () => {
    return (
        <div className="Securite">
<div class="container">
<div class="title">
    <p>Sécurité et mot de passe</p>
</div>

<form action="#">
    <div class="user_details">
        <div class="input_box">
            <label for="name"></label>
            <input type="text" id="name" placeholder="Entrer votre mot de passe" required/>
        </div>
        <div class="input_box">
            <label for="username"></label>
            <input type="text" id="username" placeholder="confirmer votre nouveau mot de passe" required/>
        </div>
        <div class="input_box">
            <label for="email"></label>
            <input type="email" id="email" placeholder="Entrer votre nouveau mot de passe" required/>
        </div>
        
        
    </div>
    
    <br />
      
      <button className="btn1">Modifier</button>
      <br/>
</form>
</div>
</div>
);
};
export default Securite;

