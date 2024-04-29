
/*const pool = require('../config/database');





// MAKES ARRAY THAT HAS THE POSSIBLE SUB SECTORS OF THE ENTERED SECTOR FROM THE USER 






function getSecteurs(i, rep) {
  let sql;
  if (rep != null) {
    let j = i - 1;
    sql = "SELECT DISTINCT `Secteur"+i+"` FROM `basecarbone-v17-fr` WHERE TRIM(`Secteur"+j+"`) = '"+rep+"';";
  } else {
    sql = "SELECT DISTINCT `Secteur"+i+"` FROM `basecarbone-v17-fr`;";
  }
  pool.promise().query(sql)
    .then(([rows, fields]) => {
        const distinctValues = rows.map(row => row["Secteur"+i+""]);
        console.log(distinctValues);
    })
    .catch((err) => {
        console.error('Error executing query:', err);
    });
}




//  GET ALL THE POSSIBLE OPTIONS FOR THE USER DEPENDING ON WHAT HE CHOOSES 
getSecteurs(1, null);
secteur1 = "Combustibles";//we get this from front

// admettons l'utilisateur a entre la valeur "Combustibles"
getSecteurs(2, secteur1);
secteur2 = "Fossiles";//from front

// apres il aura ke choix "Fossiles" uniquement 
getSecteurs(3, secteur2); 

secteur3 = "Solides";//from front
// apres il aura le choix "Solides" uniquement 
getSecteurs(4, secteur3);
secteur4 = "Charbons";//from front

// apres il aura le choix "Charbons" uniquement
getSecteurs(5, "");
secteur5="";//from front





function getproducts(secteur1,secteur2,secteur3,secteur4,secteur5) {
  let sql;
  sql = `SELECT DISTINCT \`Nom base français\` FROM \`basecarbone-v17-fr\` WHERE TRIM(\`Secteur1\`) = '${secteur1}'  and TRIM(\`Secteur2\`) ='${secteur2}'  and TRIM(\`Secteur3\`) ='${secteur3}'  and TRIM(\`Secteur4\`) = '${secteur4}' and TRIM(\`Secteur5\`) = '${secteur5}';`;
    
  pool.promise().query(sql)
    .then(([rows, fields]) => {
      const distinctValues = rows.map(row => row["Nom base français"]); 
      console.log(distinctValues);
    })
    .catch((err) => {
        console.error('Error executing query:', err);
    });
}

getproducts(secteur1,secteur2,secteur3,secteur4,secteur5);
// admettons l'utilisateur a entre la valeur "Agglomérés de houille"
product="Agglomérés de houille";//from front





/////////////////////////////////////
//meme prod sect dif?

function getunits(product) {
  let sql;
  sql = `SELECT DISTINCT \`Unité français\` FROM \`basecarbone-v17-fr\` WHERE TRIM(\`Nom base français\`) = '${product}' ;`;
    
  pool.promise().query(sql)
    .then(([rows, fields]) => {
      const distinctValues = rows.map(row => row["Unité français"]); 
      console.log(distinctValues);
    })
    .catch((err) => {
        console.error('Error executing query:', err);
    });
}




getunits(product);//on doit separer kgco2e de l'unite !problemeeeeeeeeeee pas que kgco2e
// admettons l'utilisateur a entre la valeur "kgCO2e/kg"
unit='kgCO2e/kg';//from front






/////////////////////////////////
function getincertitude(product,unit) {
  let sql;
  sql = `SELECT DISTINCT \`Incertitude\` FROM \`basecarbone-v17-fr\` WHERE TRIM(\`Nom base français\`) = '${product}' and TRIM(\`Unité français\`)= '${unit}';`;
    
  pool.promise().query(sql)
    .then(([rows, fields]) => {
      const distinctValues = rows.map(row => row["Incertitude"]); 
      console.log(distinctValues);
    })
    .catch((err) => {
        console.error('Error executing query:', err);
    });
}
getincertitude(product,unit);
incertitude=0.2;



/////////////////////////////////calcul du bilan




quantity=10;//from front
taux=2;//from another function
function calculate(quantity,taux) {
    res = quantity * taux;
    console.log("res",res);
}

calculate(quantity, taux);//ca s'affiche au debut car asynchronous

/////////////////////////////////





function calculate_incertitude(res, incertitude) {
    delta = res * incertitude;
    console.log("delta",delta);
}




calculate_incertitude(res, incertitude);//ca s'affiche au debut car asynchronous




function getFacteurEmission(entries, callback) {
  const query = "SELECT * FROM facteurs WHERE TRIM(`Secteur 1`) = ? AND TRIM(`Secteur 2`) = ? AND TRIM(`Secteur 3`) = ? AND TRIM(`Secteur 4`) = ? AND TRIM(`Secteur 5`) = ? AND TRIM(`Type Ligne`) = ? AND TRIM(`Type poste`) = ? AND TRIM(`Nom base français`) = ? LIMIT 1;";

  connection.query(query, entries, (err, results) => {
    if (err) {
      // Pass the error to the callback function
      return callback(err, err);
    }

    if (results.length === 0) {
      // No matching rows found, return null
      return callback(null, null);
    }

    // Extract the value of facteur_emission from the first row
    const facteurEmission = results[0];
    callback(null, facteurEmission['Total poste non décomposé']);
  });
}




// TEST FACTEUR D'EMISSION avec : Acier ou fer blanc/Achats de biens/ Métaux et produits métalliques/Acier/Elément
const values = ['Achats de biens','Métaux et produits métalliques', 'Acier', '', '', 'Elément', '', 'Acier ou fer blanc'];
function res(error, result) {
if (error) {
  console.error('Error:', error);
  return;
}



console.log('Result:', result);
}





getFacteurEmission(values, res); 






function getCO2f(entries, callback) {
  const query = "SELECT * FROM facteurs WHERE TRIM(`Secteur 1`) = ? AND TRIM(`Secteur 2`) = ? AND TRIM(`Secteur 3`) = ? AND TRIM(`Secteur 4`) = ? AND TRIM(`Secteur 5`) = ? AND TRIM(`Type Ligne`) = ? AND TRIM(`Type poste`) = ? AND TRIM(`Nom base français`) = ? LIMIT 1;";

  pool.query(query, entries, (err, results) => {
    if (err) {
      // Pass the error to the callback function
      return callback(err, err);
    }

    if (results.length === 0) {
      // No matching rows found, return null
      return callback(null, null);
    }

    // Extract the value of facteur_emission from the first row
  ;
    callback(null, result[0][`CO2f`]);
  });

}




function getCH4f(entries, callback) {
  const query = "SELECT * FROM facteurs WHERE TRIM(`Secteur 1`) = ? AND TRIM(`Secteur 2`) = ? AND TRIM(`Secteur 3`) = ? AND TRIM(`Secteur 4`) = ? AND TRIM(`Secteur 5`) = ? AND TRIM(`Type Ligne`) = ? AND TRIM(`Type poste`) = ? AND TRIM(`Nom base français`) = ? LIMIT 1;";

  pool.query(query, entries, (err, results) => {
    if (err) {
      // Pass the error to the callback function
      return callback(err, err);
    }

    if (results.length === 0) {
      // No matching rows found, return null
      return callback(null, null);
    }

    // Extract the value of facteur_emission from the first row
  ;
    callback(null, result[0][`CH4f`]);
  });

}





function getCH4b(entries, callback) {
  const query = "SELECT * FROM facteurs WHERE TRIM(`Secteur 1`) = ? AND TRIM(`Secteur 2`) = ? AND TRIM(`Secteur 3`) = ? AND TRIM(`Secteur 4`) = ? AND TRIM(`Secteur 5`) = ? AND TRIM(`Type Ligne`) = ? AND TRIM(`Type poste`) = ? AND TRIM(`Nom base français`) = ? LIMIT 1;";

  pool.query(query, entries, (err, results) => {
    if (err) {
      // Pass the error to the callback function
      return callback(err, err);
    }

    if (results.length === 0) {
      // No matching rows found, return null
      return callback(null, null);
    }

    // Extract the value of facteur_emission from the first row
  ;
    callback(null, result[0][`CH4b`]);
  });

}



function getN2O(entries, callback) {
  const query = "SELECT * FROM facteurs WHERE TRIM(`Secteur 1`) = ? AND TRIM(`Secteur 2`) = ? AND TRIM(`Secteur 3`) = ? AND TRIM(`Secteur 4`) = ? AND TRIM(`Secteur 5`) = ? AND TRIM(`Type Ligne`) = ? AND TRIM(`Type poste`) = ? AND TRIM(`Nom base français`) = ? LIMIT 1;";

  pool.query(query, entries, (err, results) => {
    if (err) {
      // Pass the error to the callback function
      return callback(err, err);
    }

    if (results.length === 0) {
      // No matching rows found, return null
      return callback(null, null);
    }

    // Extract the value of facteur_emission from the first row
  ;
    callback(null, result[0][`N2O`]);
  });

}




// Close the connection
connection.end();*/