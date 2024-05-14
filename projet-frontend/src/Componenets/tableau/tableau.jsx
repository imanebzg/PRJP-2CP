import React, { useEffect, useState, useRef, useMemo, createRef } from 'react';
/*
const Tableau = ({ data , facteur }) => { // Destructure the data directly from props
    console.log("display data table : "+data.sums.Total_poste_non_decompose);
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
                            <td>{item.Total_poste_non_decompose}</td>
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

*/

const TablesComponent = () => {
    const [tables, setTables] = useState([]);


    useEffect(() => {
      const storedTables = localStorage.getItem('tables');
    
      if (storedTables) {
        const tablesArray = JSON.parse(storedTables);
        setTables(tablesArray);
      }
    }, []);


    return (
        <div className="tables-container">
            {tables.map((tableData, tableIndex) => (
                <div key={tableIndex} className="table-wrapper">
                    <h2>{tableData.rows[0].Secteur1}</h2>
                    <div style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black', margin: '20px 0' }}>
                            <thead>
                                <tr>
                                    <th>Type_poste</th>
                                    <th>CO2f</th>
                                    <th>CH4f</th>
                                    <th>N2O</th>
                                    <th>CO2b</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.rows.map((item, rowIndex) => (
                                    item.Type_poste ? (
                                        <tr key={rowIndex}>
                                            <td>{item.Type_poste}</td>
                                            <td>{(parseFloat(item.CO2f)).toFixed(2)}</td>
                                            <td>{(parseFloat(item.CH4f)).toFixed(2)}</td>
                                            <td>{(parseFloat(item.N2O)).toFixed(2)}</td>
                                            <td>{(parseFloat(item.CO2b)).toFixed(2)}</td>
                                        </tr>
                                    ) : null
                                ))}
                                <tr>
                                    <td>Sommes</td>
                                    <td>{(parseFloat(tableData.sums.CO2f)).toFixed(2)}</td>
                                    <td>{(parseFloat(tableData.sums.CH4f)).toFixed(2)}</td>
                                    <td>{(parseFloat(tableData.sums.N2O)).toFixed(2)}</td>
                                    <td>{(parseFloat(tableData.sums.CO2b)).toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TablesComponent;