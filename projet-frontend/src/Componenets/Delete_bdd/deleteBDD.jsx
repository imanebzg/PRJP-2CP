
import React, { useState } from 'react';
import Sidebar from '../sidebaradmin/side'
import './delete.css'
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

    return (<>
    <Sidebar/>
        <div className='delete'>
          
        <div className='title'> <p>Supprimer une activite de la base de donnees </p></div>
         <form onSubmit={handleDelete}>
         <div className='item'>
         <div className="new-conditions">
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
        </div>
    <button type='submit' class="but" >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 69 14"
    class="svgIcon bin-top"
  >
    <g clip-path="url(#clip0_35_24)">
      <path
        fill="black"
        d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_35_24">
        <rect fill="white" height="14" width="69"></rect>
      </clipPath>
    </defs>
  </svg>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 69 57"
    class="svgIcon bin-bottom"
  >
    <g clip-path="url(#clip0_35_22)">
      <path
        fill="black"
        d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_35_22">
        <rect fill="white" height="57" width="69"></rect>
      </clipPath>
    </defs>
  </svg>
</button>


</div>

            </form>
         
<button type="button" class="but1" onClick={handleAddField}>
  <span class="button__text">Ajouter une Condition</span>
  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>

        

        </div></>

    );
}

export default DeleteForm;




