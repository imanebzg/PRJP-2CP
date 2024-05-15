import React, { useState } from "react";
import './learn.css';

import More from "../../Componenets/more/more";
const Learn = () => {
  const [activeButton, setActiveButton] = useState("howItWorks");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const getText = () => {
    switch (activeButton) {
      case "seeTheMath":
        return(
            <div className="content">
              <p>
              Dans cette section nous vous dévoilons les détails du calcul du bilan carbone de votre entreprise. Nous croyons en la transparence et nous voulons que vous compreniez comment chaque chiffre est obtenu.<br/><br/>

Émission de Gaz à Effet de Serre (GES)<br/>
Le calcul des émissions de gaz à effet de serre repose sur la méthode de l'ACV (Analyse de Cycle de Vie) et prend en compte les principales sources d'émissions. Voici la formule générale utilisée :<br/><br/>

Mesure de l'activité liée à une source spécifique (par exemple, la consommation d'énergie, les déplacements, etc.).<br/><br/>

Facteur spécifique associé à l'activité, représentant les émissions de GES par unité d'activité.<br/><br/>
Empreinte Carbone Totale
L'empreinte carbone totale de votre entreprise est obtenue en agrégeant les émissions de GES de toutes les sources. La formule est la suivante :<br/><br/>

Empreinte Carbone Totale =<br/>
m : Nombre total de sources d'émissions prises en compte.<br/>
Nous tenons compte des émissions directes (scope 1), des émissions indirectes liées à l'énergie (scope 2) et des émissions indirectes liées aux activités de l'entreprise (scope 3).<br/><br/>

Facteurs de Conversion et Normes Utilisés
Pour garantir la précision de nos calculs, nous utilisons des facteurs de conversion et des normes reconnus à l'échelle internationale, issus de bases de données comme le GIEC (Groupe d'experts intergouvernemental sur l'évolution du climat).<br/><br/>

Veuillez noter que ces formules et méthodes sont des simplifications pour une compréhension générale. Des ajustements spécifiques peuvent être apportés en fonction de la nature particulière de certaines activités ou industries.<br/><br/>

Nous restons disponibles pour toute clarification supplémentaire. Nous sommes engagés dans la transparence et espérons que cette explication approfondie vous aide à mieux comprendre votre impact environnemental.<br/>

<br/><br/>   <br/>            
</p>

</div>
);       
                
                    case "howItWorks":
        return  (
            <div>
                <div className="content">
              <p>Le bilan carbone d’une entreprise est un outil de diagnostic qui permet d’analyser les émissions directes et indirectes de gaz à effet de serre générées par l'ensemble de ses activités de production. Ces données sont exprimées en dioxyde de carbone équivalent (CO2e). Ce bilan de carbone permet donc de connaître son empreinte carbone.<br/>

Voici la liste complète des <strong>GES</strong> dont les émissions doivent être considérées:<br/><br/></p>

          <table className="table-style">
            <thead>
                <tr>  <th>GES</th>
                    <th>Origines principales</th> 
                </tr>
            </thead>
            <tbody>
                <tr><td> Dioxyde de Carbone (CO2)</td> <td> Combustion des énergies fossiles et industries.</td> </tr>
                <tr> <td> Méthane (CH4)</td><td>Élevage des bovins et ruminants.</td> </tr>
                <tr> <td>Hydrofluorocarbure (HFC)</td> <td> Exploitations minières et pétrolières, décharges d'ordures.</td></tr>
                <tr> <td>Protoxyde d'Azote (N2O)</td><td>Industries du froid et automobile.</td> </tr>
                <tr><td>Perfluorocarbure (PFC)</td><td> Climatiseurs et systèmes de froid, extincteurs.</td> </tr>
                <tr> <td> Hexafluorure de Soufre (SF6)</td><td>Industrie pharmaceutique.</td> </tr>
            </tbody>
        </table>
          <p>
          <br/><br/>Si le principe est relativement simple, le défi réside souvent dans le choix du cadre pertinent pour la réalisation d'un Bilan Carbone, la collecte des données nécessaires et la bonne compréhension de la méthode utilisée.<br/>
Notre calculatrice de bilan de carbone offre une solution SaaS pour réaliser et obtenir votre Bilan Carbone d’une manière aisément compréhensible.<br/><br/><br/>
Lors du calcul du bilan de carbone, les émissions sont généralement catégorisées en "Scopes". Ces Scopes identifient l'emplacement où se produit la génération des émissions carbones.
</p>    </div> 
 <More/>
<br/><br/>

            </div>
          );
              default:
            return "";
        } };

  return (
    <div className="learn" id="learn">
      <h1>
Plus d'informations sur cette calculatrice</h1>
      <div class="line"></div>
      <div className="buttons">
        <button
          className={activeButton === "howItWorks" ? "active" : ""}
          onClick={() => handleButtonClick("howItWorks")}
        >
          comment ça marche?
        </button>
        <button
          className={activeButton === "seeTheMath" ? "active" : ""}
          onClick={() => handleButtonClick("seeTheMath")}
        >
          voir les calculs
        </button>
      </div>
      <div className="text-container">{getText()}</div>
    </div>
  );
};

export default Learn;
