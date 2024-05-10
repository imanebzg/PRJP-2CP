import React, { useState } from 'react';

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        Type_Ligne: '', Structure: '', Statut: '', Nom: '', Nom_attribut_français: '', Nom_frontière_français: '',
        Secteur1: '', Secteur2: '', Secteur3: '', Secteur4: '', Secteur5: '',
        Unite_français: '', Contributeur: '',
        Localisation_geographique: '', Sous_localisation_geographique_français: '',
        Incertitude: '',
        Transparence: '', Qualité: '', Qualité_TeR: '',
        Qualité_GR: '', Qualité_TiR: '', Qualité_C: '', Qualité_P: '', Qualit_M: '', 
        Commentaire_français: '', Type_poste: '', 
        Total_poste_non_decompose: '', CO2f: '', CH4f: '', CH4b: '', N2O: '',
        Code_gaz_supplémentaire_1: '', Valeur_gaz_supplémentaire_1: '',
        Code_gaz_supplémentaire_2: '', Valeur_gaz_supplémentaire_2: '',
        Code_gaz_supplémentaire_3: '', Valeur_gaz_supplémentaire_3: '',
        Code_gaz_supplémentaire_4: '', Valeur_gaz_supplémentaire_4: '',
        Code_gaz_supplémentaire_5: '', Valeur_gaz_supplémentaire_5: '',
        Autres_GES: '', CO2b: ''
    });//8

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/addproduct/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                alert('Product added successfully');
                // Optionally reset form here
            } else {
                alert('Failed to add product');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding product');
        }
    };

    return (
        <div>
        <h1>Ajouter une activite a la base de donnee: </h1>
        <form onSubmit={handleSubmit}>
            {/* Input fields */}
            {Object.keys(formData).map(key => (
                <div key={key}>
                    <label>{key.replace(/_/g, ' ')}:</label>
                    <input
                        type="text"
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        placeholder={key.replace(/_/g, ' ')}
                    />
                </div>
            ))}
            <button type="submit">Add Product</button>
        </form>
        </div>
        
    );
};

export default AddProductForm;
