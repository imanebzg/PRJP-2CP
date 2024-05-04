/*import React, { useEffect, useState } from 'react';

const Tableau = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch the product name from localStorage
        const productName = localStorage.getItem('selectedProduct');
        console.log("productname",productName)
        if (!productName) {
            console.error("No product selected");
            console.log("ici1")
            return;

        }

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/products?nom=${encodeURIComponent(productName)}`);
                console.log("ici2")
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    if (!data) return <div>Loading...</div>;

    return (
        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <table style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: '10px',
                margin: '20px 0'
            }}>
                <thead>
                    <tr>
                        <th style={{
                            padding: '8px',
                            textAlign: 'left',
                            backgroundColor: 'rgba(193, 193, 193, 0.4)',
                            color: 'black',
                            border: '1.5px solid rgba(193, 193, 193, 0.4)',
                            fontWeight: 300
                        }}>Postes</th>
                        <th>CO2f</th>
                        <th>CH4f</th>
                        <th>N2O</th>
                        <th>CO2b</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.Type_poste}</td>
                            <td>{parseFloat(row.CO2f).toFixed(3)}</td>
                            <td>{parseFloat(row.CH4f).toFixed(3)}</td>
                            <td>{parseFloat(row.N2O).toFixed(3)}</td>
                            <td>{parseFloat(row.CO2b).toFixed(3)}</td>
                            <td style={{ backgroundColor: '#E8EFFB' }}>{parseFloat(row.Total_poste_non_decompose).toFixed(3)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tableau;*/

/* //yemchi kima yhb
import React, { useEffect, useState } from 'react';

const Tableau = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      
        const productName = localStorage.getItem('nom');
        const Type_Ligne = localStorage.getItem('ligne') || '';
        const Nom_attribut_français = localStorage.getItem('Nom_attribut_français') || '';
        const Nom_frontière_français = localStorage.getItem('Nom_frontière_français') || '';
        const Secteur1 = localStorage.getItem('secteur1') || '';
        const Secteur2 = localStorage.getItem('secteur2') || '';
        const Secteur3 = localStorage.getItem('secteur3') || '';
        const Secteur4 = localStorage.getItem('secteur4') || '';
        const Secteur5 = localStorage.getItem('secteur5') || '';
        const Unite_français = localStorage.getItem('unite') || '';
        const Contributeur = localStorage.getItem('contributeur') || '';
        const Localisation_geographique = localStorage.getItem('localisation') || '';
        const Sous_localisation_geographique_français = localStorage.getItem('souslocalisation') || '';
        const Type_poste = localStorage.getItem('poste') || '';
        const Quantite = localStorage.getItem('quantite') || '';

        console.log("productname", productName);

        if (!productName) {
            console.error("No product selected");
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/products?nom=${encodeURIComponent(productName)}&Secteur1=${encodeURIComponent(Secteur1)}&Secteur2=${encodeURIComponent(Secteur2)}&Secteur3=${encodeURIComponent(Secteur3)}&Secteur4=${encodeURIComponent(Secteur4)}&Secteur5=${encodeURIComponent(Secteur5)}&Unite_français=${encodeURIComponent(Unite_français)}&Nom_attribut_français=${encodeURIComponent(Nom_attribut_français)}&Nom_frontière_français=${encodeURIComponent(Nom_frontière_français)}&Contributeur=${encodeURIComponent(Contributeur)}&Localisation_geographique=${encodeURIComponent(Localisation_geographique)}&Sous_localisation_geographique_français=${encodeURIComponent(Sous_localisation_geographique_français)}&Quantite=${encodeURIComponent(Quantite)}`);
                if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              
                const jsonData = await response.json();
                console.log("response tableau",response);
                console.log("jsonData tableau before if",jsonData);

                if (jsonData && jsonData.rows) {
                    setData(jsonData);
                    console.log("jsonData tableau",jsonData);
                } else {
                    console.log("No data returned for:", productName);
                }
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, [productName]);

    if (!data) return <div>Loading...</div>;

    return (
        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <table style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: '10px',
                margin: '20px 0'
            }}>
                <thead>
                    <tr>
                        <th>Postes</th>
                        <th>CO2f</th>
                        <th>CH4f</th>
                        <th>N2O</th>
                        <th>CO2b</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.Type_poste}</td>
                            <td>{parseFloat(row.CO2f).toFixed(3)}</td>
                            <td>{parseFloat(row.CH4f).toFixed(3)}</td>
                            <td>{parseFloat(row.N2O).toFixed(3)}</td>
                            <td>{parseFloat(row.CO2b).toFixed(3)}</td>
                            <td style={{ backgroundColor: '#E8EFFB' }}>{parseFloat(row.Total_poste_non_decompose).toFixed(3)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tableau;

*/
import React from 'react';

const Tableau = ({ data , facteur }) => { // Destructure the data directly from props
    return (
        <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
            <table style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: '10px',
                margin: '20px 0'
            }}>
                <thead>
                    <tr>
                        <th>Postes</th>
                        <th>CO2f</th>
                        <th>CH4f</th>
                        <th>N2O</th>
                        <th>CO2b</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((item, index) => ( // Make sure 'data' is the array
                        <tr key={index}>
                            <td>{item.Type_poste}</td>
                            <td>{(parseFloat(item.CO2f).toFixed(3) * parseFloat(facteur)).toFixed(3)}</td>
                            <td>{(parseFloat(item.CH4f).toFixed(3) * parseFloat(facteur)).toFixed(3)}</td>
                            <td>{(parseFloat(item.N2O).toFixed(3) * parseFloat(facteur)).toFixed(3)}</td>
                            <td>{(parseFloat(item.CO2b).toFixed(3) * parseFloat(facteur)).toFixed(3)}</td>
                            <td style={{ backgroundColor: '#E8EFFB' }}>{(parseFloat(item.Total_poste_non_decompose).toFixed(3) * parseFloat(facteur)).toFixed(3)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tableau;
