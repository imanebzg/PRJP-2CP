import React, { useEffect, useState } from 'react';
import './nmbr.css'
import gif from './img/gif.gif'
function CompanyCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/countUsers/company-count');
                const data = await response.json();
                setCount(data.count);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='nmbr'>
            
           <a class="btn-shine"> <img src={gif} alt="Loading GIF" /> Nombre d'entreprise: {count}</a>
  </div>
    );
}

export default CompanyCount;
