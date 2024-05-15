import React, { useEffect, useState, useRef, useMemo, createRef } from 'react';
import './tableau.css'


const TablesComponent = () => {
    const [tables, setTables] = useState([]);


    useEffect(() => {
      const storedTables = localStorage.getItem('tables');
    
      if (storedTables) {
        const tablesArray = JSON.parse(storedTables);
        setTables(tablesArray);
      }
    }, []);
    const customStyles = {
        fontSize: '24px',
        marginBottom: '3%',
        marginTop: '10%',
        color: 'white',
        backgroundColor: '#031273'
      };

    return (
      <div style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
            {tables.map((tableData, tableIndex) => (
                <div key={tableIndex} >

<h2 style={customStyles}> {tableData.rows[0].Secteur1}</h2>
                    
                    <div style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'center'}}>
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