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
        
            <div class="title_big">
                <p>Supprimer le compte de l'entreprise :
                    
                </p>
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
      
<button class="noselect"><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
     
      <br/>
</form>

</div>
</div> 
);
};
export default Supprimer;