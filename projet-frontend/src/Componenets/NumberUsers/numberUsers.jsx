import React, { useEffect, useState } from 'react';
import './nmbr.css'
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
            <h3>Number of Companies: {count}</h3>
        </div>
    );
}

export default CompanyCount;
