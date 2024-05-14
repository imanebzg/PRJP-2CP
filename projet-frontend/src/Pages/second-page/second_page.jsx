/*import React, { useState  } from 'react';
import Form from "../../Componenets/CalcForm/Selection";
import Postes from "../../Componenets/Postes/Postes"
import Histogram from "../../Componenets/histogrm/histogrm";

import "./second_page.css";
import Sidbar from "../../Componenets/Sidebar/Sidebar";
import Avancement_exmp from '../../Componenets/Avancement_exmp/Avancement_exmp';
import PostesProduit from '../../Componenets/PostesProduit/PostesProduit';
import HistogramProduit from '../../Componenets/HistogramProduit/HistogramProduit'
import TablesComponent from '../../Componenets/tableau/tableau';

function Second_page (props) {
let isSubmitted = localStorage.getItem('isSubmitted');
if (isSubmitted === 'true') {
  isSubmitted = true;
} else {
  isSubmitted = false;
}
  const [selectedScope, setSelectedScope] = useState('form-8');

  const handleRadioChange = (event) => {
    setSelectedScope(event.target.value);
  };
  const [selectedScope2, setSelectedScope2] = useState('form-4');

  const handleRadioChange2 = (event) => {
    setSelectedScope2(event.target.value);
  };

  const handleCalcAgain = () => {
    localStorage.removeItem('totalSum'); 
    localStorage.removeItem('formResults');
    localStorage.setItem('isSubmitted', false); 
    window.location.reload();
   };


   const [selectedOption, setSelectedOption] = useState('postes'); // État local pour suivre l'option sélectionnée

   // Gérer le changement d'option radio
   const handleRadioChange3 = (event) => {
     setSelectedOption(event.target.value); // Mettre à jour l'option sélectionnée
   };
       return (

        <div className="second"> 
          <Sidbar/>
          <div className="content2">
          
        
          {isSubmitted ? (  <>
       


          <div className="button-container">
            <button className="btn1"  onClick={handleCalcAgain}>
             
              <div>Calculer de nouveau un bilan carbone ?</div>
              <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="white" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="white" d="M4 12.0601H14.17"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="white" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
              </svg>

            </button>
        
          </div>   
          <div className="mini_cont">

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
            <span>Bilan global</span>
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
            <span>Details de chaque activité</span>
          </label>

        </div>

        <div id="form-container" >
      {selectedScope === 'form-8' && (
        <div id="form8">
           <div className="formulaire18">

          
          <Avancement_exmp/>
          <div className="radio-input2">
          <input type="hidden" id="selectedScope2" value={selectedScope2} />

         
          <label>
            <input
              type="radio"
              value="form-4"
              name="value-radio4"
              id="value-4"
              onChange={handleRadioChange2}
              checked={selectedScope2 === 'form-4'} // Set checked based on state
            />
            <span>rftgyhjutgr</span>
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
            <span>histogarm</span>
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
      {selectedScope === 'form-9' && (<>
       
        <div className="radio-input2">
        <label>
          <input
            type="radio"
            value="postes"
            name="value-radio"
            onChange={handleRadioChange3}
            checked={selectedOption === 'postes'} // Vérifier si l'option est sélectionnée
          />
          <span>dfghdfgh</span>
        </label>
        <label>
          <input
            type="radio"
            value="histogram"
            name="value-radio"
            onChange={handleRadioChange3}
            checked={selectedOption === 'histogram'} // Vérifier si l'option est sélectionnée
          />
          <span>Histogram</span>
        </label>
      </div>

      
      {selectedOption === 'postes' && <PostesProduit />} 
      {selectedOption === 'histogram' && <HistogramProduit />} 

        <TablesComponent/>
        <h5>Les taux de gaz présentés dans ces tableaux sont exprimés pour une unité de quantité.</h5>
        </>
       
       )}
       </div>
       
        </div></> ) : ( 
          
          <>  <Form/>
          <div class="loader">
  <label>Remplir le formulaire pour avoir le résultat...</label>
  <div class="loading"></div>
</div></>
    )
    }
        </div>
        </div>
      );
}
     

 
export default Second_page;











*/

























import React, { useEffect, useState, useRef, useMemo  } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Form from "../../Componenets/CalcForm/Selection";
import Postes from "../../Componenets/Postes/Postes"
import Histogram from "../../Componenets/histogrm/histogrm";
import "./second_page.css";
import Sidbar from "../../Componenets/Sidebar/Sidebar";
import Avancement_exmp from '../../Componenets/Avancement_exmp/Avancement_exmp';
import PostesProduit from '../../Componenets/PostesProduit/PostesProduit';
import HistogramProduit from '../../Componenets/HistogramProduit/HistogramProduit'
import TablesComponent from '../../Componenets/tableau/tableau';
import PostesDirIndir from '../../Componenets/PostesDirIndir/PostesDirIndir';

function Second_page (props) {
let isSubmitted = localStorage.getItem('isSubmitted');
if (isSubmitted === 'true') {
  isSubmitted = true;
} else {
  isSubmitted = false;
}
  const [selectedScope, setSelectedScope] = useState('form-8');

  const handleRadioChange = (event) => {
    setSelectedScope(event.target.value);
  };
  const [selectedScope2, setSelectedScope2] = useState('form-4');

  const handleRadioChange2 = (event) => {
    setSelectedScope2(event.target.value);
  };

  const user = localStorage.getItem('userData'); 

  
  const handleDownload = () => {
      const companyName = 'Your Company Name';
      const currentDate = new Date().toLocaleDateString('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
      });
      const phoneNumber = '+1 234 567 890';
      const email = 'info@example.com';
      const bilanNumber = '123456'; // Replace with actual bilan de carbone number
  
      // HTML template for the bill-like PDF
      const htmlContent = `
      <html>
      <head>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 800px;
                  margin: 20px auto;
                  padding: 20px;
                  border: 2px solid #333;
                  box-sizing: border-box;
                  background-color: #fff;
              }
              .header {
                  text-align: center;
                  margin-bottom: 20px;
              }
              .info {
                  margin-bottom: 20px;
                  border-bottom: 1px solid #333;
                  padding-bottom: 10px;
              }
              .info p {
                  margin: 5px 0;
              }
              .content {
                  margin-bottom: 20px;
              }
              .content p {
                  margin: 5px 0;
              }
              .footer {
                  text-align: right;
                  font-style: italic;
                  color: #666;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Bilan de Carbone</h1>
              </div>
              <div class="info">
                  <p><strong>Company Name:</strong> ${companyName}</p>
                  <p><strong>Phone:</strong> ${phoneNumber}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Date:</strong> ${currentDate}</p>
              </div>
              <div class="content">
                  <p><strong>Bilan de Carbone Number:</strong> ${bilanNumber}</p>
                  <!-- Add more content as needed -->
              </div>
              <div class="footer">
                  <p>Generated by YourApp</p>
              </div>
          </div>
      </body>
      </html>
      `;
  
      // Create a new jsPDF instance with A4 page size (210x297 mm)
      const doc = new jsPDF({
          orientation: 'portrait', // Portrait orientation
          unit: 'mm', // Millimeters as unit
          format: 'a4', // A4 page size
      });
  
      // Generate PDF from HTML content
      doc.html(htmlContent, {
          callback: () => {
              // Save the PDF with a filename
              doc.save(`bilan-${currentDate.replaceAll('/', '-')}.pdf`);
          },
      });
  };
  
  const handleCalcAgain = () => {
    localStorage.removeItem('totalSum'); 
    localStorage.removeItem('formResults');
    localStorage.setItem('isSubmitted', false); 
    window.location.reload();
   };

   const [selectedOption, setSelectedOption] = useState('postes'); // État local pour suivre l'option sélectionnée

   // Gérer le changement d'option radio
   const handleRadioChange3 = (event) => {
     setSelectedOption(event.target.value); // Mettre à jour l'option sélectionnée
   };
       return (

        <div className="second"> 
          <Sidbar/>
          <div className="content2">
          
       
          {isSubmitted ? ( <>
          
            <div className="button-container">
            <button className="btn1"  onClick={handleCalcAgain}>
             
              <div>Calculer de nouveau un bilan carbone ?</div>
              <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="white" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="white" d="M4 12.0601H14.17"></path>
                <path strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" stroke="white" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
              </svg>

            </button>
        
          </div>  
         



          <button class="Documents-btn" onClick={handleDownload}>
  <span class="folderContainer">
    <svg
      class="fileBack"
      width="146"
      height="113"
      viewBox="0 0 146 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z"
        fill="url(#paint0_linear_117_4)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_117_4"
          x1="0"
          y1="0"
          x2="72.93"
          y2="95.4804"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8F88C2"></stop>
          <stop offset="1" stop-color="#5C52A2"></stop>
        </linearGradient>
      </defs>
    </svg>
    <svg
      class="filePage"
      width="88"
      height="99"
      viewBox="0 0 88 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="88" height="99" fill="url(#paint0_linear_117_6)"></rect>
      <defs>
        <linearGradient
          id="paint0_linear_117_6"
          x1="0"
          y1="0"
          x2="81"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white"></stop>
          <stop offset="1" stop-color="#686868"></stop>
        </linearGradient>
      </defs>
    </svg>

    <svg
      class="fileFront"
      width="160"
      height="79"
      viewBox="0 0 160 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z"
        fill="url(#paint0_linear_117_5)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_117_5"
          x1="38.7619"
          y1="8.71323"
          x2="66.9106"
          y2="82.8317"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C3BBFF"></stop>
          <stop offset="1" stop-color="#51469A"></stop>
        </linearGradient>
      </defs>
    </svg>
  </span>
  <p class="text">Télécharger</p>
</button>

<div className="mini_cont">
         
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
            <span>Bilan global</span>
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
            <span>Details de chaque activité</span>
          </label>

        </div>

        <div id="form-container" >
      {selectedScope === 'form-8' && (
        <div id="form8">
           <div className="formulaire18">

          
          <Avancement_exmp/>


         <PostesDirIndir/>
          <div className="radio-input2">
          <input type="hidden" id="selectedScope2" value={selectedScope2} />

      
          <label>
            <input
              type="radio"
              value="form-4"
              name="value-radio4"
              id="value-4"
              onChange={handleRadioChange2}
              checked={selectedScope2 === 'form-4'} // Set checked based on state
            />
            <span>Cercle relatif</span>
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
            <span>histogarm</span>
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
      
      <div className='detailss'> 
      <div className="radio-input2">
    <label>
      <input
        type="radio"
        value="postes"
        name="value-radio"
        onChange={handleRadioChange3}
        checked={selectedOption === 'postes'} // Vérifier si l'option est sélectionnée
      />
      <span>Cercle relatif</span>
    </label>
    <label>
      <input
        type="radio"
        value="histogram"
        name="value-radio"
        onChange={handleRadioChange3}
        checked={selectedOption === 'histogram'} // Vérifier si l'option est sélectionnée
      />
      <span>Histogramme</span>
    </label>
  </div>
  <div id="form9">
    {/* Affichage conditionnel basé sur l'option sélectionnée */}
    {selectedOption === 'postes' && <PostesProduit />} {/* Afficher PostesProduit si l'option est sélectionnée */}
    {selectedOption === 'histogram' && <HistogramProduit />} {/* Afficher HistogramProduit si l'option est sélectionnée */}
</div> 
    <TablesComponent />
    <h5>
        <svg class="info-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
      </svg>
     Les taux de gaz présentés dans ces tableaux sont exprimés pour une unité de quantité.</h5>
    
  </div> )}
       </div>
       
        </div> </> ) :( 
          
          <>  <Form/>
          <div class="loader">
  <label>Remplir le formulaire pour avoir le résultat...</label>
  <div class="loading"></div>
</div></>
    )
    }
        </div>
        </div>
      );
}
     

 
export default Second_page;

