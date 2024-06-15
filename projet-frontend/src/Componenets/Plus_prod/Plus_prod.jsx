import './Plus_prod.css';
import React, { useState } from 'react';
import Postes from "../../Componenets/Postes/Postes"
const Plus_prod = () => {
    const [liked, setLiked] = useState(false);
  
    const toggleLiked = () => {
      setLiked(!liked);
    };
    const [liked2, setLiked2] = useState(false);
  
    const toggleLiked2 = () => {
      setLiked2(!liked2);
    };
    return (
      <div className="Prod">
        <div className='title'>
            <p>voir les détails sur les produits : </p>
        </div>
        <div className={`rectang ${liked ? 'liked' : ''}`} onClick={toggleLiked}>
          produit 1 :
        </div>
        {liked && (
          <div className="container-rest">
            {/* Content to show when liked */}

            <Postes/>

          </div>
        )} 

        <div className={`rectang2 ${liked2 ? 'liked2' : ''}`} onClick={toggleLiked2}>
          produit 2 :
        </div>
        {liked2 && (
          <div className="container-rest2">
            {/* Content to show when liked */}
           Détails produit 2
          </div>
        )} 
      </div>

      
    );
  };
  
  export default Plus_prod;