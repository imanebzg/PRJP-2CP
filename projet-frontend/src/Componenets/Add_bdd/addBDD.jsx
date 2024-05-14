import React, { useState } from 'react';
import './addbdd.css';
import Sidebar from '../sidebaradmin/side'
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
    });

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

    const [selectedScope, setSelectedScope] = useState('form-1');

    const handleRadioChange = (e) => {
        setSelectedScope(e.target.value);
    };

    return (
        <> <Sidebar/>
        <div className='AJOUTER'>
                <div className='title'> <p>Ajouter une activite a la base de donnee: </p></div>
                 <div className='SELE'>
            <div className="radio-input">
                <input type="hidden" id="selectedScope" value={selectedScope} />

                {/* Radio buttons with labels */}
                <label>
                    <input
                        type="radio"
                        value="form-1"
                        name="value-radio"
                        id="value-1"
                        onChange={handleRadioChange}
                        checked={selectedScope === 'form-1'}
                    />
                    <span>1</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="form-2"
                        name="value-radio"
                        id="value-2"
                        onChange={handleRadioChange}
                        checked={selectedScope === 'form-2'}
                    />
                    <span> 2</span>
                </label>

                <label>
                    <input
                        type="radio"
                        value="form-3"
                        name="value-radio"
                        id="value-3"
                        onChange={handleRadioChange}
                        checked={selectedScope === 'form-3'}
                    />
                    <span>3</span>
                </label>
                <label>
                    <input
                        type="radio"
                        value="form-4"
                        name="value-radio"
                        id="value-4"
                        onChange={handleRadioChange}
                        checked={selectedScope === 'form-4'}
                    />
                    <span>4</span>
                </label>
            </div>
            </div>
            {/* Render the selected form based on the value of selectedScope */}
            {selectedScope === 'form-1' && (
                <Form1 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            )}
            {selectedScope === 'form-2' && (
                <Form2 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            )}
            {selectedScope === 'form-3' && (
                <Form3 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            )}
              {selectedScope === 'form-4' && (
                <Form4 formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            )}
        </div></>
    );
};
const Form1 = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div className='add'>

            <form onSubmit={handleSubmit} className="form-container">
                {/* Input fields - Form 1 */}
                <div className="form-column">
                    {Object.keys(formData).slice(0, 5).map(key => (
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
                </div>
                <div className="form-column">
                    {Object.keys(formData).slice(5, 11).map(key => (
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
                </div>
               
            </form>
        </div>
    );
};

const Form2 = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div className='add'>
           
            <form onSubmit={handleSubmit} className="form-container">
                {/* Input fields - Form 2 */}
                <div className="form-column">
                    {Object.keys(formData).slice(11, 16).map(key => (
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
                </div>
                <div className="form-column">
                    {Object.keys(formData).slice(16, 21).map(key => (
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
                </div>
                
            </form>
           
        </div>
    );
};
const Form3 = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div className='add'>
          
            <form onSubmit={handleSubmit} className="form-container">
                {/* Input fields - Form 3 */}
                <div className="form-column">
                    {Object.keys(formData).slice(21, 26).map(key => (
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
                </div>
                <div className="form-column">
                    {Object.keys(formData).slice(26, 31).map(key => (
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
                </div>
              
            </form>
        </div>
    );
};const Form4 = ({ formData, handleChange, handleSubmit }) => {
    return (
        <div className='add'>
           
            <form onSubmit={handleSubmit} className="form-container">
                {/* Input fields - Form 4 (Left Column) */}
                <div className="column4">
                    {Object.keys(formData).slice(31, 34).map(key => (
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
                </div>
                {/* Input fields - Form 4 (Middle Column) */}
                <div className="column4">
                    {Object.keys(formData).slice(34, 38).map(key => (
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
                </div>
                {/* Input fields - Form 4 (Right Column) */}
                <div className="column4">
                    {Object.keys(formData).slice(38).map(key => (
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
                </div>
               
            </form>   
<button type="submit" class="but1">
  <span class="button__text">Ajouter une activité</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>

        </div>
    );
};


export default AddProductForm;
