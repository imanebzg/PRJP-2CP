import React , { useEffect } from 'react';
import './blog.css'; // Assuming your styles are in a separate file
import blogScript from './blg.js';
import arrow from './img/arrow.png';
const Blog = () => {  
    useEffect(() => {
      blogScript();
    }, []);
  return (
    <div className="blog" id='blog'>
        <h1 className='title'>Quelques articles interessants</h1>
  <div class="slider">
<div class="item">
    <h1>Qu'est-ce qu'un bilan carbone ?</h1>
    <p>  Un bilan carbone est un outil utilisé pour évaluer l'empreinte carbone d'une organisation, d'un produit, ou
même d'un individu. Il mesure les émissions de gaz à effet de serre (GES) générées directement ou
indirectement par une activité donnée.</p> 
</div>
<div class="item">
    <h1>Quels sont les principaux gaz à effet de serre inclus dans le calcul du bilan carbone ?</h1>
    <p>Les principaux gaz à effet de serre pris en compte dans un bilan carbone sont le dioxyde de carbone
(CO2), le méthane (CH4) et l'oxyde nitreux (N2O), ainsi que d'autres gaz comme les hydrofluorocarbures
(HFC) et le protoxyde d'azote (N2O).</p> 
    </div>
<div class="item">
    <h1>Quels sont les avantages de réaliser un bilan carbone ?</h1>
    
    <p>Réaliser un bilan carbone permet de mieux comprendre et quantifier l'impact environnemental d'une
activité ou d'une organisation. Cela aide à identifier les sources d'émissions de GES et à mettre en place
des mesures pour les réduire, contribuant ainsi à la lutte contre le changement climatique.</p> 
    </div>
<div class="item">
    <h1>Comment est calculé un bilan carbone ?</h1>
    <p>Le calcul d'un bilan carbone implique l'évaluation des émissions directes et indirectes de GES associées
à une activité ou à une organisation. Cela inclut les émissions provenant de la combustion de carburants,
de l'électricité consommée, des déplacements, de la production de biens, etc. Les émissions sont
généralement converties en équivalents CO2 pour permettre une comparaison cohérente entre différents
types de gaz à effet de serre.</p> 
    </div>

<div class="item">
    <h1>Quelles actions peuvent être entreprises pour réduire son empreinte carbone ?</h1>
    <p>Il existe de nombreuses actions pouvant être entreprises pour réduire son empreinte carbone, telles que
l'adoption de modes de transport plus écologiques, l'optimisation de la consommation énergétique, la
réduction des déchets, le recours aux énergies renouvelables, l'achat de produits locaux et durables, etc.</p></div>
<div class="item">
    <h1>Quelle est l'importance de la compensation carbone ?</h1>
    <p>La compensation carbone consiste à compenser ses propres émissions de GES en investissant dans
des projets de réduction ou de capture du carbone ailleurs. Cela peut contribuer à compenser les
émissions difficiles à éviter, tout en soutenant des initiatives bénéfiques pour l'environnement et les
communautés locales. Cependant, la compensation ne devrait pas être considérée comme une solution
à part entière, mais plutôt comme un complément aux efforts de réduction des émissions.</p></div>

<div class="item">
    <h1>Qu'est-ce que l'empreinte carbone ?</h1>
    <p>L'empreinte carbone est la mesure des émissions de gaz à effet de serre (GES) associées à une activité,
un produit ou un individu.</p></div>

<div class="item">
    <h1>Comment puis-je réduire mon empreinte carbone au quotidien ?</h1>
    <p>Vous pouvez réduire votre empreinte carbone en optant pour les transports en commun, en réduisant
votre consommation d'énergie, en privilégiant les produits locaux et en recyclant davantage.</p></div>
<button id="prev" class="pre-btn">
<img src={arrow}  alt="fleche" /></button>
        <button id="next" class="nxt-btn">
          <img src={arrow}  alt="fleche" />     </button>
         


</div>


</div>
    
    );
};

export default Blog;
