import React, { useEffect, useState, useRef, useMemo  } from 'react';
import Info_entreprise from "../../Componenets/Info_entreprise/Info_entreprise";
import Notifications from "../../Componenets/Notifications/Notifications";
import Form from "../../Componenets/CalcForm/Selection";
import Postes from "../../Componenets/Postes/Postes"
import Histogram from "../../Componenets/histogrm/histogrm";
import Supprimer from "../../Componenets/Supprimer/Supprimer";
import Error from "../../Componenets/error/error"
import P1 from "../../Componenets/page1/page11/page11"
import P2 from "../../Componenets/page1/page12/page12"
import "./second_page.css";
import Sidbar from "../../Componenets/Sidebar/Sidebar";
import Avancement_exmp from '../../Componenets/Avancement_exmp/Avancement_exmp';
import Plus_prod from '../../Componenets/Plus_prod/Plus_prod';


function Second_page (props) {
let isSubmitted = localStorage.getItem('isSubmitted');
if (isSubmitted === 'true') {
  isSubmitted = true;
} else {
  isSubmitted = false;
}
  const [selectedScope, setSelectedScope] = useState('');

  const handleRadioChange = (event) => {
    setSelectedScope(event.target.value);
  };
  const [selectedScope2, setSelectedScope2] = useState('');

  const handleRadioChange2 = (event) => {
    setSelectedScope2(event.target.value);
  };
       return (

        <div className="second"> 
          <Sidbar/>
          <div className="content2">
          <Form/>
          {isSubmitted ? (  <div className="mini_cont">
          <div className="radio-input">
          <input type="hidden" id="selectedScope" value={selectedScope} />

          
          <label>
            <input
              type="radio"
              value="form-8"
              name="value-radio8"
              id="value-8"
              onChange={handleRadioChange}
              checked={selectedScope === 'form-8'} // Set checked based on state
            />
            <span>Bilon global</span>
          </label>
          <label>
            <input
              type="radio"
              value="form-9"
              name="value-radio9"
              id="value-9"
              onChange={handleRadioChange}
              checked={selectedScope === 'form-9'} // Set checked based on state
            />
            <span>Details de produit</span>
          </label>

        </div>

        <div id="form-container" >
      {selectedScope === 'form-8' && (
        <div id="form8">
           <div className="formulaire18">

          
          <Avancement_exmp/>
          <div className="radio-input2">
          <input type="hidden" id="selectedScope2" value={selectedScope2} />

          {/* Radio buttons with labels */}
          <label>
            <input
              type="radio"
              value="form-4"
              name="value-radio4"
              id="value-4"
              onChange={handleRadioChange2}
              checked={selectedScope2 === 'form-4'} // Set checked based on state
            />
            <span>Cercle</span>
          </label>
          <label>
            <input
              type="radio"
              value="form-5"
              name="value-radio5"
              id="value-5"
              onChange={handleRadioChange2}
              checked={selectedScope2 === 'form-5'} // Set checked based on state
            />
            <span>Histo</span>
          </label>

        </div>
          <div className="mini_cont2">
       

        <div id="form-container" >
      {selectedScope2 === 'form-4' && (
        <div id="form4">
           <div className="formulaire14">

          <Postes/>

          </div>
       
       </div> )}
       </div>

       
       <div id="form-container" >
      {selectedScope2 === 'form-5' && (
        <div id="form5">
           
          <Histogram/>
          
        
       
       </div> )}

           </div>



        </div>

        </div>
       
       </div> )}
       </div>

       <div id="form-container" >
      {selectedScope === 'form-9' && (
        <div id="form9">
          
        <Plus_prod/>
        
       
       </div> )}
       </div>
        </div> ) : (
    ''
    )
    }
        </div>
        </div>
      );
}
     

 
export default Second_page;