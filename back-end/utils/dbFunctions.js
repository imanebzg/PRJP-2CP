
const connection = require('../config/database');
const mysql = require('mysql2');


/* OLD VERSION
async function getSecteurs(i, rep) {
  let sql;
  if (rep != null) {
      let j = i - 1;
      sql = "SELECT DISTINCT `Secteur" + i + "` FROM `base_de_donnees` WHERE TRIM(`Secteur" + j + "`) = ?;";
  } else {
      sql = "SELECT DISTINCT `Secteur" + i + "` FROM `base_de_donnees`;";
  }

  return new Promise((resolve, reject) => {
      connection.query(sql, [rep], (err, result) => {
          if (err) {
              console.log("Error" + err);
              reject(err); // Reject the promise with the error
          } else {
              const distinctValues = result.map(result => result["Secteur" + i + ""]);
              resolve(distinctValues); // Resolve the promise with the data
          }
      });
  });
}
*/


async function getSecteurs(...secteurs) {
  const sql = `SELECT DISTINCT \`Secteur${secteurs.length + 1}\` FROM \`base_de_donnees\` WHERE ${secteurs.map((_, index) => `TRIM(\`Secteur${index + 1}\`) = ?`).join(' AND ')};`;
  return new Promise((resolve, reject) => {
    connection.query(sql, secteurs, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        reject(err);
      } else {
        const distinctValues = result.map(result => Object.values(result)[0]);
        resolve(distinctValues);
      }
    });
  });
}


async function getSecteur3(secteur1, secteur2) {
  const sql = `SELECT DISTINCT \`Secteur3\` FROM \`base_de_donnees\` WHERE TRIM(\`Secteur1\`) = ? AND TRIM(\`Secteur2\`) = ?`;

  return new Promise((resolve, reject) => {
    connection.query(sql, [secteur1.trim(), secteur2.trim()], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        reject(err);
      } else {
        // Extract distinct Secteur3 values from the result
        const distinctValues = result.map(row => row.Secteur3);
        resolve(distinctValues);
      }
    });
  });
}

async function getSecteur4(secteur1, secteur2,secteur3) {
  const sql = `SELECT DISTINCT \`Secteur4\` FROM \`base_de_donnees\` WHERE TRIM(\`Secteur1\`) = ? AND TRIM(\`Secteur2\`) = ? AND TRIM(\`Secteur3\`) = ?`;

  return new Promise((resolve, reject) => {
    connection.query(sql, [secteur1.trim(), secteur2.trim(),  secteur3.trim()], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        reject(err);
      } else {
        // Extract distinct Secteur3 values from the result
        const distinctValues = result.map(row => row.Secteur4);
        resolve(distinctValues);
      }
    });
  });
}


async function getSecteur5(secteur1, secteur2,secteur3,secteur4) {
  const sql = `SELECT DISTINCT \`Secteur5\` FROM \`base_de_donnees\` WHERE TRIM(\`Secteur1\`) = ? AND TRIM(\`Secteur2\`) = ? AND TRIM(\`Secteur3\`) = ?  AND TRIM(\`Secteur4\`) = ?`;

  return new Promise((resolve, reject) => {
    connection.query(sql, [secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim()], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        reject(err);
      } else {
        // Extract distinct Secteur3 values from the result
        const distinctValues = result.map(row => row.Secteur5);
        resolve(distinctValues);
      }
    });
  });
}


async function getProducts(secteur1, secteur2, secteur3, secteur4, secteur5) {
  let sql;
  const params = [secteur1, secteur2, secteur3, secteur4, secteur5];
  sql = `SELECT DISTINCT Nom FROM \`base_de_donnees\` WHERE TRIM(\`Secteur1\`) = ?  and TRIM(\`Secteur2\`) = ?  and TRIM(\`Secteur3\`) = ? and TRIM(\`Secteur4\`) = ? and TRIM(\`Secteur5\`) = ?;`;
  return new Promise((resolve, reject) => {
    connection.query(sql, [secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim() , secteur5.trim()], (err, result) => {
      if (err) {
        console.log("Error" + err);
        reject(err); // Reject the promise with the error
      } else {
        const distinctValues = result.map(result => result["Nom"]);
        resolve(distinctValues);
      }
    });
  });
}


async function getPostes(nom, choix) {
  let sql = `SELECT DISTINCT Type_poste FROM \`base_de_donnees\` WHERE TRIM(\`Nom\`) = ${mysql.escape(nom)} and TRIM(\`Type_Ligne\`) = 'Poste' ;`;
  const params = [nom, choix];
  return new Promise((resolve, reject) => {
    if (choix === "Elément") {
      resolve([' ']);//a voir
    } else {
      connection.query(sql, [nom.trim(), choix.trim()], (err, result) => {
        if (err) {
          console.log("Error" + err);
          reject(err); // Reject the promise with the error
        } else {
          const distinctValues = result.map(result => result["Type_poste"]);
          resolve(distinctValues);
        }
      });
    }
  });
}

async function getLignes(nom) {
  let sql = `SELECT DISTINCT Type_Ligne FROM \`base_de_donnees\` WHERE TRIM(\`Nom\`) = ${mysql.escape(nom)} ;`;
  const params = [nom];

  return new Promise((resolve, reject) => {
    connection.query(sql, [nom.trim()], (err, result) => {
      if (err) {
        console.log("Error" + err);
        reject(err); // Reject the promise with the error
      } else {
        const distinctValues = result.map(result => result["Type_Ligne"]);
        resolve(distinctValues);
      }
    });
  });

}


async function getUnit(product, res) {
  let sql;
  sql = `SELECT DISTINCT \`Unite_français\` FROM \`base_de_donnees\` WHERE TRIM(Nom) = ${mysql.escape(product)} ;`;
  const params = [product, res];


  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, result) => {
      if (err) {
        console.log("Error" + err);
        reject(err); // Reject the promise with the error
      } else {
        const distinctValues = result.map(result => result["Unite_français"]);
        resolve(distinctValues);
      }
    });
  });

}


// Fonction pour récupérer le nom attribut
async function getNomAttribut(product, res) {
  let sql = `SELECT DISTINCT \`Nom_attribut_français\` FROM \`base_de_donnees\` WHERE TRIM(\`Nom\`) = ${mysql.escape(product)}  ;`;
  const params = [product , res];
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, result) => {
      if (err) {
        console.log("Error" + err);
        reject(err); // Reject the promise with the error
      } else {
        const distinctValues = result.map(result => result["Nom_attribut_français"]);
          resolve(distinctValues);
      }
    });
  });
}

// Fonction pour récupérer le nom  frontiere
async function getNomFrontiere(product, NomAttribut, res) {
  let sql = `SELECT DISTINCT \`Nom_frontière_français\` FROM \`base_de_donnees\` WHERE TRIM(\`Nom\`) =  ${mysql.escape(product)}`;
  if (NomAttribut && typeof NomAttribut === 'string') {
    sql += ` AND TRIM(\`Nom_attribut_français\`) = ${mysql.escape(NomAttribut)}`;  
  }

  const params = [product,NomAttribut , res];
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, result) => {
      if (err) {
        console.log("Error" + err);
        reject(err); // Reject the promise with the error
      } else {
        const distinctValues = result.map(result => result["Nom_frontière_français"]);
          resolve(distinctValues);
      }
    });
  });

}


// Fonction pour récupérer le contributeur
async function getContributeur(product, NomAttribut, NomFrontiere, res) {
  let sql = `SELECT DISTINCT \`Contributeur\` FROM \`base_de_donnees\` WHERE TRIM(\`Nom\`) = ${mysql.escape(product)} AND TRIM(\`Nom_attribut_français\`) = ${mysql.escape(NomAttribut)}`;

  if (NomFrontiere && typeof NomFrontiere === 'string') {
    // S'il y a un seul tag, ajoutez simplement la condition pour ce tag
    sql += ` AND TRIM(\`Nom_frontière_français\`) = ${mysql.escape(NomFrontiere)}`;
  }

  const params = [product,NomAttribut , NomFrontiere ,res];
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, result) => {
      if (err) {
        console.log("Error" + err);
        reject(err); // Reject the promise with the error
      } else {
        const distinctValues = result.map(result => result["Contributeur"]);
          resolve(distinctValues);
      }
    });
  });
}

// Fonction pour récupérer la localisation
async function getLocalisation(product, NomAttribut, NomFrontiere, contributeur,res) {
  let sql = `SELECT DISTINCT \`Localisation_geographique\` FROM \`base_de_donnees\` WHERE TRIM(\`Nom\`) = ${mysql.escape(product)} AND TRIM(\`Nom_attribut_français\`) = ${mysql.escape(NomAttribut)} AND TRIM(\`Nom_frontière_français\`) = ${mysql.escape(NomFrontiere)}`;

  if (contributeur && typeof contributeur === 'string') {
    sql += ` AND TRIM(\`Contributeur\`) = '${contributeur}'`;
  }
  const params = [product,NomAttribut , NomFrontiere ,contributeur,res];
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, result) => {
      if (err) {
        console.log("Error" + err);
        reject(err); // Reject the promise with the error
      } else {
        const distinctValues = result.map(result => result["Localisation_geographique"]);
          resolve(distinctValues);
      }
    });
  });
  
}

// Fonction pour récupérer la sous localisation
async function getSousLocalisation(product, NomAttribut, NomFrontiere, contributeur,localisation, res) {
  let sql = `SELECT DISTINCT \`Sous_localisation_geographique_français\` FROM \`base_de_donnees\` WHERE TRIM(\`Nom\`) = ${mysql.escape(product)} AND TRIM(\`Nom_attribut_français\`) = ${mysql.escape(NomAttribut)} AND TRIM(\`Nom_frontière_français\`) = ${mysql.escape(NomFrontiere)} AND TRIM(\`Contributeur\`) = '${contributeur}'`;

  if (contributeur && typeof contributeur === 'string') {
    sql += ` AND TRIM(\`Localisation_geographique\`) = ${mysql.escape(localisation)}`;
  }
  const params = [product,NomAttribut , NomFrontiere ,contributeur,localisation,res];
  return new Promise((resolve, reject) => {
    connection.query(sql, params, (err, result) => {
      if (err) {
        console.log("Error" + err);
        reject(err); // Reject the promise with the error
      } else {
        const distinctValues = result.map(result => result["Sous_localisation_geographique_français"]);
          resolve(distinctValues);
      }
    });
  });
  
}

    /*
async function getScopes(product,Secteur1,postes, res) {
  let table;
  switch(Secteur1){
  case 'Combustibles':
    table = 'combustibles';
  break;

  case 'Process et émissions fugitives ':
    table = 'process_emissions_fugitives';
  break;

  case 'UTCF ':
    table = 'utcf';
  break;

  case 'Achats de biens ':
    table = 'achats_biens';
  break;

  case 'Electricité ':
    table = 'electricite';
  break;

  case 'Transport de marchandises ':
    table = 'transport_marchandises';
  break;

  case 'Transport de personnes ':
    table = 'transport_personnes';
  break;

  case 'Traitement des déchets ':
    table = 'traitement_dechets';
  break;

 // case 'Statistiques territoriales ':
 //   table = '';
 // break;
  }
  try {
    // Asynchronously get the postes
    const postes = await getPostes(product, 'Poste');
    // Generate a SQL query based on distinct postes
    let scopes = [];
    for (let poste of postes) {
        const sql = `SELECT DISTINCT \`scope\` FROM \`${table}\` WHERE TRIM(\`poste\`) = ${mysql.escape(poste)};`;
        const result = await new Promise((resolve, reject) => {
            connection.query(sql, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result.map(row => row['scope']));

                }
            });
        });
        scopes = scopes.concat(result);
        console.log("scopes = ", scopes);
        console.log("results = ", result);

    }
    res.json({ scopes: [...new Set(scopes)] }); // Return unique scopes
} catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
}



}
let postes = ['Energie','Transport'];

getScopes('Poisson (pêche)','Achats de biens ',postes);*/




module.exports = {getSecteur5,getSecteur4 ,getSecteur3, getSecteurs, getProducts , getPostes , getLignes , getUnit , getNomAttribut, getNomFrontiere , getContributeur, getLocalisation ,getSousLocalisation};
