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

import React, { useEffect, useState } from 'react';

const Tableau = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const productName = localStorage.getItem('selectedProduct');
        console.log("productname", productName);
        if (!productName) {
            console.error("No product selected");
            return;
        }

        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/products?productName=${encodeURIComponent(productName)}`);
                const jsonData = await response.json();
                if (jsonData && jsonData.rows) {
                    setData(jsonData);
                } else {
                    console.log("No data returned for:", productName);
                }
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

