import React from "react";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import "./why.css";

export default function why() {
  return (
    <div class="why" id="why">
      <div class="image">
        <div class="image-partie1">
          <div class="car11">
            <p class="car112">CO</p>
            <p class="car113">2</p>
          </div>
          <div class="car12">Scope</div>
          <div class="car13">60%</div>
        </div>
        <div class="image-partie2">
          <div class="car21">Carbone</div>
          <div class="car22">Émissions</div>
          <div class="car23">
            <img src={img1} alt="" class="image1" />
          </div>
        </div>
        <div class="image-partie3">
          <img src={img2} alt="" class="image2" />
        </div>
      </div>
      <div class="Content">
        <p class="title-why-carbo">Pourquoi choisir Carbon Operation options ?</p>
        <p class="description">
          Carbon Accountibility Solution est votre partenaire incontournable pour évaluer et optimiser le bilan carbone de votre entreprise. Notre plateforme gratuite offre une analyse détaillée et précise, vous permettant de comprendre l'impact environnemental de vos opérations à chaque étape de votre chaîne de valeur.
        </p>
        <p class="description">
          Que vous dirigiez une petite start-up ou une grande entreprise, notre solution vous fournit les données nécessaires pour prendre des décisions éclairées en matière de durabilité. En calculant votre bilan carbone, vous identifiez les opportunités d'optimisation et de réduction des émissions, tout en renforçant votre engagement envers la responsabilité environnementale.
        </p>
        <p class="description">
          Rejoignez-nous dès aujourd'hui pour bénéficier d'une analyse approfondie de votre bilan carbone, et découvrez comment votre entreprise peut contribuer activement à la lutte contre le changement climatique. Ensemble, travaillons vers un avenir plus durable et responsable.
        </p>
      </div>
    </div>
  );
}
