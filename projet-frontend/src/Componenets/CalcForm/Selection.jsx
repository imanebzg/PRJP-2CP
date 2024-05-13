 // Assurez-vous d'importer correctement Form2

 import React, { useEffect, useState } from 'react';
  import './form.css';
  import Tableau from "../tableau/tableau"
  import BilanForm from "../Datecomponent/BilanFom"
function Sele() {
 
  // useState to hold the fetched data
  
  const [formResults, setFormResults] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const [secteur1, setSecteur1] = useState('');
  const [secteur2, setSecteur2] = useState(''); 
  const [secteur3, setSecteur3] = useState('');
  const [secteur4, setSecteur4] = useState('');
  const [secteur5, setSecteur5] = useState('');
  const [produit, setproduit] = useState('');
  const [poste, setposte] = useState('');
  const [ligne, setligne] = useState('');
  const [unite, setunite] = useState('');
  const [NomAttribut, setNomAttribut] = useState('');
  const [NomFrontiere, setNomFrontiere] = useState('');
  const [contributeur, setcontributeur] = useState('');
  const [localisation, setlocalisation] = useState('');
  const [souslocalisation, setsouslocalisation] = useState('');
  const [quantite, setQuantite] = useState('');

  const [tableData, setTableData] = useState([]);


  const addTable = (newTable) => {
    const transformedTable = { ...newTable };
  setTableData([...tableData, transformedTable]);
  
  
  // Store in localStorage
  localStorage.setItem('tables', JSON.stringify([...tableData, transformedTable]));
  };

  const secteur1Options = [
    'Combustibles', 'Process et émissions fugitives', 'UTCF',
    'Electricité', 'Achats de biens', 'Transport de marchandises',
    'Transport de personnes', 'Traitement des déchets', 'Statistiques territoriales'
  ];

  // State to store options fetched for Secteur2
  const [secteur2Options, setSecteur2Options] = useState([]);
  const [secteur3Options, setSecteur3Options] = useState([]);
  const [secteur4Options, setSecteur4Options] = useState([]);
  const [secteur5Options, setSecteur5Options] = useState([]);
  const [produitOptions, setproduitOptions] = useState([]);
  const [uniteOptions, setuniteOptions] = useState([]);
  const [NomAttributOptions, setNomAttributOptions] = useState([]);
  const [NomFrontiereOptions, setNomFrontiereOptions] = useState([]);
  const [contributeurOptions, setcontributeurOptions] = useState([]);
  const [localisationOptions, setlocalisationOptions] = useState([]);
  const [souslocalisationOptions, setsouslocalisationOptions] = useState([]);

  const formatFloatingNumbers = (obj) => {
    const formattedObj = {};
    for (const key in obj) {
      const value = obj[key];
      if (!isNaN(value) && parseFloat(value) !== parseInt(value)) {
        formattedObj[key] = parseFloat(value).toFixed(2);
      } else {
        formattedObj[key] = value;
      }
    }
    return formattedObj;
  };
  


/////////////////////
const fetchProductData = (produit,quantite,unite,NomAttribut,NomFrontiere,contributeur,localisation,souslocalisation,secteur1,secteur2,secteur3,secteur4,secteur5) => {
  fetch(`http://localhost:3001/api/products?nom=${encodeURIComponent(produit)}&Secteur1=${encodeURIComponent(secteur1)}&Secteur2=${encodeURIComponent(secteur2)}&Secteur3=${encodeURIComponent(secteur3)}&Secteur4=${encodeURIComponent(secteur4)}&Secteur5=${encodeURIComponent(secteur5)}&Unite_français=${encodeURIComponent(unite)}&Nom_attribut_français=${encodeURIComponent(NomAttribut)}&Nom_frontière_français=${encodeURIComponent(NomFrontiere)}&Contributeur=${encodeURIComponent(contributeur)}&Localisation_geographique=${encodeURIComponent(localisation)}&Sous_localisation_geographique_français=${encodeURIComponent(souslocalisation)}&Quantite=${encodeURIComponent(quantite)}`)

    .then(response => response.json())
    .then(datatable => {
      //setTableData(datatable);
      // Handle additional state updates or operations based on the fetched data
      const formattedTableObject = formatFloatingNumbers(datatable);
      addTable(formattedTableObject);
    })
    .catch(error => console.error('Failed to fetch product data:', error));
};

useEffect(() => {
  if ( produit && quantite &&unite && NomAttribut && NomFrontiere && contributeur && localisation && souslocalisation && secteur1 && secteur2 && secteur3 && secteur4 && secteur5 ) { // Only fetch data if a product is selected
    fetchProductData(produit,quantite,unite,NomAttribut,NomFrontiere,contributeur,localisation,souslocalisation,secteur1,secteur2,secteur3,secteur4,secteur5);

  }
}, [ produit,quantite,unite,NomAttribut,NomFrontiere,contributeur,localisation,souslocalisation,secteur1,secteur2,secteur3,secteur4,secteur5]); 
////////////////////


//secteur2
  async function fetchOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getSector2Options?sector1=${encodeURIComponent(secteur1)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }
  useEffect(() => {
    if (secteur1) { 
      fetchOptions(`http://localhost:3001/getters/getSector2Options?sector1=${encodeURIComponent(secteur1)}`, setSecteur2Options);

    }
  }, [secteur1]);  
//secteur3
  useEffect(() => {
    if (secteur1 && secteur2) { 
      fetch3Options(`http://localhost:3001/getters/getSector3Options?sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}`, setSecteur3Options);

    }
  }, [secteur1, secteur2]);  
  async function fetch3Options(url, update2State) {
    try {
      let sec2=encodeURIComponent(secteur2);
      const response = await fetch(`http://localhost:3001/getters/getSector3Options?sector1=${encodeURIComponent(secteur1)}&sector2=${sec2}`);
      const data2 = await response.json();
      update2State(data2); // Directly updating state passed as a function

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }
//secteur4
  useEffect(() => {
    if (secteur1 && secteur2 && secteur3) { 
      fetch4Options(`http://localhost:3001/getters/getSector4Options?sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&&sector3=${encodeURIComponent(secteur3)}`, setSecteur4Options);
    }
  }, [secteur1, secteur2 ,secteur3]);  
  async function fetch4Options(url, update3State) {
    try {
      let sec3=encodeURIComponent(secteur3);
      let sec2=encodeURIComponent(secteur2);
      const response = await fetch(`http://localhost:3001/getters/getSector4Options?sector1=${encodeURIComponent(secteur1)}&sector2=${sec2}&sector3=${sec3}`);
      const data3 = await response.json();
      update3State(data3); // Directly updating state passed as a function

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }
//secteur5 
  useEffect(() => {
    if (secteur1 && secteur2 && secteur3  && secteur4) { 
      fetch5Options(`http://localhost:3001/getters/getSector5Options?sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&&sector3=${encodeURIComponent(secteur3)}&&sector4=${encodeURIComponent(secteur4)}`, setSecteur5Options);
    }
  }, [secteur1, secteur2 ,secteur3,secteur4]);  
  async function fetch5Options(url, update4State) {
    try {
      let sec4=encodeURIComponent(secteur4);
      let sec3=encodeURIComponent(secteur3);
      let sec2=encodeURIComponent(secteur2);
      const response = await fetch(`http://localhost:3001/getters/getSector5Options?sector1=${encodeURIComponent(secteur1)}&sector2=${sec2}&sector3=${sec3}&sector4=${sec4}`);
      const data4 = await response.json();
      update4State(data4); // Directly updating state passed as a function

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

//produit
  async function fetchproductOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getProductOptions?sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&&sector3=${encodeURIComponent(secteur3)}&&sector4=${encodeURIComponent(secteur4)}&&sector5=${encodeURIComponent(secteur5)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }
  useEffect(() => {
    if (secteur5) { 
      fetchproductOptions(`/getters/getProductOptions?sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&&sector3=${encodeURIComponent(secteur3)}&&sector4=${encodeURIComponent(secteur4)}&&sector5=${encodeURIComponent(secteur5)}`, setproduitOptions);
    }
  }, [secteur5]);  


//unite
  async function fetchuniteOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getunitoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }
  useEffect(() => {
    if (secteur1 && secteur2 && secteur3  && secteur4 && secteur5 && produit) { 
      fetchuniteOptions(`http://localhost:3001/getters/getunitoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}`, setuniteOptions);
    }
  }, [secteur1, secteur2 ,secteur3,secteur4 , secteur5 , produit]);  

//attribut
  async function fetchattributOptions(url, updateState) {
    try {
      const response = await fetch( `http://localhost:3001/getters/getnomattributoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}`);
     
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }
  useEffect(() => {
    if (secteur1 && secteur2 && secteur3  && secteur4 && secteur5 && produit && unite) { 
      fetchattributOptions(`http://localhost:3001/getters/getnomattributoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}`, setNomAttributOptions);
    }
  }, [secteur1, secteur2 ,secteur3,secteur4 , secteur5 , produit , unite]); 

//frontiere
  async function fetchfrontiereOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getnomfrontiereoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}&NomAttribut=${encodeURIComponent(NomAttribut)}` );
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }
  useEffect(() => {
    if (secteur1 && secteur2 && secteur3  && secteur4 && secteur5 && produit && unite && NomAttribut) { 
      fetchfrontiereOptions(`http://localhost:3001/getters/getnomfrontiereoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}&NomAttribut=${encodeURIComponent(NomAttribut)}`, setNomFrontiereOptions);
    }
  }, [secteur1, secteur2 ,secteur3,secteur4 , secteur5 , produit , unite , NomAttribut]); 

//contributeur
  async function fetchcontributeurOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getcontributeuroptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)
    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (secteur1 && secteur2 && secteur3  && secteur4 && secteur5 && produit && unite && NomAttribut && NomFrontiere) { 
      fetchcontributeurOptions(`http://localhost:3001/getters/getcontributeuroptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}`, setcontributeurOptions);
    }
  }, [secteur1, secteur2 ,secteur3,secteur4 , secteur5 , produit , unite , NomAttribut , NomFrontiere]); 


//localisation
  async function fetchlocalisationOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getlocalisationoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}&contributeur=${encodeURIComponent(contributeur)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  } 
  useEffect(() => {
    if (secteur1 && secteur2 && secteur3  && secteur4 && secteur5 && produit && unite && NomAttribut && NomFrontiere && contributeur) { 
      fetchlocalisationOptions(`http://localhost:3001/getters/getlocalisationoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}&contributeur=${encodeURIComponent(contributeur)}`, setlocalisationOptions);
    }
  }, [secteur1, secteur2 ,secteur3,secteur4 , secteur5 , produit , unite , NomAttribut , NomFrontiere , contributeur]); 


// sous localisation 
  async function fetchsouslocalisationOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getsouslocalisationoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}&contributeur=${encodeURIComponent(contributeur)}&localisation=${encodeURIComponent(localisation)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (secteur1 && secteur2 && secteur3  && secteur4 && secteur5 && produit && unite && NomAttribut && NomFrontiere && contributeur && localisation) { 
      fetchsouslocalisationOptions(`http://localhost:3001/getters/getsouslocalisationoptions?nom=${encodeURIComponent(produit)}&sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}&sector3=${encodeURIComponent(secteur3)}&sector4=${encodeURIComponent(secteur4)}&sector5=${encodeURIComponent(secteur5)}&unite=${encodeURIComponent(unite)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}&contributeur=${encodeURIComponent(contributeur)}&localisation=${encodeURIComponent(localisation)}`, setsouslocalisationOptions);
    }
  }, [secteur1, secteur2 ,secteur3,secteur4 , secteur5 , produit , unite , NomAttribut , NomFrontiere , contributeur , localisation]); 




  const [calcInfo, setCalcInfo] = useState({
    secteur1: '',
    secteur2: '',
    secteur3: '',
    secteur4: '',
    secteur5: '',
    nom: '',
    quantite: '',
    unite: '',
    NomAttribut: '',
    NomFrontiere: '',
    contributeur: '', 
    localisation: '',
    souslocalisation: ''
});
// frontend/script.js

const saveTotalSumToDatabase = async () => {
  const company_id = localStorage.getItem('userEmail'); 
  const totalSum = localStorage.getItem('totalSum').toString(); 
  console.log("totalSum",totalSum);
  
  const start_date = localStorage.getItem('start_date');
  const end_start = localStorage.getItem('end_date');
  try {
    const response = await fetch('http://localhost:3001/bilans/history', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({company_id , totalSum , start_date , end_start  })
    });
    if (response.ok) {
      console.log('Total sum saved to database successfully');
    } else {
      console.error('Error saving total sum to database');
    }
  } catch (error) {
    console.error('Error saving total sum to database: ', error);
  }
};


/*
    const handleCalcul = async (event) => {
      event.preventDefault();
      console.log(JSON.stringify(calcInfo));
      try {
        const response = await fetch('http://localhost:3001/calc/bilan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(calcInfo)
        });

        const data = await response.json();
        if (response.ok) {
          return (data.carbonBalance);

        }
      } catch (error) {

      }
    }
*/

const handleCalcul = (event) => {
  event.preventDefault();
  console.log(JSON.stringify(calcInfo));

  return new Promise((resolve, reject) => {
    fetch('http://localhost:3001/calc/bilan', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(calcInfo)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        resolve(data.carbonBalance);
      })
      .catch(error => {
        console.error('Error in handleCalcul:', error);
        reject(error);
      });
  });
};

    const updateCalcInfo = (field, value) => {
      setCalcInfo(prev => ({ ...prev, [field]: value }));
  };


  const handleChange = (setter, fieldName) => (event) => {
    const value = event.target.value;
    setter(value);
    updateCalcInfo(fieldName, value);
};


 

  // Load totalSum from local storage on component mount
  useEffect(() => {
    const savedTotalSum = JSON.parse(localStorage.getItem('totalSum'));
    if (savedTotalSum) {
      setTotalSum(savedTotalSum);
    }
  }, []);
 
  const handleAddProduct = (e) => {
    e.preventDefault();
    handleCalcul(e).then(result => {
      const newCalcInfo = { ...calcInfo }; // Create a copy of current calcInfo
      const updatedFormResults = [...formResults, newCalcInfo];
      setFormResults(updatedFormResults); // Add calcInfo to formResults
      setTotalSum(prevSum => prevSum + result);
      setCalcInfo({
        secteur1: '',
        secteur2: '',
        secteur3: '',
        secteur4: '',
        secteur5: '',
        nom: '',
        quantite: '',
        unite: '',
        NomAttribut: '',
        NomFrontiere: '',
        contributeur: '', 
        localisation: '',
        souslocalisation: ''
      });
      setSecteur1('');
      setSecteur2('');
      setSecteur3('');
      setSecteur4('');
      setSecteur5('');
      setproduit('');
      setunite('');
      setNomAttribut('');
      setNomFrontiere('');
      setcontributeur('');
      setlocalisation('');
      setsouslocalisation('');
      setQuantite('');
  

      // Save formResults to local storage
      localStorage.setItem('formResults', JSON.stringify(updatedFormResults));
      localStorage.setItem('totalSum', JSON.stringify(totalSum + result));
      setSelectedScope('form-1');
      //window.location.reload();
    }).catch(error => {
      console.error('Error in handleAddProduct:', error);
    });
  };
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    saveTotalSumToDatabase();
    handleCalcul(e)
      .then ( result => {
        const newCalcInfo = { ...calcInfo }; // Create a copy of current calcInfo
        const updatedFormResults = [...formResults, newCalcInfo];
        setFormResults(updatedFormResults); // Add calcInfo to formResults
        setTotalSum(prevSum => prevSum + result);
        setCalcInfo({
          secteur1: '',
          secteur2: '',
          secteur3: '',
          secteur4: '',
          secteur5: '',
          nom: '',
          quantite: '',
          unite: '',
          NomAttribut: '',
          NomFrontiere: '',
          contributeur: '', 
          localisation: '',
          souslocalisation: ''
          // Reset other form fields as needed
        });
          
        setSecteur1('');
        setSecteur2('');
        setSecteur3('');
        setSecteur4('');
        setSecteur5('');
        setproduit('');
        setunite('');
        setNomAttribut('');
        setNomFrontiere('');
        setcontributeur('');
        setlocalisation('');
        setsouslocalisation('');
        setQuantite('');
        
        // Clear totalSum from local storage
        localStorage.setItem('totalSum', JSON.stringify(totalSum + result));
        setTimeout(() => {
          localStorage.removeItem('totalSum');
          localStorage.setItem('isSubmitted', false); 
          localStorage.removeItem('tables'); 
          localStorage.removeItem('formResults');
          window.location.reload();
        }, 60 * 1000); // 5 minutes in milliseconds
        // Save formResults to local storage
        localStorage.setItem('formResults', JSON.stringify([...formResults, newCalcInfo]));
        localStorage.setItem('isSubmitted', true);
        localStorage.setItem('tables', JSON.stringify(tableData));
        window.location.reload(); 
      })
      .catch(error => {
        console.error('Error in handleFinalSubmit:', error);
      });
   

     
  };
  
  const [selectedScope, setSelectedScope] = useState('form-1');

  const handleRadioChange = (event) => {
    setSelectedScope(event.target.value);
  };
  return (
    <div>


    <BilanForm />

    <div className="Selectionner">
      <p>  Remplissez toutes les informations necessaires aux calculs: </p>
       <div className="SELECTION">
        <div className="radio-input">
          <input type="hidden" id="selectedScope" value={selectedScope} />

          {/* Radio buttons with labels */}
          <label>
            <input
              type="radio"
              value="form-1"
              name="value-radio"
              id="value-1"
              onChange={handleRadioChange}
              checked={selectedScope === 'form-1'} // Set checked based on state
            />
            <span>Sous Secteurs</span>
          </label>
          <label>
            <input
              type="radio"
              value="form-2"
              name="value-radio"
              id="value-2"
              onChange={handleRadioChange}
              checked={selectedScope === 'form-2'} // Set checked based on state
            />
            <span>Spécifications Activité</span>
          </label>

          <label>
            <input
              type="radio"
              value="form-3"
              name="value-radio"
              id="value-3"
              onChange={handleRadioChange}
              checked={selectedScope === 'form-3'} // Set checked based on state
            />
            <span>Autres</span>
          </label>
         
    
        </div>
 

      <div id="form-container" >
      {selectedScope === 'form-1' && (
        <div id="form1">
           <div className="formulaire">
     

           <form >
        <label htmlFor="secteur1">Secteur général:</label>
        <select id="sector1" name="secteur1" value={calcInfo.secteur1} onChange={handleChange(setSecteur1, 'secteur1')}>
          <option value="">--select--</option>
          {secteur1Options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        
        <br/>

        <label htmlFor="secteur2">Sous secteur 1:</label>
        <select id="Secteur2" name="secteur2" value={secteur2} onChange={handleChange(setSecteur2, 'secteur2')}>
          <option value=" ">--select--</option>
          {secteur2Options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="secteur3">Sous secteur 2:</label>
        <select id="Secteur3" name="secteur3" value={secteur3} onChange={handleChange(setSecteur3, 'secteur3')}>
          <option value=" ">--no option--</option>
          {secteur3Options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="secteur4">Sous secteur 3:</label>
        <select id="Secteur4" name="secteur4" value={secteur4} onChange={handleChange(setSecteur4, 'secteur4')}>
          <option value=" ">--no option--</option>
          {secteur4Options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="secteur5">Sous secteur 4:</label>
        <select id="Secteur5" name="secteur5" value={secteur5} onChange={handleChange(setSecteur5, 'secteur5')}>
  <option value=" ">--no option--</option>
  {secteur5Options.length > 0 ? (
    <>
      <option value=" " disabled hidden>Empty</option>
      {secteur5Options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </>
  ) : (
    <option value=" " disabled>No options available</option>
  )}
</select>
        </form>
        </div>
       
        </div> )}




        {selectedScope === 'form-2' && (
        <div id="form2">
         <div className="formulaire">

<form >
<label htmlFor="nom">Nom de l'Activité:</label>
        <select id="nom" name="nom" value={produit} onChange={handleChange(setproduit,'nom')}>
          <option value="">--no option--</option>
          {produitOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>


        <label htmlFor="quantite">Quantité:</label>
        <input type="text" id="quantite" name="quantite" value={quantite} onChange={handleChange(setQuantite, 'quantite')}/><br/>

        <label htmlFor="unite">l'unite :</label>
        <select id="unite" name="unite" value={unite} onChange={handleChange(setunite, 'unite')}>
          <option value=" ">--no option--</option>
          {uniteOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>
  </form>
  </div>
        </div>
      )}




{selectedScope === 'form-3' && (
        <div id="form3">
          <div className="formulaire">
     
      <form>
      <label htmlFor="NomAttribut">le nom de l'attribut :</label>
        <select id="NomAttribut" name="NomAttribut" value={NomAttribut} onChange={handleChange(setNomAttribut , 'NomAttribut')}>
          <option value=" ">--no option--</option>
          {NomAttributOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>
        
        <label htmlFor="NomFrontiere">le nom de la frontiere :</label>
        <select id="NomFrontiere" name="NomFrontiere" value={NomFrontiere} onChange={handleChange(setNomFrontiere, 'NomFrontiere')}>
          <option value=" ">--no option--</option>
          {NomFrontiereOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>
        
        <label htmlFor="contributeur">le contributeur:</label>
        <select id="contributeur" name="contributeur" value={contributeur} onChange={handleChange(setcontributeur, 'contributeur')}>
          <option value=" ">--no option--</option>
          {contributeurOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>
        
        <label htmlFor="localisation">la localisation:</label>
        <select id="localisation" name="localisation" value={localisation} onChange={handleChange(setlocalisation,'localisation')}>
          <option value=" ">--no option--</option>
          {localisationOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="souslocalisation">la sous localisation:</label>
        <select id="souslocalisation" name="souslocalisation" value={souslocalisation} onChange={handleChange(setsouslocalisation ,'souslocalisation')}>
          <option value=" ">--no option--</option>
          {souslocalisationOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>
        <button onClick={handleAddProduct}className="btn1"style={{ margin: '0.3125rem' }}>Ajouter activité</button>
        <button onClick={handleFinalSubmit} className="btn2" > Voir le resultat</button> </form>
      </div>
  
        </div>
      )}
       
       </div>
    </div> </div>
    </div>

  );
}

export default Sele;