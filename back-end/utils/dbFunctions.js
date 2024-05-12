
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



async function getUnit(product,secteur1, secteur2, secteur3, secteur4, secteur5, res) {
  let sql;
  sql = `SELECT DISTINCT \`Unite_français\` FROM \`base_de_donnees\` WHERE TRIM(Nom) = ? AND TRIM(\`Secteur1\`) = ?  and TRIM(\`Secteur2\`) = ?  and TRIM(\`Secteur3\`) = ? and TRIM(\`Secteur4\`) = ? and TRIM(\`Secteur5\`) = ?;`;

  return new Promise((resolve, reject) => {
    connection.query(sql, [product.trim(),secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim() , secteur5.trim()], (err, result) => {
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
async function getNomAttribut(product,secteur1, secteur2, secteur3, secteur4, secteur5, unite, res) {
  let sql = `SELECT DISTINCT \`Nom_attribut_français\` FROM \`base_de_donnees\` WHERE TRIM(Nom) = ? AND TRIM(\`Secteur1\`) = ?  and TRIM(\`Secteur2\`) = ?  and TRIM(\`Secteur3\`) = ? and TRIM(\`Secteur4\`) = ? and TRIM(\`Secteur5\`) = ? AND TRIM(\`Unite_français\`) = ? ;`;

  const params = [product , res];
  return new Promise((resolve, reject) => {
    connection.query(sql, [product.trim(),secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim() , secteur5.trim() , unite.trim()], (err, result) => {
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
async function getNomFrontiere(product,secteur1, secteur2, secteur3, secteur4, secteur5, unite, NomAttribut, res) {
  let sql = `SELECT DISTINCT \`Nom_frontière_français\` FROM \`base_de_donnees\` WHERE TRIM(Nom) = ? AND TRIM(\`Secteur1\`) = ?  and TRIM(\`Secteur2\`) = ?  and TRIM(\`Secteur3\`) = ? and TRIM(\`Secteur4\`) = ? and TRIM(\`Secteur5\`) = ? AND TRIM(\`Unite_français\`) = ? AND TRIM(\`Nom_attribut_français\`) = ?;`;

  const params = [product,NomAttribut , res];
  return new Promise((resolve, reject) => {
    connection.query(sql, [product.trim(),secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim() , secteur5.trim() , unite.trim() , NomAttribut.trim()], (err, result) => {
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
async function getContributeur(product,secteur1, secteur2, secteur3, secteur4, secteur5, unite, NomAttribut, NomFrontiere, res) {
  let sql = `SELECT DISTINCT \`Contributeur\` FROM \`base_de_donnees\` WHERE TRIM(Nom) = ? AND TRIM(\`Secteur1\`) = ?  and TRIM(\`Secteur2\`) = ?  and TRIM(\`Secteur3\`) = ? and TRIM(\`Secteur4\`) = ? and TRIM(\`Secteur5\`) = ? AND TRIM(\`Unite_français\`) = ? AND TRIM(\`Nom_attribut_français\`) = ? AND TRIM(\`Nom_frontière_français\`) = ? ;`;

  return new Promise((resolve, reject) => {
    connection.query(sql, [product.trim(),secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim() , secteur5.trim() , unite.trim() , NomAttribut.trim() ,NomFrontiere.trim()], (err, result) => {
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
async function getLocalisation(product,secteur1, secteur2, secteur3, secteur4, secteur5, unite, NomAttribut, NomFrontiere, contributeur,res) {
  let sql = `SELECT DISTINCT \`Localisation_geographique\` FROM \`base_de_donnees\` WHERE TRIM(Nom) = ? AND TRIM(\`Secteur1\`) = ?  and TRIM(\`Secteur2\`) = ?  and TRIM(\`Secteur3\`) = ? and TRIM(\`Secteur4\`) = ? and TRIM(\`Secteur5\`) = ? AND TRIM(\`Unite_français\`) = ? AND TRIM(\`Nom_attribut_français\`) = ? AND TRIM(\`Nom_frontière_français\`) = ?  AND TRIM(\`Contributeur\`) = ? ;`;

  return new Promise((resolve, reject) => {
    connection.query(sql, [product.trim(),secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim() , secteur5.trim() , unite.trim() , NomAttribut.trim() ,NomFrontiere.trim() , contributeur.trim()], (err, result) => {
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
async function getSousLocalisation(product,secteur1, secteur2, secteur3, secteur4, secteur5, unite, NomAttribut, NomFrontiere, contributeur,localisation, res) {
  let sql = `SELECT DISTINCT \`Sous_localisation_geographique_français\` FROM \`base_de_donnees\` WHERE TRIM(Nom) = ? AND TRIM(\`Secteur1\`) = ?  and TRIM(\`Secteur2\`) = ?  and TRIM(\`Secteur3\`) = ? and TRIM(\`Secteur4\`) = ? and TRIM(\`Secteur5\`) = ? AND TRIM(\`Unite_français\`) = ? AND TRIM(\`Nom_attribut_français\`) = ? AND TRIM(\`Nom_frontière_français\`) = ?  AND TRIM(\`Contributeur\`) = ?  AND TRIM(\`Localisation_geographique\`) = ? ;`;

  return new Promise((resolve, reject) => {
    connection.query(sql, [product.trim(),secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim() , secteur5.trim() , unite.trim() , NomAttribut.trim() ,NomFrontiere.trim() , contributeur.trim() , localisation.trim() ], (err, result) => {
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




async function calculeParScope(nom, NomAtt, NomFrontiere, contributeur, localisation, sousLocalisation, secteur1, secteur2, secteur3, secteur4, secteur5, unite) {
    try {
    
        const tauxElement = await getTaux('element', nom, NomAtt, NomFrontiere, contributeur, localisation, sousLocalisation, secteur1, secteur2, secteur3, secteur4, secteur5, unite, '');
        const postes = await getPostes(nom, 'Poste');

        let sumScope1 = 0;
        let sumScope2 = 0;
        let sumScope3 = 0;

        for (let poste of postes) {
            const scopes = await getScopes(nom, NomAtt, NomFrontiere, contributeur, localisation, sousLocalisation, secteur1, secteur2, secteur3, secteur4, secteur5, poste);
            const tauxPoste = await getTaux('poste', nom, NomAtt, NomFrontiere, contributeur, localisation, sousLocalisation, secteur1, secteur2, secteur3, secteur4, secteur5, unite, poste);

            // Somme des taux pour chaque scope
            for (let scope of scopes) {
                switch (scope) {
                    case 1:
                        sumScope1 += tauxPoste.reduce((acc, curr) => acc + curr, 0);
                        break;
                    case 2:
                        sumScope2 += tauxPoste.reduce((acc, curr) => acc + curr, 0);
                        break;
                    case 3:
                        sumScope3 += tauxPoste.reduce((acc, curr) => acc + curr, 0);
                        break;
                    default:
                        break;
                }
            }
        }

        console.log(`Somme des taux pour le scope 1: ${sumScope1}`);
        console.log(`Somme des taux pour le scope 2: ${sumScope2}`);
        console.log(`Somme des taux pour le scope 3: ${sumScope3}`);
    } catch (error) {
        console.error('Error:', error);
    }
}
module.exports = {getSecteur5,getSecteur4 ,getSecteur3, getSecteurs, getProducts , getUnit , getNomAttribut, getNomFrontiere , getContributeur, getLocalisation ,getSousLocalisation};
