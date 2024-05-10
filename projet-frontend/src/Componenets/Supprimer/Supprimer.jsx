import './Supprimer.css';

const Supprimer = () => {
    return (
  <div className="Supprimer">
<div class="container">
<div class="title">
    <p>Supprimer le compte </p>
</div>

<form action="#">
    <div class="user_details">
        <div class="container_check">
        <div className='text_big_small'>

            <div class="title_big">
                <p>Supprimer votre compte personel :</p>
            </div>
            <div class="title_small">
              
            </div>
          </div>
            <div class="cheking">
                <div class="checkbox-wrapper-4">
                    <input class="inp-cbx" id="morning8" type="checkbox"/>
                    <label class="cbx" for="morning8"><span>
                    <svg width="12px" height="10px">
                      
                    </svg></span><span>je veux comme meme supprimer le compte</span></label>
                    <svg class="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                    
                  </div>
                 

            
            
        </div>

      </div>

        <div class="container_check">
        <div className='text_big_small'>
            <div class="title_big">
                <p>Supprimer le compte de l'entreprise :
                    
                </p>
            </div>
            <div class="title_small">
               
            </div>
            </div>
            <div class="cheking">
                <div class="checkbox-wrapper-4">
                    <input class="inp-cbx" id="morning7" type="checkbox"/>
                    <label class="cbx" for="morning7"><span>
                    <svg width="12px" height="10px">
                      
                    </svg></span><span>je veux comme meme supprimer le compte</span></label>
                    <svg class="inline-svg">
                      <symbol id="check-4" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </symbol>
                    </svg>
                    
                </div>
                 
                  
                 
        
            </div>

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
export default Supprimer;