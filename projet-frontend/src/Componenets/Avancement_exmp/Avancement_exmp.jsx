import React, { useEffect, useState } from 'react';
import './Avancement_exmp.css';

import ReactSpeedometer from 'react-d3-speedometer';

const Avancement_exmp = () => {
  const bilan = localStorage.getItem('totalSum')
  const [progressValue, setProgressValue] = useState(0);
  const progressEndValue = 60;
  const speed = 10;
  const [speed2, setSpeed] = useState(55); // Initial value set to 55

  useEffect(() => {
      const interval = setInterval(() => {
          // Update the speed to a random value between 0 and 100
          setSpeed(Math.floor(Math.random() * 100));
      }, 1000); // Updates every second

      return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  useEffect(() => {
    const progress = setInterval(() => {
      setProgressValue(prevProgressValue => {
        const newValue = prevProgressValue + 1;
        return newValue <= progressEndValue ? newValue : progressEndValue;
      });
    }, speed);

    return () => clearInterval(progress);
  }, []);

  return (
    <div className="Avancement_exmp">
     
       

      <p>Le bilan de carbone global est :</p>

       
            <div className="meter-container">
              
            <ReactSpeedometer
            maxValue={100}
            value={speed2}
            needleColor="red"
            
            marginBottom={0} 
            startColor="green"
            segments={10}
            endColor="blue"
            valueTextFontSize="0px"  // Masque le texte de la valeur
            labelFontSize="0px" // Assure que les labels des segments sont également masqués
            customSegmentStops={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            segmentLabels={[
                { text: "", color: "#000", fontSize: "0px" },  // Textes vides pour les labels
                { text: "", color: "#000", fontSize: "0px" },
                { text: "", color: "#000", fontSize: "0px" },
                { text: "", color: "#000", fontSize: "0px" },
                { text: "", color: "#000", fontSize: "0px" },
                { text: "", color: "#000", fontSize: "0px" },
                { text: "", color: "#000", fontSize: "0px" },
                { text: "", color: "#000", fontSize: "0px" },
                { text: "", color: "#000", fontSize: "0px" },
                { text: "", color: "#000", fontSize: "0px" }
            ]}
        />
               <div className="value-container"><strong>{parseFloat(bilan).toFixed(2)}</strong> KgCO2e</div>

           
            </div>
          </div>
        

  );
};

export default Avancement_exmp;