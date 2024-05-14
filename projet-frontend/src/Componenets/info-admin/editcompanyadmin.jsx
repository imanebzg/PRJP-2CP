

import React, { useState, useEffect } from 'react';
import './info-admin.css'; 

function EditCompany({ companyId }) {
    const [company, setCompany] = useState({
        company_name: '',
        industry: '',
        email: '',
        phone_number: '',
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
        <div className="infoadmin">
              <div className="title"><p>Informations de l'Admin</p></div>
                    {!isEditing ? (
                <div>
                  <div className="user_details">
                        <div className="input_box"><p><strong>Nom de l'Admin:</strong> {company.company_name}</p></div>

                        <div className="input_box"><p><strong>Email:</strong> {company.email}</p></div>
                        <div className="input_box"><p><strong>Numero de telephone:</strong> {company.phone_number}</p></div>
                        <div className="input_box"><p><strong>Personne à contacter:</strong> {company.contact_person}</p></div>
                        <div className="input_box"><p><strong>Addresse:</strong> {company.location}</p></div>
                        <div className="input_box"><p><strong>Code postal:</strong> {company.postal_code}</p></div>

                        <button className="btn2" style={{ marginLeft: '80%' }} onClick={handleEdit}>Modifier</button>
          </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="user_details">
                    <div className="input_box"><label>Nom de l'Admin: <input type="text" name="company_name" value={company.company_name} onChange={handleChange} /></label></div>
                                       <div className="input_box"><label>Email: <input type="email" name="email" value={company.email} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Numero de telephone: <input type="tel" name="phone_number" value={company.phone_number} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Personne à contacter: <input type="text" name="contact_person" value={company.contact_person} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Addresse: <input type="text" name="location" value={company.location} onChange={handleChange} /></label></div>
                    <div className="input_box"><label>Code postal: <input type="text" name="postal_code" value={company.postal_code} onChange={handleChange} /></label></div>
                    <div className="button_container">
                      <button className="btn2" type="submit">Sauvegarder</button>
                      <button className="btn1" type="button" onClick={handleCancel}>Annuler</button>
                    </div>

                </form>
            )}
        </div>
    );
}

export default EditCompany;

