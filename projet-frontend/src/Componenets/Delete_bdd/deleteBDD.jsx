/* without dropdowns
import React, { useState } from 'react';

function DeleteForm() {
    const [fields, setFields] = useState([{ key: '', value: '' }]);

    const handleAddField = () => {
        setFields([...fields, { key: '', value: '' }]);
    };

    const handleChange = (index, event) => {
        const newFields = fields.map((field, i) => {
            if (i === index) {
                return { ...field, [event.target.name]: event.target.value };
            }
            return field;
        });
        setFields(newFields);
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/deleteproduct/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ conditions: fields })
            });

            if (!response.ok) {
                throw new Error('Failed to delete: ' + (await response.text()));
            }

            const result = await response.json();
            alert('Delete successful: ' + result.message);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
        <h1>Supprimer une activite de la base de donnees
        </h1>
        <form onSubmit={handleDelete}>
            {fields.map((field, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="key"
                        placeholder="Field Name"
                        value={field.key}
                        onChange={(e) => handleChange(index, e)}
                    />
                    <input
                        type="text"
                        name="value"
                        placeholder="Field Value"
                        value={field.value}
                        onChange={(e) => handleChange(index, e)}
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddField}>Add Condition</button>
            <button type="submit">Delete</button>
        </form>
        </div>

    );
}

export default DeleteForm;
*/
import React, { useState } from 'react';

function DeleteForm() {
    const [fields, setFields] = useState([{ key: '', value: '' }]);

    // Dropdown options based on all the fields you provided earlier
    const fieldOptions = [
        { label: 'Type_Ligne', value: 'Type_Ligne' },
        { label: 'Structure', value: 'Structure' },
        { label: 'Statut', value: 'Statut' },
        { label: 'Nom', value: 'Nom' },
        { label: 'Nom_attribut_français', value: 'Nom_attribut_français' },
        { label: 'Nom_frontière_français', value: 'Nom_frontière_français' },
        { label: 'Secteur1', value: 'Secteur1' },
        { label: 'Secteur2', value: 'Secteur2' },
        { label: 'Secteur3', value: 'Secteur3' },
        { label: 'Secteur4', value: 'Secteur4' },
        { label: 'Secteur5', value: 'Secteur5' },
        { label: 'Unite_français', value: 'Unite_français' },
        { label: 'Contributeur', value: 'Contributeur' },
        { label: 'Localisation_geographique', value: 'Localisation_geographique' },
        { label: 'Sous_localisation_geographique_français', value: 'Sous_localisation_geographique_français' },
        { label: 'Incertitude', value: 'Incertitude' },
        { label: 'Transparence', value: 'Transparence' },
        { label: 'Qualité', value: 'Qualité' },
        { label: 'Qualité_TeR', value: 'Qualité_TeR' },
        { label: 'Qualité_GR', value: 'Qualité_GR' },
        { label: 'Qualité_TiR', value: 'Qualité_TiR' },
        { label: 'Qualité_C', value: 'Qualité_C' },
        { label: 'Qualité_P', value: 'Qualité_P' },
        { label: 'Qualit_M', value: 'Qualit_M' },
        { label: 'Type_poste', value: 'Type_poste' },
        { label: 'Total_poste_non_decompose', value: 'Total_poste_non_decompose' },
        { label: 'CO2f', value: 'CO2f' },
        { label: 'CH4f', value: 'CH4f' },
        { label: 'CH4b', value: 'CH4b' },
        { label: 'N2O', value: 'N2O' },
        { label: 'Code gaz supplémentaire 1', value: 'Code gaz supplémentaire 1' },
        { label: 'Valeur gaz supplémentaire 1', value: 'Valeur gaz supplémentaire 1' },
        { label: 'Code gaz supplémentaire 2', value: 'Code gaz supplémentaire 2' },
        { label: 'Valeur gaz supplémentaire 2', value: 'Valeur gaz supplémentaire 2' },
        { label: 'Code gaz supplémentaire 3', value: 'Code gaz supplémentaire 3' },
        { label: 'Valeur gaz supplémentaire 3', value: 'Valeur gaz supplémentaire 3' },
        { label: 'Code gaz supplémentaire 4', value: 'Code gaz supplémentaire 4' },
        { label: 'Valeur gaz supplémentaire 4', value: 'Valeur gaz supplémentaire 4' },
        { label: 'Code gaz supplémentaire 5', value: 'Code gaz supplémentaire 5' },
        { label: 'Valeur gaz supplémentaire 5', value: 'Valeur gaz supplémentaire 5' },
        { label: 'Autres_GES', value: 'Autres_GES' },
        { label: 'CO2b', value: 'CO2b' }
    ];

    const handleAddField = () => {
        setFields([...fields, { key: '', value: '' }]);
    };

    const handleChange = (index, event) => {
        const newFields = fields.map((field, i) => {
            if (i === index) {
                return { ...field, [event.target.name]: event.target.value };
            }
            return field;
        });
        setFields(newFields);
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/deleteproduct/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ conditions: fields })
            });

            if (!response.ok) {
                throw new Error('Failed to delete: ' + (await response.text()));
            }

            const result = await response.json();
            alert('Delete successful: ' + result.message);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h1>Supprimer une activite de la base de donnees </h1>
            <form onSubmit={handleDelete}>
            {fields.map((field, index) => (
                <div key={index}>
                    <select
                        name="key"
                        value={field.key}
                        onChange={e => handleChange(index, e)}
                    >
                        <option value="">Select Field</option>
                        {fieldOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        name="value"
                        placeholder="Field Value"
                        value={field.value}
                        onChange={e => handleChange(index, e)}
                    />
                </div>
            ))}
            <button type="button" onClick={handleAddField}>Add Condition</button>
            <button type="submit">Delete</button>
            </form>
        </div>

    );
}

export default DeleteForm;
