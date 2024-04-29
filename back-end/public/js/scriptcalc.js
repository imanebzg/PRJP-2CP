
let Secteur1 = [  
    'Combustibles',
    'Process et émissions fugitives ',
    'UTCF ',
    'Electricité ',
    'Achats de biens ',
    'Transport de marchandises ',
    'Transport de personnes ',
    'Traitement des déchets ',
    'Statistiques territoriales '
];


function fillOptions(selectId, optionsArray) {
    let selectElement = document.getElementById(selectId);

    // Ajoutez d'abord l'option "--select--"
    let selectOption = document.createElement("option");
    selectOption.text = "--select--";
    selectElement.add(selectOption);

    // Remplissez ensuite les autres options
    optionsArray.forEach(option => {
        let optionElement = document.createElement("option");
        optionElement.text = option;
        selectElement.add(optionElement);
    });
}

/* OLD VERSION
async function updateSectorOptions(index) {

    try {
    let preSectorValue = document.getElementById("Secteur" + (index - 1)).value;
    const response = await fetch(`/getters/getSector${index}Options?sector${index - 1}=${encodeURIComponent(preSectorValue)}`);
    const data = await response.json();
    let selectElement = document.getElementById('Secteur' + index);
    selectElement.innerHTML = '';

    // Ajoutez l'option "--select--"
    let selectOption = document.createElement("option");
    selectOption.text = "--select--";
    selectElement.add(selectOption);
                
    // Remplissez les autres options
    data.forEach(option => {
        let optionElement = document.createElement("option");
        optionElement.text = option;
        selectElement.add(optionElement);
    });
    } catch (error) {
    console.error('Error fetching sector ' + index + ' options:', error);
    }
}
*/


async function updateSectorOptions(index) {
    try {
        let params = ''; 

        for (let i = 1; i < index; i++) {
            let preSectorValue = document.getElementById("Secteur" + i).value;
            params += `&sector${i}=${encodeURIComponent(preSectorValue)}`;
        }

        const response = await fetch(`/getters/getSector${index}Options?${params}`);
        const data = await response.json();
        let selectElement = document.getElementById('Secteur' + index);
        selectElement.innerHTML = '';

        let selectOption = document.createElement("option");
        selectOption.text = "--select--";
        selectElement.add(selectOption);

        data.forEach(option => {
            let optionElement = document.createElement("option");
            optionElement.text = option;
            selectElement.add(optionElement);
        });
        
    } catch (error) {
        console.error('Error fetching sector ' + index + ' options:', error);
    }
}


async function updateProductOptions() {
    try {
    let secteur1Value = document.getElementById("Secteur1").value;
    let secteur2Value = document.getElementById("Secteur2").value;
    let secteur3Value = document.getElementById("Secteur3").value;
    let secteur4Value = document.getElementById("Secteur4").value;
    let secteur5Value = document.getElementById("Secteur5").value;

    const response = await fetch(`/getters/getProductOptions?secteur1=${encodeURIComponent(secteur1Value)}&secteur2=${encodeURIComponent(secteur2Value)}&secteur3=${encodeURIComponent(secteur3Value)}&secteur4=${encodeURIComponent(secteur4Value)}&secteur5=${encodeURIComponent(secteur5Value)}`);
    const data = await response.json();

    let selectElement = document.getElementById('Nom');
    selectElement.innerHTML = '';

    let selectOption = document.createElement("option");
    selectOption.text = "--select--";
    selectElement.add(selectOption);

    data.forEach(option => {
        let optionElement = document.createElement("option");
        optionElement.text = option;
        selectElement.add(optionElement);
    });
    } catch (error) {
    console.error('Error fetching product options:', error);
    }
}


async function updatePosteOptions() {
    try{
        var nomValue = document.getElementById("Nom").value;
        var typeLigneValue = document.getElementById("typeLigne").value;

        const response = await fetch(`/getters/getposteoptions?nom=${encodeURIComponent(nomValue)}&typeLigne=${encodeURIComponent(typeLigneValue)}`);
        const data = await response.json();

        var selectElement = document.getElementById('type');
        selectElement.innerHTML = '';

        var selectOption = document.createElement("option");
        selectOption.text = "--select--";
        selectElement.add(selectOption);
        
        data.forEach(option => {
            var optionElement = document.createElement("option");
            optionElement.text = option;
            selectElement.add(optionElement);
        });


    }catch(error){
        console.error('Error fetching poste options:', error)
    }  
 
}

async function updateLigneOptions() {
    try{
        var nomValue = document.getElementById("Nom").value;
        const response = await fetch(`/getters/getligneoptions?nom=${encodeURIComponent(nomValue)}`);
        const data = await response.json();

        var selectElement = document.getElementById('typeLigne');
        selectElement.innerHTML = '';

        var selectOption = document.createElement("option");
        selectOption.text = "--select--";
        selectElement.add(selectOption);
        
        data.forEach(option => {
            var optionElement = document.createElement("option");
            optionElement.text = option;
            selectElement.add(optionElement);
        });     
    }catch(error){
        console.error('Error fetching ligne options:', error)
    }  
}


async function updateUnitOptions() {
    try{
        var nomValue = document.getElementById("Nom").value;
        const response = await fetch(`/getters/getunitoptions?nom=${encodeURIComponent(nomValue)}`);
        const data = await response.json();

        var selectElement = document.getElementById('unite');
        selectElement.innerHTML = '';

        var selectOption = document.createElement("option");
        selectOption.text = "--select--";
        selectElement.add(selectOption);
        
        data.forEach(option => {
            var optionElement = document.createElement("option");
            optionElement.text = option;
            selectElement.add(optionElement);
        });     
        
    }catch(error){
        console.error('Error fetching unite options:', error)
    }
}

async function updateNomAttributOptions() {
    try{
        var nomValue = document.getElementById("Nom").value;
        const response = await fetch(`/getters/getnomattributoptions?nom=${encodeURIComponent(nomValue)}`);
        const data = await response.json();

        var selectElement = document.getElementById('NomAttribut');
        selectElement.innerHTML = '';

        var selectOption = document.createElement("option");
        selectOption.text = "--select--";
        selectElement.add(selectOption);
        
        data.forEach(option => {
            var optionElement = document.createElement("option");
            optionElement.text = option;
            selectElement.add(optionElement);
        });     
    }catch(error){
        console.error('Error fetching nom attribut options:', error)
    }  
}

async function updateNomFrontiereOptions() {
    try{
        var NomAttributValue = document.getElementById("NomAttribut").value;
        var nomValue = document.getElementById("Nom").value;
        const response = await fetch(`/getters/getnomfrontiereoptions?nom=${encodeURIComponent(nomValue)}&NomAttribut=${encodeURIComponent(NomAttributValue)}`);
        const data = await response.json();

        var selectElement = document.getElementById('NomFrontiere');
        selectElement.innerHTML = '';

        var selectOption = document.createElement("option");
        selectOption.text = "--select--";
        selectElement.add(selectOption);
        
        data.forEach(option => {
            var optionElement = document.createElement("option");
            optionElement.text = option;
            selectElement.add(optionElement);
        });     
    }catch(error){
        console.error('Error fetching nom frontiere options:', error)
    }  
}

async function updateContributeurOptions() {
    try{
        var NomFrontiereValue = document.getElementById("NomFrontiere").value;
        var NomAttributValue = document.getElementById("NomAttribut").value;
        var nomValue = document.getElementById("Nom").value;
        const response = await fetch(`/getters/getcontributeuroptions?nom=${encodeURIComponent(nomValue)}&NomAttribut=${encodeURIComponent(NomAttributValue)}&NomFrontiere=${encodeURIComponent(NomFrontiereValue)}`);
        const data = await response.json();

        var selectElement = document.getElementById('contributeur');
        selectElement.innerHTML = '';

        var selectOption = document.createElement("option");
        selectOption.text = "--select--";
        selectElement.add(selectOption);
        
        data.forEach(option => {
            var optionElement = document.createElement("option");
            optionElement.text = option;
            selectElement.add(optionElement);
        });     
    }catch(error){
        console.error('Error fetching contributeur options:', error)
    }  
}

async function updateLocalisationOptions() {
    try{
        var ContributeurValue = document.getElementById("contributeur").value;
        var NomFrontiereValue = document.getElementById("NomFrontiere").value;
        var NomAttributValue = document.getElementById("NomAttribut").value;
        var nomValue = document.getElementById("Nom").value;
        const response = await fetch(`/getters/getlocalisationoptions?nom=${encodeURIComponent(nomValue)}&NomAttribut=${encodeURIComponent(NomAttributValue)}&NomFrontiere=${encodeURIComponent(NomFrontiereValue)}&contributeur=${encodeURIComponent(ContributeurValue)}`);
        const data = await response.json();

        var selectElement = document.getElementById('localisation');
        selectElement.innerHTML = '';

        var selectOption = document.createElement("option");
        selectOption.text = "--select--";
        selectElement.add(selectOption);
        
        data.forEach(option => {
            var optionElement = document.createElement("option");
            optionElement.text = option;
            selectElement.add(optionElement);
        });     
    }catch(error){
        console.error('Error fetching localisation options:', error)
    }  
}

async function updateSousLocalisationOptions() {
    try{
        var LocalisationValue = document.getElementById("localisation").value;
        var ContributeurValue = document.getElementById("contributeur").value;
        var NomFrontiereValue = document.getElementById("NomFrontiere").value;
        var NomAttributValue = document.getElementById("NomAttribut").value;
        var nomValue = document.getElementById("Nom").value;
        const response = await fetch(`/getters/getsouslocalisationoptions?nom=${encodeURIComponent(nomValue)}&NomAttribut=${encodeURIComponent(NomAttributValue)}&NomFrontiere=${encodeURIComponent(NomFrontiereValue)}&contributeur=${encodeURIComponent(ContributeurValue)}&localisation=${encodeURIComponent(LocalisationValue)}`);
        const data = await response.json();

        var selectElement = document.getElementById('souslocalisation');
        selectElement.innerHTML = '';

        var selectOption = document.createElement("option");
        selectOption.text = "--select--";
        selectElement.add(selectOption);
        
        data.forEach(option => {
            var optionElement = document.createElement("option");
            optionElement.text = option;
            selectElement.add(optionElement);
        });     
    }catch(error){
        console.error('Error fetching sous localisation options:', error)
    }  
}

window.onload = function() {
    fillOptions("Secteur1", Secteur1);

    // Ajoutez des écouteurs d'événements pour les changements de sélection de secteur
    document.getElementById("Secteur1").addEventListener("change", function() {
        updateSectorOptions(2);
    });
    document.getElementById("Secteur2").addEventListener("change", function() {
        updateSectorOptions(3);
    });
    document.getElementById("Secteur3").addEventListener("change", function() {
        updateSectorOptions(4);
    });
    document.getElementById("Secteur4").addEventListener("change", function() {
        updateSectorOptions(5);
    });
    document.getElementById("Secteur5").addEventListener("change", function() {
      updateProductOptions();
    });
    document.getElementById("Nom").addEventListener("change",function () {
        updateLigneOptions();
    });
    document.getElementById("typeLigne").addEventListener("change",function () {
        updatePosteOptions();
    });
    document.getElementById("Nom").addEventListener("change",function () {
        updateUnitOptions();
    });
    document.getElementById("Nom").addEventListener("change",function () {
        updateNomAttributOptions();
    });
    document.getElementById("NomAttribut").addEventListener("change",function () {
        updateNomFrontiereOptions();
    });
    document.getElementById("NomFrontiere").addEventListener("change",function () {
        updateContributeurOptions();
    });
    document.getElementById("contributeur").addEventListener("change",function () {
        updateLocalisationOptions();
    });
    document.getElementById("localisation").addEventListener("change",function () {
        updateSousLocalisationOptions();
    });

  


};
