
const connection = require('../config/database');
const mysql = require('mysql2');

async function gettaux(ligne, nom, secteur1, secteur2, secteur3, secteur4, secteur5, unite, poste) {
    let sqlquery = `
    SELECT DISTINCT \`Total_poste_non_decompose\`
    FROM \`base_de_donnees\`
    WHERE TRIM(\`Secteur1\`) = ?
    AND TRIM(\`Secteur2\`) = ?
    AND TRIM(\`Secteur3\`) = ?
    AND TRIM(\`Secteur4\`) = ?
    AND TRIM(\`Secteur5\`) = ?
    AND TRIM(\`Nom\`) = ?
    AND TRIM(\`Type_Ligne\`) = ?
    AND TRIM(\`Type_poste\`) = ? 
    AND TRIM(\`Unite_français\`) = ?;`
    return new Promise((resolve, reject) => {
        connection.query(sqlquery, [secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim(), secteur5.trim(), nom.trim(), ligne.trim(), poste.trim(), unite.trim()], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                reject(err);
              } else {
                const taux = result.map(row => row.Total_poste_non_decompose);
                resolve(taux);
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
  
  
async function calculeParScope(nom, NomAtt, NomFrontiere, contributeur, localisation, sousLocalisation, secteur1, secteur2, secteur3, secteur4, secteur5, unite) {
    try {
   
        const tauxElement = await gettaux('Element', nom, NomAtt, NomFrontiere, contributeur, localisation, sousLocalisation, secteur1, secteur2, secteur3, secteur4, secteur5, unite, '');
        const postes = await getPostes(nom, 'Poste');

        let sumScope1 = 0;
        let sumScope2 = 0;
        let sumScope3 = 0;

        for (let poste of postes) {
            const scopes = await getScopes(nom, NomAtt, NomFrontiere, contributeur, localisation, sousLocalisation, secteur1, secteur2, secteur3, secteur4, secteur5, poste);
            const tauxPoste = await gettaux('Poste', nom, NomAtt, NomFrontiere, contributeur, localisation, sousLocalisation, secteur1, secteur2, secteur3, secteur4, secteur5, unite, poste);

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
module.exports =  {calculeParScope}