/* without details
import React, { useEffect, useState } from 'react';

function CompanyManager() {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/manage/getAllCompanies')
            .then(response => response.json())
            .then(data => setCompanies(data))
            .catch(error => console.error('Error fetching companies:', error));
    }, []);

    const handleSelectCompany = (e) => {
        const companyId = e.target.value;
        const company = companies.find(c => c.company_name.toString() === companyId);
        setSelectedCompany(company);
    };

    const handleDelete = () => {
        if (!selectedCompany) return;
        fetch(`http://localhost:3001/manage/deleteCompany/${selectedCompany.company_name}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                setCompanies(companies.filter(c => c.company_name !== selectedCompany.company_name));
                setSelectedCompany(null);
            })
            .catch(error => console.error('Error deleting company:', error));
    };

    return (
        <div>
            <select onChange={handleSelectCompany} value={selectedCompany ? selectedCompany.id : ''}>
                <option value="">Select a company</option>
                {companies.map(company => (
                    <option key={company.company_name} value={company.company_name}>{company.company_name}</option>
                ))}
            </select>
            {selectedCompany && (
                <div>
                    <h2>{selectedCompany.company_name}</h2>
                    <p>Details: ...</p>
                    <button onClick={handleDelete}>Delete Company</button>
                </div>
            )}
        </div>
    );
}

export default CompanyManager;*/
import React, { useEffect, useState } from 'react';

function CompanyManager() {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/manage/getAllCompanies')
            .then(response => response.json())
            .then(data => {
                // Filter out companies whose name starts with 'Administrator'
                const filteredCompanies = data.filter(company => !company.company_name.startsWith('Administrateur'));
                setCompanies(filteredCompanies);
            })
            .catch(error => console.error('Error fetching companies:', error));
    }, []);

    const handleSelectCompany = (e) => {
        const companyId = e.target.value;
        const company = companies.find(c => c.company_name.toString() === companyId);
        setSelectedCompany(company);
    };

    const handleDelete = () => {
        if (!selectedCompany) return;
        fetch(`http://localhost:3001/manage/deleteCompany/${selectedCompany.company_name}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                alert(data.message);
                // Filter by company_id to remove the deleted company from state
                setCompanies(companies.filter(c => c.company_name !== selectedCompany.company_name));
                setSelectedCompany(null);
            })
            .catch(error => console.error('Error deleting company:', error));
    };

    return (
        <div>
            <select onChange={handleSelectCompany} value={selectedCompany ? selectedCompany.company_name : ''}>
                <option value="">Select a company</option>
                {companies.map(company => (
                    <option key={company.company_name} value={company.company_name}>{company.company_name}</option>
                ))}
            </select>
            {selectedCompany && (
                <div>
                    <p>Nom de l'entreprise: {selectedCompany.company_name}</p>
                    <p>Industrie: {selectedCompany.industry}</p>
                    <p>Email: {selectedCompany.email}</p>
                    <p>Numero de telephone: {selectedCompany.phone_number}</p>
                    <p>Personne à contacter: {selectedCompany.contact_person}</p>
                    <p>Adresse: {selectedCompany.location}</p>
                    <p>Code postal: {selectedCompany.postal_code}</p>
                    <button onClick={handleDelete}>Delete Company</button>
                </div>
            )}
        </div>
    );
}

export default CompanyManager;
