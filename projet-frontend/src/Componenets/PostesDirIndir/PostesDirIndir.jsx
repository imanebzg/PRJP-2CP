import React, { useEffect, useState, useRef, useMemo  } from 'react';
import axios from 'axios'; 
import './PostesDirIndir.css';

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"2rem"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"1.5em"}
    >
      {percentage.toFixed(2)}%
    </text>
  );
};

const PostesDirIndir = React.memo(function PostesDirIndir({formResults,  percentage, colour }) {

  
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

  
  let isSubmitted = localStorage.getItem('isSubmitted');
  if (isSubmitted === 'true') {
    isSubmitted = true;
  } else {
    isSubmitted = false;
  }

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

  localStorage.setItem('formResults', JSON.stringify(initialFormResults));

  storedFormResults = initialFormResults;
} else {
  storedFormResults = JSON.parse(localStorage.getItem('formResults'));
}

  const secteur1Array = useMemo(() => storedFormResults.map(result => result.secteur1.trim()).filter(secteur1 => secteur1 !== ''), [storedFormResults]);


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

 
    
    const prcDir = (sumOfScope1 / (sumOfScope1 + sumOfScope2 + sumOfScope3)) * 100; 
    const prcInDir = ((sumOfScope2 + sumOfScope3) / (sumOfScope1 + sumOfScope2 + sumOfScope3)) * 100;
      
  const pctDir = cleanPercentage(prcDir);
  const pctInDir = cleanPercentage(prcInDir);
  const [random1, setRandom1] = useState({
    percentage: 0,
    colour: "hsl(0, 0%, 0%)"
  });
  const [random2, setRandom2] = useState({
    percentage: 0,
    colour: "hsl(0, 0%, 0%)"
  });

  useEffect(() => {
    generateRandomValues(1);
    generateRandomValues(2);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const generateRandomValues = (index) => {
    const rand = (n) => Math.random() * n;
    if (index === 1) {
      setRandom1({
        percentage: rand(100),
        colour: `hsl(${rand(360)}, ${rand(50) + 50}%, ${rand(30) + 20}%)`
      });
    } else if (index === 2) {
      setRandom2({
        percentage: rand(100),
        colour: `hsl(${rand(360)}, ${rand(50) + 50}%, ${rand(30) + 20}%)`
      });
    }
  };


  return (
    <div>
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" />
        <Circle colour={random1.colour} pct={pctDir} />
      </g>
      <Text percentage={pctDir} />
    </svg>
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="lightgrey" />
        <Circle colour={random2.colour} pct={pctInDir} />
      </g>
      <Text percentage={pctInDir} />
    </svg>
    </div>
    
  );
});

export default PostesDirIndir;