import React, { useEffect, useState } from 'react';
//mport { calc } from '../../../../back-end/controllers/calc';
import Tableau from "./MyForm2"


function MyForm() {

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

  const [tableData, setTableData] = useState(null);


  

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
  const [posteOptions, setposteOptions] = useState([]);
  const [ligneOptions, setligneOptions] = useState([]);
  const [uniteOptions, setuniteOptions] = useState([]);
  const [NomAttributOptions, setNomAttributOptions] = useState([]);
  const [NomFrontiereOptions, setNomFrontiereOptions] = useState([]);
  const [contributeurOptions, setcontributeurOptions] = useState([]);
  const [localisationOptions, setlocalisationOptions] = useState([]);
  const [souslocalisationOptions, setsouslocalisationOptions] = useState([]);










/////////////////////
const fetchProductData = (produit,quantite,unite,NomAttribut,NomFrontiere,contributeur,localisation,souslocalisation,secteur1,secteur2,secteur3,secteur4,secteur5) => {
  fetch(`http://localhost:3001/api/products?nom=${encodeURIComponent(produit)}&Secteur1=${encodeURIComponent(secteur1)}&Secteur2=${encodeURIComponent(secteur2)}&Secteur3=${encodeURIComponent(secteur3)}&Secteur4=${encodeURIComponent(secteur4)}&Secteur5=${encodeURIComponent(secteur5)}&Unite_français=${encodeURIComponent(unite)}&Nom_attribut_français=${encodeURIComponent(NomAttribut)}&Nom_frontière_français=${encodeURIComponent(NomFrontiere)}&Contributeur=${encodeURIComponent(contributeur)}&Localisation_geographique=${encodeURIComponent(localisation)}&Sous_localisation_geographique_français=${encodeURIComponent(souslocalisation)}&Quantite=${encodeURIComponent(quantite)}`)

    .then(response => response.json())
    .then(datatable => {
      console.log("Product Data:", datatable);
      setTableData(datatable);
      // Handle additional state updates or operations based on the fetched data
    })
    .catch(error => console.error('Failed to fetch product data:', error));
};

useEffect(() => {
  if ( produit && quantite &&unite && NomAttribut && NomFrontiere && contributeur && localisation && souslocalisation && secteur1 && secteur2 && secteur3 && secteur4 && secteur5 ) { // Only fetch data if a product is selected
    fetchProductData(produit,quantite,unite,NomAttribut,NomFrontiere,contributeur,localisation,souslocalisation,secteur1,secteur2,secteur3,secteur4,secteur5);

  }
}, [ produit,quantite,unite,NomAttribut,NomFrontiere,contributeur,localisation,souslocalisation,secteur1,secteur2,secteur3,secteur4,secteur5]); 
////////////////////











  async function fetchOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getSector2Options?sector1=${encodeURIComponent(secteur1)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (secteur1) { 
      fetchOptions(`http://localhost:3001/getters/getSector2Options?sector1=${encodeURIComponent(secteur1)}`, setSecteur2Options);

    }
  }, [secteur1]);  

    
  useEffect(() => {
    if (secteur1 && secteur2) { 
      console.log('hna')
      fetch3Options(`http://localhost:3001/getters/getSector3Options?sector1=${encodeURIComponent(secteur1)}&sector2=${encodeURIComponent(secteur2)}`, setSecteur3Options);
      console.log('setSecteur3Options',secteur3Options)

    }
  }, [secteur1, secteur2]);  
  async function fetch3Options(url, update2State) {
    try {
      let sec2=encodeURIComponent(secteur2);
      const response = await fetch(`http://localhost:3001/getters/getSector3Options?sector1=${encodeURIComponent(secteur1)}&sector2=${sec2}`);
      const data2 = await response.json();
      update2State(data2); // Directly updating state passed as a function
      console.log('data2',data2)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

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


  async function fetchposteOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getPosteOptions?nom=${encodeURIComponent(produit)}&typeLigne=${encodeURIComponent(ligne)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (produit && ligne) { 
      fetchposteOptions(`getters/getPosteOptions?nom=${encodeURIComponent(produit)}&typeLigne=${encodeURIComponent(ligne)}`, setposteOptions);

    }
  }, [produit , ligne]);  

  async function fetchligneOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getligneOptions?nom=${encodeURIComponent(produit)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (produit) { 
      fetchligneOptions(`getters/getligneOptions?nom=${encodeURIComponent(produit)}`, setligneOptions);

    }
  }, [produit]); 
  
  async function fetchuniteOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getunitoptions?nom=${encodeURIComponent(produit)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (produit) { 
      fetchuniteOptions(`getters/getunitoptions?nom=${encodeURIComponent(produit)}`, setuniteOptions);

    }
  }, [produit]); 

  async function fetchattributOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getnomattributoptions?nom=${encodeURIComponent(produit)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (produit) { 
      fetchattributOptions(`getters/getnomattributoptions?nom=${encodeURIComponent(produit)}`, setNomAttributOptions);
    }
  }, [produit]); 

  
  async function fetchfrontiereOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getnomfrontiereoptions?nom=${encodeURIComponent(produit)}&NomAttribut=${encodeURIComponent(NomAttribut)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (produit && NomAttribut) { 
      fetchfrontiereOptions(`getters/getnomfrontiereoptions?nom=${encodeURIComponent(produit)}&NomAttribut=${encodeURIComponent(NomAttribut)}`, setNomFrontiereOptions);
    }
  }, [produit , NomAttribut]); 
  
  async function fetchcontributeurOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getcontributeuroptions?nom=${encodeURIComponent(produit)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (produit && NomAttribut && NomFrontiere) { 
      fetchcontributeurOptions(`getters/getcontributeuroptions?nom=${encodeURIComponent(produit)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}`, setcontributeurOptions);
    }
  }, [produit , NomAttribut , NomFrontiere]); 


  
  async function fetchlocalisationOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getlocalisationoptions?nom=${encodeURIComponent(produit)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}&contributeur=${encodeURIComponent(contributeur)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (produit && NomAttribut && NomFrontiere && contributeur) { 
      fetchlocalisationOptions(`getters/getlocalisationoptions?nom=${encodeURIComponent(produit)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}&contributeur=${encodeURIComponent(contributeur)}`, setlocalisationOptions);
    }
  }, [produit , NomAttribut , NomFrontiere , contributeur]); 
  
  async function fetchsouslocalisationOptions(url, updateState) {
    try {
      const response = await fetch(`http://localhost:3001/getters/getsouslocalisationoptions?nom=${encodeURIComponent(produit)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}&contributeur=${encodeURIComponent(contributeur)}&localisation=${encodeURIComponent(localisation)}`);
      const data = await response.json();
      updateState(data); // Directly updating state passed as a function
      console.log('data',data)

    } catch (error) {
      console.error('Failed to fetch options:', error);
    }
  }

  useEffect(() => {
    if (produit && NomAttribut && NomFrontiere && contributeur && localisation) { 
      fetchsouslocalisationOptions(`getters/getsouslocalisationoptions?nom=${encodeURIComponent(produit)}&NomAttribut=${encodeURIComponent(NomAttribut)}&NomFrontiere=${encodeURIComponent(NomFrontiere)}&contributeur=${encodeURIComponent(contributeur)}&localisation=${encodeURIComponent(localisation)}`, setsouslocalisationOptions);
    }
  }, [produit , NomAttribut , NomFrontiere , contributeur , localisation]); 



  const [calcInfo, setCalcInfo] = useState({
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
    //verification: '',
});

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
/*
  const handleChange = (setter, fieldName) => (event) => {
    const value = event.target.value;
    setter(value);
    updateCalcInfo(fieldName, value);

    if (fieldName === 'nom') {
        localStorage.setItem('selectedProduct', value); // Persist selected product
    }
};
*/

const handleChange = (setter, fieldName) => event => {
  const { value } = event.target;
  setter(value);
  localStorage.setItem(fieldName, value); // Store each field's value in localStorage
};

  /* ////////////////////
  const handleChange = (setter, fieldName) => (event) => {
      const value = event.target.value;
      setter(value);
      updateCalcInfo(fieldName, value);
  };*/
/*
  const handleAddProduct = (e) => {
    e.preventDefault();
    const result = await handleCalcul(e); // Implement your calculation function
    setFormResults(prevResults => [...prevResults, result]);
    setTotalSum(prevSum => prevSum + result);
    setCalcInfo({
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
      // Reset other form fields as needed
    });
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const result = await handleCalcul(e); // Implement your calculation function
    setFormResults(prevResults => [...prevResults, result]);
    setTotalSum(prevSum => prevSum + result);
    setCalcInfo({
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
      // Reset other form fields as needed
    });
    alert(`Total sum: ${totalSum}`);
  };
*/


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
      setFormResults(prevResults => [...prevResults, result]);
      setTotalSum(prevSum => prevSum + result);
      setCalcInfo(prevCalcInfo => ({
        ...prevCalcInfo,
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
        // Reset other form fields as needed
      }));
      localStorage.setItem('totalSum', JSON.stringify(totalSum + result));
      window.location.reload();
    }).catch(error => {
      console.error('Error in handleAddProduct:', error);
    });
  };
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    handleCalcul(e)
      .then(result => {
        setFormResults(prevResults => [...prevResults, result]);
        setTotalSum(prevSum => prevSum + result);
        setCalcInfo(prevCalcInfo => ({
          ...prevCalcInfo,
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
          // Reset other form fields as needed
        }));
        alert(`Total sum: ${totalSum}`);
        // Clear totalSum from local storage
        localStorage.setItem('totalSum', JSON.stringify(0));
      })
      .catch(error => {
        console.error('Error in handleFinalSubmit:', error);
      });
  };
  
  

  return (
    <div>
      <form onSubmit={handleFinalSubmit}>
        <label htmlFor="secteur1">Secteur1:</label>
        <select id="sector1" name="secteur1" value={calcInfo.secteur1} onChange={handleChange(setSecteur1, 'secteur1')}>
          <option value="">--select--</option>
          {secteur1Options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        
        <br/>

        <label htmlFor="secteur2">Secteur2:</label>
        <select id="Secteur2" name="secteur2" value={secteur2} onChange={handleChange(setSecteur2, 'secteur2')}>
          <option value=" ">--select--</option>
          {secteur2Options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="secteur3">Secteur3:</label>
        <select id="Secteur3" name="secteur3" value={secteur3} onChange={handleChange(setSecteur3, 'secteur3')}>
          <option value=" ">--select--</option>
          {secteur3Options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="secteur4">Secteur4:</label>
        <select id="Secteur4" name="secteur4" value={secteur4} onChange={handleChange(setSecteur4, 'secteur4')}>
          <option value=" ">--select--</option>
          {secteur4Options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="secteur5">Secteur5:</label>
        <select id="Secteur5" name="secteur5" value={secteur5} onChange={handleChange(setSecteur5, 'secteur5')}>
  <option value=" ">--select--</option>
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

        <br/>


        <label htmlFor="nom">Nom du produit:</label>
        <select id="nom" name="nom" value={produit} onChange={handleChange(setproduit,'nom')}>
          <option value="">--select--</option>
          {produitOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="ligne">Nom de la ligne:</label>
        <select id="ligne" name="ligne" value={ligne} onChange={handleChange(setligne, 'ligne')}>
          <option value=" ">--select--</option>
          {ligneOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="poste">Nom du poste:</label>
        <select id="poste" name="poste" value={poste} onChange={handleChange(setposte, 'poste')}>
          <option value=" ">--select--</option>
          {posteOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="quantite">Quantité:</label>
        <input type="text" id="quantite" name="quantite" value={quantite} onChange={handleChange(setQuantite, 'quantite')}/><br/>

        <label htmlFor="unite">l'unite :</label>
        <select id="unite" name="unite" value={unite} onChange={handleChange(setunite, 'unite')}>
          <option value=" ">--select--</option>
          {uniteOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="NomAttribut">le nom de l'attribut :</label>
        <select id="NomAttribut" name="NomAttribut" value={NomAttribut} onChange={handleChange(setNomAttribut , 'NomAttribut')}>
          <option value=" ">--select--</option>
          {NomAttributOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>
        
        <label htmlFor="NomFrontiere">le nom de la frontiere :</label>
        <select id="NomFrontiere" name="NomFrontiere" value={NomFrontiere} onChange={handleChange(setNomFrontiere, 'NomFrontiere')}>
          <option value=" ">--select--</option>
          {NomFrontiereOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>
        
        <label htmlFor="contributeur">le contributeur:</label>
        <select id="contributeur" name="contributeur" value={contributeur} onChange={handleChange(setcontributeur, 'contributeur')}>
          <option value=" ">--select--</option>
          {contributeurOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>
        
        <label htmlFor="localisation">la localisation:</label>
        <select id="localisation" name="localisation" value={localisation} onChange={handleChange(setlocalisation,'localisation')}>
          <option value=" ">--select--</option>
          {localisationOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>

        <label htmlFor="souslocalisation">la sous localisation:</label>
        <select id="souslocalisation" name="souslocalisation" value={souslocalisation} onChange={handleChange(setsouslocalisation ,'souslocalisation')}>
          <option value=" ">--select--</option>
          {souslocalisationOptions.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <br/>
        <button onClick={handleAddProduct}>Add Product</button>
        <input type="submit" value="Submit" />
      </form>

      {tableData && <Tableau data={tableData }  facteur ={quantite} />} 


    </div>
  );
}

export default MyForm;