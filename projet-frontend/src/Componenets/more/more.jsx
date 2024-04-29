



import React from 'react';
import './more.css'; 
import img3 from './img/img3.jpg';
import img2 from './img/img2.jpg';
import img1 from './img/img1.jpg';
const More = () => {
  return (
    
<div class="more" id='more'>
    <div class="card">
      <div class="imgBx">
      <img src={img1}  alt="img1"  />
            </div>
      <div class="contentBx">
        <div class="contents">
          <h3>SCOPE 1</h3>
          <br/>
          <p align="left">représente le cadre le plus « limité » des bilans carbones. On y mesure uniquement les émissions directes de gaz à effet de serre liées à l’activité d’une entreprise, par exemple la combustion de carburant nécessaire à la fabrication d’un produit. </p>
        </div>
      </div>
    </div>

    <div class="card">
        <div class="imgBx">
        <img src={img3}  alt="img3"  />
            </div>
        <div class="contentBx">
          <div class="contents">
            <h3>SCOPE 2</h3>
            <br/>
            <p align="left"> regroupe toutes les émissions indirectes de CO2 liées à la production d’énergie, sous forme d'électricité, de chaleur ou de gaz. La fabrication des produits / services implique une consommation énergétique qui, en soi, ne génère pas de gaz à effet de serre. On regarde plutôt la production d’énergie associée .
            </p>     </div>
        </div>
      </div>
      <div class="card">
        <div class="imgBx">
        <img src={img2}  alt="img2"  />
            </div>
        <div class="contentBx">
          <div class="contents">
            <h3>SCOPE 3</h3>
            <br/>
            <p align="left">est le plus « large ». En effet, il inclut les autres émissions indirectes, en d’autres termes, toutes celles qui ne sont pas directement associées à la fabrication des produits / services. Dès lors il faut regarder la fin du cycle de vie d’un certain produit, comme le transport de marchandises.
                </p>    
        </div>
        </div>
      </div>
 </div>

 );
  
};

export default More;
