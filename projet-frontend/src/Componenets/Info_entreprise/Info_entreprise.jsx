import './Info_entreprise.css';
import React from 'react';
const Info_entreprise = () => {
    return (
        <div className="Info_entreprise">
<div class="container">
            <div class="title">
                <p>Information de l'entreprise</p>
            </div>
    
            <form action="#">
                <div class="user_details">
                    <div class="input_box">
                        <label for="name">Nom</label>
                        <input type="text" id="name" placeholder="AAAAAAA" required/>
                    </div>
                    <div class="input_box">
                        <label for="username">Activité</label>
                        <input type="text" id="username" placeholder="Enter your username" required/>
                    </div>
                    <div class="input_box">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Example@gmail.com" required/>
                    </div>
                    <div class="input_box">
                        <label for="phone">Numero de téléphon</label>
                        <input type="number" id="phone" placeholder="07 ** ** ** " required/>
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
        export default Info_entreprise;
