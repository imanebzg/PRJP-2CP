/*import React, { useState, useEffect } from 'react';

function EditCompany({ companyId }) {
    const [company, setCompany] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // Fetch company details
    useEffect(() => {
        fetch(`http://localhost:3001/info/company/${companyId}`)
            .then(response => response.json())
            .then(data => {
                setCompany(data[0]);  // Assuming the data comes back as an array
            })
            .catch(err => console.error("Failed to fetch company data", err));
    }, [companyId]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompany(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/info/company/${companyId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(company)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update company');
            }
            setIsEditing(false);
            return response.json();
        })
        .catch(error => console.error("Error updating company:", error));
    };

    if (!company) return <div>Loading...</div>;

    return (
        <div>
            {!isEditing ? (
                <div>
                    <h1>{company.name}</h1>
                    <p>Industry: {company.industry}</p>
                    <p>Email: {company.email}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>Name: <input type="text" name="name" value={company.name} onChange={handleChange} /></label>
                    <label>Industry: <input type="text" name="industry" value={company.industry} onChange={handleChange} /></label>
                    <label>Email: <input type="email" name="email" value={company.email} onChange={handleChange} /></label>
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </form>
            )}
        </div>
    );
}

export default EditCompany;*/
/*
import React, { useState, useEffect } from 'react';

function EditCompany({ companyId }) {
    const [company, setCompany] = useState({
      name: '',
      industry: '',
      email: '',
      phone_number: '',
      password: '',
      contact_person: '',
      location: '',
      postal_code: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch company details
    useEffect(() => {
        fetch(`http://localhost:3001/info/company/${companyId}`)
            .then(response => response.json())
            .then(data => {
                setCompany(data[0]);  // Assuming the data comes back as an array
            })
            .catch(err => console.error("Failed to fetch company data", err));
    }, [companyId]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompany(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/info/company/${companyId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(company)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update company');
            }
            setIsEditing(false);
        })
        .catch(error => console.error("Error updating company:", error));
    };

    if (!company) return <div>Loading...</div>;

    return (
        <div>
            {!isEditing ? (
                <div>
                    <h1>{company.name}</h1>
                    <p>Industry: {company.industry}</p>
                    <p>Email: {company.email}</p>
                    <p>Phone Number: {company.phone_number}</p>
                    <p>Password: {'*'.repeat(company.password.length)}</p>
                    <p>Contact Person: {company.contact_person}</p>
                    <p>Address: {company.location}</p>
                    <p>Postal Code: {company.postal_code}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>Nom de la compagnie: <input type="text" name="name" value={company.name} onChange={handleChange} /></label>
                    <label>Industrie: <input type="text" name="industry" value={company.industry} onChange={handleChange} /></label>
                    <label>Email: <input type="email" name="email" value={company.email} onChange={handleChange} /></label>
                    <label>Numéro de téléphone: <input type="tel" name="phoneNumber" value={company.phone_number} onChange={handleChange} /></label>
                    <label>Mot de passe: <input type="password" name="password" value={company.password} onChange={handleChange} /></label>
                    <label>Personne à contacter: <input type="text" name="contactPerson" value={company.contact_person} onChange={handleChange} /></label>
                    <label>Adresse: <input type="text" name="address" value={company.location} onChange={handleChange} /></label>
                    <label>Code postal: <input type="text" name="postalCode" value={company.postal_code} onChange={handleChange} /></label>
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </form>
            )}
        </div>
    );
}

export default EditCompany;*/

import React, { useState, useEffect } from 'react';
import './Info_entreprise.css'; 

function EditCompany({ companyId }) {
    const [company, setCompany] = useState({
        company_name: '',
        industry: '',
        email: '',
        phone_number: '',
        password: '',
        contact_person: '',
        location: '',
        postal_code: ''
    });
    const [isEditing, setIsEditing] = useState(false);

    // Fetch company details
    useEffect(() => {
        fetch(`http://localhost:3001/info/company/${companyId}`)
            .then(response => response.json())
            .then(data => {
                setCompany(data[0]);  // Assuming the data comes back as an array
            })
            .catch(err => console.error("Failed to fetch company data", err));
    }, [companyId]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCompany(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/info/company/${companyId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(company)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update company');
            }
            setIsEditing(false);
        })
        .catch(error => console.error("Error updating company:", error));
    };

    if (!company) return <div>Loading...</div>;

    return (
        <div className="Info_entreprise">
            {!isEditing ? (
                <div>
                    <div className="title"><p>Informations sur l'entreprise</p></div>
                    <div className="user_details">
                        <div className="input_box"><p><strong>Nom de l'entreprise:</strong> {company.company_name}</p></div>
                        <div className="input_box"><p><strong>Industrie:</strong> {company.industry}</p></div>
                        <div className="input_box"><p><strong>Email:</strong> {company.email}</p></div>
                        <div className="input_box"><p><strong>Mot de passe:</strong> {'*'.repeat(company.password.length)}</p></div>
                        <div className="input_box"><p><strong>Numero de telephone:</strong> {company.phone_number}</p></div>
                        <div className="input_box"><p><strong>Personne à contacter:</strong> {company.contact_person}</p></div>
                        <div className="input_box"><p><strong>Addresse:</strong> {company.location}</p></div>
                        <div className="input_box"><p><strong>Code postal:</strong> {company.postal_code}</p></div>
                        <button className="btn1" onClick={handleEdit}>Modifier</button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="user_details">
                    <div className="input_box"><label>Nom de l'entreprise: <input type="text" name="name" value={company.company_name} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Industrie: <input type="text" name="industry" value={company.industry} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Email: <input type="email" name="email" value={company.email} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Mot de passe: <input type="text" name="password" value={company.password} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Numero de telephone: <input type="tel" name="phoneNumber" value={company.phone_number} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Personne à contacter: <input type="text" name="contactPerson" value={company.contact_person} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Addresse: <input type="text" name="address" value={company.location} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Code postal: <input type="text" name="postalCode" value={company.postal_code} onChange={handleChange} /></label></div>
                    <div className="button_container">
                      <button className="btn1" type="submit">Sauvegarder</button>
                      <button className="btn1" type="button" onClick={handleCancel}>Annuler</button>
                    </div>

                </form>
            )}
        </div>
    );
}

export default EditCompany;

