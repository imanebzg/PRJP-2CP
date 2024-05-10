import React, { useEffect, useState, useRef, useMemo  } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
import PostesProduit from '../../Componenets/PostesProduit/PostesProduit';
import HistogramProduit from '../../Componenets/HistogramProduit/HistogramProduit'


function Second_page (props) {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
      const intervalId = setInterval(() => {
          setCurrentTime(new Date());
      }, 1000); // Update every second

      return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

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

   const postesRef = useRef(null);
    const postesProduitRef = useRef(null);
    const avancementRef = useRef(null);
    const generatePDF = async () => {
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Capture screenshots of specific elements
      const captureElement = async (selector, name) => {
          const element = document.querySelector(selector);
          if (!element) return;

          const canvas = await html2canvas(element);
          const imgData = canvas.toDataURL('image/png');

          pdf.addImage(imgData, 'JPG', 10, 10, 180, 100); // Adjust position and size as needed
          pdf.text(name, 10, 120); // Add a label for the element
          pdf.addPage(); // Add a new page for the next element
      };

      await captureElement('.avancement', 'Avancement Exmp');
      await captureElement('.postes', 'Postes');
      await captureElement('.postesProduit', 'PostesProduit');

      // Save the PDF
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
}).replace(/\//g, '-'); // Replace slashes with hyphens
      pdf.save('bilan-' +  formattedDate  + '.pdf');

  };

  const handleDownloadClick = () => {
      generatePDF();
  };
       return (

        <div className="second"> 
          <Sidbar/>
          <div className="content2">
          <Form/>
          {isSubmitted ? (  <div className="mini_cont">
          <button className='btn1' onClick={handleCalcAgain}> Calculer de nouveau un bilan carbone ?</button>
          
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

          <div className='avancement'>
          <Avancement_exmp/>
          </div>
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
          <div className='postes'>
          <Postes />
          </div>

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
        <PostesProduit/>
        <HistogramProduit/>       
       
       </div> )}
       <button className='btn1' onClick={handleDownloadClick}>Télécharger le bilan</button>
       </div>
       
        </div> ) : (
    <h5>Remplir le formulaire pour avoir le résultat </h5>

    )
    }
        </div>
        </div>
      );
}
     

 
export default Second_page;