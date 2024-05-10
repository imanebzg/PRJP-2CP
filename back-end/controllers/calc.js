/*const pool = require('../config/database');

exports.calc = (req, res) => {
    const { typeLigne, structure, statut, Nom, nomAttribut, nomFrontiere, secteur1, secteur2, secteur3, secteur4, secteur5, unite, typePoste, quantite } = req.body;
    
    function calculateCarbonBalance(totalPosteNonDecompose) {
        const carbonBalance = parseFloat(totalPosteNonDecompose) * parseFloat(quantite);
        res.status(200).json({ carbonBalance });
    }
    
    function gettaux(callback) {
        const params = [secteur1, secteur2, secteur3, secteur4, secteur5, Nom, typeLigne];
        //const params = [Secteur1, Secteur2, Secteur3, Secteur4, Secteur5, typeLigne, structure, statut, nomBase, nomAttribut, nomFrontiere, typePoste];
        /* let sqlquery = `
            SELECT DISTINCT \`Total_poste_non_decompose\`
            FROM \`base_de_donnees\`
            WHERE TRIM(\`Secteur1\`) = ?
            AND TRIM(\`Secteur2\`) = ?
            AND TRIM(\`Secteur3\`) = ?
            AND TRIM(\`Secteur4\`) = ?
            AND TRIM(\`Secteur5\`) = ?
            AND TRIM(\`Type_Ligne\`) = ?
            AND TRIM(\`Structure\`) = ?
            AND TRIM(\`Statut\`) = ?
            AND TRIM(\`Nom\`) = ?
            AND TRIM(\`Nom_attribut_français\`) = ?
            AND TRIM(\`Nom_frontière_français\`) = ?
            AND TRIM(\`Type_poste\`) = ?;
        `;//
        
        let sqlquery = `
        SELECT DISTINCT \`Total_poste_non_decompose\`
        FROM \`base_de_donnees\`
        WHERE TRIM(\`Secteur1\`) = ?
        AND TRIM(\`Secteur2\`) = ?
        AND TRIM(\`Secteur3\`) = ?
        AND TRIM(\`Secteur4\`) = ?
        AND TRIM(\`Secteur5\`) = ?
        AND TRIM(\`Nom\`) = ?
        AND TRIM(\`Type_Ligne\`) = ?; `;
        
        pool.query(sqlquery, params, (err, rows) => {
            if (err) {
                callback(err);
            } else {
                if (rows.length === 0) {
                    callback(null, 0); // Return 0 if no matching records found
                } else {
                    const totalPosteNonDecompose = rows[0]["Total_poste_non_decompose"];
                    callback(null, totalPosteNonDecompose);
                }
            }
        });
    }
    
    gettaux((err, totalPosteNonDecompose) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal server error' }); // Return an error response if needed
        } else {
            calculateCarbonBalance(totalPosteNonDecompose);
        }
    });
};
*/
const connection = require('../config/database');
// calcul un produit
exports.calc = async (req, res) => {
    const { nom, secteur1, secteur2, secteur3, secteur4, secteur5, unite, quantite } = req.body;
    const info = [ nom, secteur1, secteur2, secteur3, secteur4, secteur5, unite, quantite];
    try {
        const totalPosteNonDecompose = await gettaux(nom, secteur1, secteur2, secteur3, secteur4, secteur5, unite, quantite);
        let carbonBalance = parseFloat(totalPosteNonDecompose) * parseFloat(quantite);
        return res.status(200).json({ info, carbonBalance });
    } catch (error) {
        console.error('Error executing query:', error);
        return res.status(500).json({ error: 'Internal server error' });
    } finally{
        carbonBalance = 0;

    }
    
};

async function gettaux( nom, secteur1, secteur2, secteur3, secteur4, secteur5, unite) {
    let sqlquery = `
    SELECT DISTINCT \`Total_poste_non_decompose\`
    FROM \`base_de_donnees\`
    WHERE TRIM(\`Secteur1\`) = ?
    AND TRIM(\`Secteur2\`) = ?
    AND TRIM(\`Secteur3\`) = ?
    AND TRIM(\`Secteur4\`) = ?
    AND TRIM(\`Secteur5\`) = ?
    AND TRIM(\`Nom\`) = ?
    AND TRIM(\`Unite_français\`) = ?;`
    return new Promise((resolve, reject) => {
        connection.query(sqlquery, [secteur1.trim(), secteur2.trim(), secteur3.trim(), secteur4.trim(), secteur5.trim(), nom.trim(), unite.trim()], (err, result) => {
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


    /*console.log("query : "+sqlquery);
    const results = await connection.query(sqlquery);

    if (rows && rows.length >0 ) {
        return rows[0]["Total_poste_non_decompose"];
    } else {
        throw new Error("No matching records found");
    }
}
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
*/ /*
exports.calc = (req, res) => {
    //const { ligne, structure, statut, nom, NomAttribut, NomFrontiere, secteur1, secteur2, secteur3, secteur4, secteur5, unite, poste, quantite } = req.body;
    //const info = [ligne, structure, statut, nom, NomAttribut, NomFrontiere, secteur1, secteur2, secteur3, secteur4, secteur5, unite, poste, quantite];

    const { ligne, nom, secteur1, secteur2, secteur3, secteur4, secteur5, unite, poste, quantite } = req.body;
    const info = [ligne, nom, secteur1, secteur2, secteur3, secteur4, secteur5, unite, poste, quantite];

    function calculateCarbonBalance(totalPosteNonDecompose) {
        const carbonBalance = parseFloat(totalPosteNonDecompose) * parseFloat(quantite);
        console.log("facteur : totalPosteNonDecompose"+totalPosteNonDecompose);
        console.log({info, carbonBalance});
        return res.status(200).json({info, carbonBalance});
    }

    function gettaux(callback) {
        const params = [secteur1, secteur2, secteur3, secteur4, secteur5, nom, ligne];
        let sqlquery = `
        SELECT DISTINCT \`Total_poste_non_decompose\`
        FROM \`base_de_donnees\`
        WHERE TRIM(\`Secteur1\`) = ?
        AND TRIM(\`Secteur2\`) = ?
        AND TRIM(\`Secteur3\`) = ?
        AND TRIM(\`Secteur4\`) = ?
        AND TRIM(\`Secteur5\`) = ?
        AND TRIM(\`Nom\`) = ?
        AND TRIM(\`Type_Ligne\`) = ?; `;

        pool.query(sqlquery, params, (err, rows) => {
            if (err) {
                callback(err);
            } else {
                if (rows.length === 0) {
                    callback(null, 0); // Return 0 if no matching records found
                } else {
                    const totalPosteNonDecompose = rows[0]["Total_poste_non_decompose"];
                    callback(null, totalPosteNonDecompose);
                }
            }
        });
    }

    gettaux((err, totalPosteNonDecompose) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({error : 'Internal server error'});
        } else {
            calculateCarbonBalance(totalPosteNonDecompose);
        }
    });

    

};
*/
/*
exports.calc = async (req, res) => {
    const { ligne, nom, secteur1, secteur2, secteur3, secteur4, secteur5, unite, poste, quantite } = req.body;
    const info = { ligne, nom, secteur1, secteur2, secteur3, secteur4, secteur5, unite, poste, quantite };

    try {
        const totalPosteNonDecompose = await getTauxFromDatabase(secteur1, secteur2, secteur3, secteur4, secteur5, nom, ligne);
        const carbonBalance = calculateCarbonBalance(totalPosteNonDecompose, quantite);

        res.status(200).json({ info, carbonBalance });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

async function getTauxFromDatabase(secteur1, secteur2, secteur3, secteur4, secteur5, nom, ligne) {
    const params = [secteur1, secteur2, secteur3, secteur4, secteur5, nom, ligne];
    const sqlQuery = `
        SELECT DISTINCT \`Total_poste_non_decompose\`
        FROM \`base_de_donnees\`
        WHERE TRIM(\`Secteur1\`) = ?
        AND TRIM(\`Secteur2\`) = ?
        AND TRIM(\`Secteur3\`) = ?
        AND TRIM(\`Secteur4\`) = ?
        AND TRIM(\`Secteur5\`) = ?
        AND TRIM(\`Nom\`) = ?
        AND TRIM(\`Type_Ligne\`) = ?;`;

    const [rows] = await pool.query(sqlQuery, params);
    if (rows.length === 0) {
        return 0; // Return 0 if no matching records found
    } else {
        return rows[0]["Total_poste_non_decompose"];
    }
}

function calculateCarbonBalance(totalPosteNonDecompose, quantite) {
    return parseFloat(totalPosteNonDecompose) * parseFloat(quantite);
}

*/