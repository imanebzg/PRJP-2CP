import Info_entreprise from "../../Componenets/Info_entreprise/Info_entreprise";
import Notifications from "../../Componenets/Notifications/Notifications";
import Securiteform from "../../Componenets/Securite/Securitecomponent";
import Supprimer from "../../Componenets/Supprimer/Supprimer";
import Error from "../../Componenets/error/error"
import "./second_page.css";
import Sidbar from "../../Componenets/Sidebar/Sidebar"
import React, { useState, useEffect } from 'react';
import ReactSpeedometer from 'react-d3-speedometer';

const SecondPage = (props) => {
  const [speed, setSpeed] = useState(55); // Initial value set to 55

  useEffect(() => {
      const interval = setInterval(() => {
          // Update the speed to a random value between 0 and 100
          setSpeed(Math.floor(Math.random() * 100));
      }, 1000); // Updates every second

      return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
       return (

        <div className="second"> 
          <Sidbar/>
          <div className="content">
          <Error/>
           <Info_entreprise/>
           <Notifications/>
           <ReactSpeedometer
            maxValue={100}
            value={speed}
            needleColor="red"
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
           <Securiteform/>
           <Supprimer/>
           </div>



        </div>
      );
}
 
export default SecondPage;