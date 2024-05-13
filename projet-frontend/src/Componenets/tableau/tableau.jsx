import React from 'react';
import PropTypes from 'prop-types';

const Tableau = ({ data , facteur }) => { // Destructure the data directly from props
    console.log('Data received by Tableau:', data);
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
/*
Tableau.propTypes = {
    data: PropTypes.shape({
      rows: PropTypes.array.isRequired, // Assuming rows is an array and is required
      // Add more validations for other properties in data if needed
    }).isRequired,
  };
  */
export default Tableau;

