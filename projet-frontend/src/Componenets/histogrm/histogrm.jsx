

import React, { useEffect, useState, useRef, useMemo  } from 'react';
import axios from 'axios'; 
import Chart from 'chart.js/auto';
import './histogrm.css';







const populateUl = (ul, chartData) => {
  if (ul) {
    ul.innerHTML = ''; // Efface le contenu précédent de l'élément ul
    chartData.labels.forEach((label, i) => {
      let li = document.createElement("li");
      li.innerHTML = `${label}: <span class='percentage'>${chartData.data[i]}</span>`;
      ul.appendChild(li);
    });
  }
};




const generateColors = (num) => {
  // Generate colors logic
  return Array.from({ length: num }, () => "#" + Math.floor(Math.random() * 16777215).toString(16));
};

const Histogram = React.memo(function Histogram({formResults}) {
  const [show1Chart, setShow1Chart] = useState(false);
  const [show2Chart, setShow2Chart] = useState(false);
  const [show3Chart, setShow3Chart] = useState(false);
  let isSubmitted = localStorage.getItem('isSubmitted');
  if (isSubmitted === 'true') {
    isSubmitted = true;
  } else {
    isSubmitted = false;
  }
  
  console.log("IS SUBMITTEDD IS AT  : "+isSubmitted+ " type offfff ; "+typeof isSubmitted)
  let storedFormResults = formResults;


  if (!localStorage.getItem('formResults')) {
    // Key doesn't exist, create it and set initial value
    const initialFormResults = [{
      secteur1: '',
      secteur2: '',
      secteur3: '',
      secteur4: '',
      secteur5: '',
      nom: '',
      ligne: '',
      poste: '',
      quantite: '',
      unite: '',
      NomAttribut: '',
      NomFrontiere: '',
      contributeur: '',
      localisation: '',
      souslocalisation: ''
    }];

    // Convert to JSON and set in local storage
    localStorage.setItem('formResults', JSON.stringify(initialFormResults));

    // Set storedFormResults to the initial value if it doesn't exist in props
    storedFormResults = initialFormResults;
  } else {
    // Retrieve the stored value from local storage
    storedFormResults = JSON.parse(localStorage.getItem('formResults'));
  }
  //formResults = JSON.parse(localStorage.getItem('formResults'));
  const secteur1Array = useMemo(() => storedFormResults.map(result => result.secteur1.trim()).filter(secteur1 => secteur1 !== ''), [storedFormResults]);


  const initialData = {
    Combustibles: {scope1: 0,scope2: 0,scope3: 0},
    ProcessEmissionsFugitives: {scope1: 0,scope2: 0,scope3: 0 },
    UTCF: {scope1: 0,scope2: 0,scope3: 0 },
    Electricite: {scope1: 0,scope2: 0,scope3: 0 },
    AchatsBiens: {scope1: 0,scope2: 0,scope3: 0 },
    AchatsServices: {scope1: 0,scope2: 0,scope3: 0 },
    TransportMarchandises: {scope1: 0,scope2: 0,scope3: 0 },
    TransportPersonnes: {scope1: 0,scope2: 0,scope3: 0 },
    TraitementDechets: {scope1: 0,scope2: 0,scope3: 0 },
  };

  const [dataByCategory, setDataByCategory] = useState(initialData);

  

  const sectorMapping = useMemo(() => ({
    'Combustibles': 'Combustibles',
    'Process et émissions fugitives': 'ProcessEmissionsFugitives',
    'UTCF': 'UTCF',
    'Electricité': 'Electricite',
    'Achats de biens': 'AchatsBiens',
    'Achats de services': 'AchatsServices',
    'Transport de marchandises': 'TransportMarchandises',
    'Transport de personnes': 'TransportPersonnes',
    'Traitement des déchets': 'TraitementDechets',
    '': ''
  }), []);

  const sectorDeMapping = useMemo(() => ({
    'Combustibles': 'Combustibles',
    'ProcessEmissionsFugitives': 'Process et émissions fugitives',
    'UTCF': 'UTCF',
    'Electricite': 'Electricité',
    'AchatsBiens': 'Achats de biens',
    'AchatsServices': 'Achats de services',
    'TransportMarchandises': 'Transport de marchandises',
    'TransportPersonnes': 'Transport de personnes',
    'TraitementDechets': 'Traitement des déchets',
    '': ''
  }), []);

    useEffect(() => {

      const fetchData = async () => {
        try {
          console.log(secteur1Array.length);
          const newDataByCategory = { ...dataByCategory };
          for (const secteur1Value of secteur1Array) {
            const trimmedSecteur1Value = secteur1Value.trim();
            const mappedSector = sectorMapping[trimmedSecteur1Value];
            if (!mappedSector) {
              console.warn('Mapped sector not found for:', trimmedSecteur1Value);
              continue; 
            }
    
            const response1 = await axios.get(`http://localhost:3001/scopes/getScope1?sector1=${trimmedSecteur1Value}`);
            const response2 = await axios.get(`http://localhost:3001/scopes/getScope2?sector1=${trimmedSecteur1Value}`);
            const response3 = await axios.get(`http://localhost:3001/scopes/getScope3?sector1=${trimmedSecteur1Value}`);
   
              newDataByCategory[mappedSector] = {
                ...newDataByCategory[mappedSector],
                scope1: newDataByCategory[mappedSector].scope1 + response1.data.scope1,
                scope2: newDataByCategory[mappedSector].scope2 + response2.data.scope2,
                scope3: newDataByCategory[mappedSector].scope3 + response3.data.scope3
              };
    
          }
          setDataByCategory(newDataByCategory);
        } catch (error) {
          console.error('Error fetching data for stats:', error);
        }
      };
      fetchData();
    }, []);

    let sumOfScope1 = 0; let sumOfScope2 = 0; let sumOfScope3 = 0;  

    for (const key in dataByCategory) {
      if (Object.hasOwnProperty.call(dataByCategory, key)) sumOfScope1 += dataByCategory[key].scope1;
    }
    for (const key in dataByCategory) {
      if (Object.hasOwnProperty.call(dataByCategory, key)) sumOfScope2 += dataByCategory[key].scope2;
    }
    for (const key in dataByCategory) {
      if (Object.hasOwnProperty.call(dataByCategory, key)) sumOfScope3 += dataByCategory[key].scope3;
    }



    const scope1Labels = Object.keys(dataByCategory).filter(
      label => dataByCategory[label].scope1 !== 0
    );

    const scope2Labels = Object.keys(dataByCategory).filter(
      label => dataByCategory[label].scope2 !== 0
    );

    const scope3Labels = Object.keys(dataByCategory).filter(
      label => dataByCategory[label].scope3 !== 0
    );
 
    
    // SCOPE 1
    const chart3Data = useMemo(() => {
      const scope1Data = scope1Labels.map(label => ({
        label,
        value: parseFloat(((dataByCategory[label].scope1 / sumOfScope1) * 100).toFixed(2)) // Convert to number
      }));
    
      return {
        labels: scope1Data.map(item => sectorDeMapping[item.label.trim()]),
        data: scope1Data.map(item => item.value),
      };
    }, [scope1Labels, sumOfScope1, dataByCategory, sectorDeMapping]);

    // SCOPE 2
    const chart1Data = useMemo(() => {
      const scope2Data = scope2Labels.map(label => ({
        label,
        value: parseFloat(((dataByCategory[label].scope2 / sumOfScope2) * 100).toFixed(2)) // Convert to number
      }));
    
      return {
        labels: scope2Data.map(item => sectorDeMapping[item.label.trim()]),
        data: scope2Data.map(item => item.value),
      };
    }, [scope2Labels, sumOfScope2, dataByCategory, sectorDeMapping]);

    // SCOPE 3
    const chart2Data = useMemo(() => {
      const scope3Data = scope3Labels.map(label => ({
        label,
        value: parseFloat(((dataByCategory[label].scope3 / sumOfScope3) * 100).toFixed(2)) // Convert to number
      }));
    
      return {
        labels: scope3Data.map(item => sectorDeMapping[item.label.trim()]),
        data: scope3Data.map(item => item.value),
      };
    }, [scope3Labels, sumOfScope3, dataByCategory, sectorDeMapping]);


    
  const myChartRef = useRef(null);
  const myChart2Ref = useRef(null);
  const myChart3Ref = useRef(null);

  useEffect(() => {
    const numUniqueCategories = chart1Data.data.length;
    const backgroundColors = generateColors(numUniqueCategories);
    const borderColors = generateColors(numUniqueCategories);
    if (myChartRef.current !== null) {
      const myChart = new Chart(myChartRef.current, {
      type: "bar",
      data: {
        labels: chart1Data.labels,
        datasets: [
          {
            label: "Pourcentage",
            data: chart1Data.data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  
  
    return () => {
      myChart.destroy();
    };
  }
  }, [chart1Data.labels, chart1Data.data, show1Chart]); 
  
  useEffect(() => {
    const numUniqueCategories = chart2Data.data.length;
    const backgroundColors = generateColors(numUniqueCategories);
    const borderColors = generateColors(numUniqueCategories);
    if (myChart2Ref.current !== null) {
    const myChart = new Chart(myChart2Ref.current, {
      type: "bar",
      data: {
        labels: chart2Data.labels,
        datasets: [
          {
            label: "Pourcentage",
            data: chart2Data.data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  
  
    return () => {
      myChart.destroy();
    };
  }
  }, [chart2Data.labels, chart2Data.data, show2Chart]);
  useEffect(() => {
    const numUniqueCategories = chart3Data.data.length;
    const backgroundColors = generateColors(numUniqueCategories);
    const borderColors = generateColors(numUniqueCategories);
    if (myChart3Ref.current !== null) {
    const myChart = new Chart(myChart3Ref.current, {
      type: "bar",
      data: {
        labels: chart3Data.labels,
        datasets: [
          {
            label: "Pourcentage",
            data: chart3Data.data,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 1
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  
    return () => {
      myChart.destroy();
    };
  }
  }, [chart3Data.data, chart3Data.labels, show3Chart]);

  useEffect(() => {
    const ul = document.querySelector(" .details ul");
    const ul2 = document.querySelector(" .details2 ul");
    const ul3 = document.querySelector(" .details3 ul");

    populateUl(ul, chart1Data);
    populateUl(ul2, chart2Data);
    populateUl(ul3, chart3Data);
  }, [chart3Data, chart1Data, chart2Data]);


  const handleCalcAgain = () => {
     localStorage.removeItem('totalSum'); 
     localStorage.removeItem('formResults');
     localStorage.setItem('isSubmitted', false); 
     window.location.reload();
    };
    
  return (
    <div>
     {isSubmitted ? (
    <div className="histo">
      <div className="container">
      <h1 style={{ display: 'flex', flexDirection: 'column',fontWeight: 700, fontSize: '30px', alignItems: 'center', color: '#031273' }}>
      Statistiques des répartitions des secteurs globaux par scope :</h1>
      
        <div className="scopes">
            <div className="scopes1">
              <p>Scope 1 :  </p>
          
    
              <div className="chart-container">
                  <canvas ref={myChart3Ref}></canvas>
                </div>
              <div className="text">
                <ul className="details3"></ul>
              </div>
           
             </div>
              <div className="scopes1">
                <p>Scope 2 :  </p>
             
              <div className="chart-container">
                  <canvas ref={myChartRef}></canvas>
                </div>
                <div className="text">
                  <ul className="details"></ul>
             
              </div>
 </div> </div>

              <div className="scopes3">
                <p>Scope 3 :  </p>
            
              <div className="chart-container">
                  <canvas ref={myChart2Ref}></canvas>
                </div>
                <div className="text">
                  <ul className="details2"></ul>
                </div>
              
              </div>
        
      </div>
     
    </div>

    ) : (
      ''
    )
    }
    </div>
  );
});
    

export default Histogram;

