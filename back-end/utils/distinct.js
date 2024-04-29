const connection = require('../config/database');

function getNomAttribut(product) {
    let sql, NomAttribut;
    sql = `SELECT DISTINCT \`Nom_attribut_français\` FROM \`base_de_donnees\` WHERE TRIM(\`Nom\`) = ? ;`;
    connection.query(sql, [product], (err, rows) => {
        if (err) {
            callback(err);
        } else {
            const distinctValues = rows.map(row => row["Nom_attribut_français"]);
            const areAllValuesIdentical = distinctValues.every(value => value === distinctValues[0]);
            if (areAllValuesIdentical) {
                NomAttribut = distinctValues[0];
                return;
              } else { // Sinon, laisse l'utilisateur entrer la valeur appropriée
        
                console.log("Les valeurs sont différentes. Veuillez entrer la valeur appropriée pour NomAttribut.");
                return;
              }
            }
    })
  }

  getNomAttribut("Tiramisu");

  function getNomFrontiere(product, NomAttribut) {
    let sql, NomFrontiere;
    sql = `SELECT DISTINCT \`Nom_frontière_français\` FROM \`base_de_donnees\` WHERE TRIM(\`Nom\`) = ?   AND TRIM(\`Nom_attribut_français\`) = ? ;`;
    
    connection.query(sql, [product, NomAttribut], (err, rows) => {
      if (err) {
        callback(err);
    } else {
        const distinctValues = rows.map(row => row["Nom frontière français"]);
  
        // Vérification si toutes les valeurs sont identiques
        const areAllValuesIdentical = distinctValues.every(value => value === distinctValues[0]);
  
        if (areAllValuesIdentical) {
          NomFrontiere = distinctValues[0];
        } else {     // Sinon, laisse l'utilisateur entrer la valeur appropriée
          console.log("Les valeurs sont différentes. Veuillez entrer la valeur appropriée pour NomFrontiere.");
        }
    }

    })
  }

  
  
/*
  function getTagsfrancais(product, NomAttribut, NomFrontiere) {
    let sql, Tags;
    sql = `SELECT DISTINCT \`Tags français\` FROM \`basecarbone-v17-fr\` WHERE TRIM(\`Nom base français\`) = '${product}'   AND TRIM(\`Nom attribut français\`) = '${NomAttribut}' AND TRIM(\`Nom frontière français\`) = '${NomFrontiere}';`;
  
    connection.promise().query(sql)
      .then(([rows, fields]) => {
        const distinctValues = rows.map(row => row["Tags français"]);
  
        // Vérification si toutes les valeurs sont identiques
        const areAllValuesIdentical = distinctValues.every(value => value === distinctValues[0]);
  
        if (areAllValuesIdentical) {
          NomAttribut = distinctValues[0];
        } else {     // Sinon, laisse l'utilisateur entrer la valeur appropriée
          console.log("Les valeurs sont différentes. Veuillez entrer la valeur appropriée .");
        }
      })
      .catch((err) => {
        console.error('Error executing query:', err);
      });
  }*/
  
  connection.end();