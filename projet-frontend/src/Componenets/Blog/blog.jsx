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
    <h1>Harmoniser l’empreinte carbone des entreprises</h1>
    <p>  Site web précieux pour les acteurs engagés dans la réduction des émissions de GES et la lutte contre le changement climatique. L'article offre des informations utiles et des conseils pratiques pour harmoniser les empreintes carbone des entreprises. 
    <br/> <br/><br/>Pour en apprendre d’avantage :  
    <a href=" https://www.nature.com/articles/s41467-021-26349-x" class="link"> lien</a></p> 
</div>
<div class="item">
    <h1>Emerald insight</h1>
    <p>
L'article aborde la réduction de l'empreinte carbone numérique des entreprises en mettant l'accent sur la réutilisation des connaissances. Il explique comment la collecte de "données sombres", c'est-à-dire des données non utilisées, contribue aux émissions de carbone. Les auteurs proposent un modèle de réutilisation des connaissances pour réduire cette empreinte carbone numérique.  <br/> <br/><br/>Pour en apprendre d’avantage :  <a href=" https://www.emerald.com/insight/content/doi/10.1108/JBS-03-2022-0048/full/html" class="link">lien  </a></p> 
    </div>
<div class="item">
    <h1>
Harvard Business Review</h1>
    
    <p> est une publication dans le domaine du management et des affaires qui propose des articles, des recherches et des ressources pour les professionnels du monde des affaires, couvrant une multitude de sujets comme la stratégie, le leadership et l'innovation et qui aborde la réduction de l'empreinte carbone des entreprises.




    <br/> <br/><br/>Pour en apprendre d’avantage :  <a href=" https://hbr.org/2023/04/getting-a-clearer-view-of-your-companys-carbon-footprint" class="link">lien</a></p> 
    </div>
<div class="item">
    <h1>Sami eco</h1>
    <p>  un site qui fournit des informations et des ressources sur la durabilité et la réduction de l'empreinte carbone, en particulier pour les entreprises. Cet article traite du calcul du bilan carbone d'une entreprise, offrant des conseils et des outils pour évaluer et réduire son impact environnemental.    <br/> <br/><br/>Pour en apprendre d’avantage :    <a href=" https://www.sami.eco/blog/calcul-bilan-carbone-entreprise" class="link">lien </a></p> 
    </div>
<div class="item">
    <h1>
Greenly earth</h1>
    <p> un site axé sur la durabilité et l'empreinte carbone, offrant des ressources et des guides pratiques pour les entreprises soucieuses de réduire leur impact environnemental. Cet article est un guide complet sur le calcul du bilan carbone pour les entreprises. Il fournit des conseils détaillés, des étapes à suivre et des outils pour aider les entreprises à évaluer et à réduire leur empreinte carbone. 



<br/> <br/><br/>Pour en apprendre d’avantage :  <a href=" https://greenly.earth/fr-fr/blog/guide-entreprise/le-guide-ultime-du-bilan-carbone-pour-les-entreprises-en-2022" class="link">lien</a></p> 
</div>
<div class="item">
    <h1>Planet vie</h1>
    <p>
Ce site est lié à l'enseignement et à la recherche en écologie, associé à une institution éducative comme une université. L'article aborde le rôle des forêts dans le bilan de carbone de la planète, mettant en lumière l'importance des écosystèmes forestiers dans le cycle global du carbone. Il explique comment les forêts absorbent le dioxyde de carbone de l'atmosphère et stockent le carbone, contribuant ainsi à réguler le climat de la Terre.    <br/> <br/><br/>Pour en apprendre d’avantage :  <a href="https://planet-vie.ens.fr/thematiques/ecologie/cycles-biogeochimiques/role-des-forets-dans-le-bilan-de-carbone-de-la-planete" class="link">lien</a></p> 
</div>
<div class="item">
    <h1>Aktio</h1>
    <p>Cet article explique les différences entre l'Analyse du Cycle de Vie (ACV) et le Bilan Carbone, deux outils utilisés pour évaluer l'impact environnemental des entreprises. Il met en avant l'approche globale de l'ACV, qui examine tous les impacts environnementaux d'un produit, par opposition au Bilan Carbone qui se concentre uniquement sur les émissions de gaz à effet de serre.


<br/> <br/><br/>Pour en apprendre d’avantage :    <a href="https://www.aktio.cc/ressources/analyse-du-cycle-de-vie-acv" class="link">lien </a></p> 
</div>

<div class="item">
    <h1>Perspective Monde</h1>
    <p> Cet arcticel est une ressource de l'Université de Sherbrooke, qui traite du contexte des émissions de gaz à effet de serre (GES) en Algérie. Cette ressource fournit des informations sur les émissions de GES dans le pays, ainsi que sur les politiques et les mesures prises pour les réduire.   <br/> <br/><br/>Pour en apprendre d’avantage :   <a href=" https://perspective.usherbrooke.ca/bilan/servlet/ComprendreContexteGES?codePays=DZA" class="link">lien </a></p> 
</div>

<button id="prev" class="pre-btn">
<img src={arrow}  alt="fleche" /></button>
        <button id="next" class="nxt-btn">
          <img src={arrow}  alt="fleche" />     </button>
         


</div>


</div>
    
    );
};

export default Blog;
