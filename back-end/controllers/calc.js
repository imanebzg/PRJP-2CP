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
const pool = require('../config/database');

exports.calc = (req, res) => {
    const { typeLigne, structure, statut, Nom, nomAttribut, nomFrontiere, secteur1, secteur2, secteur3, secteur4, secteur5, unite, typePoste, quantite } = req.body;

    function calculateCarbonBalance(totalPosteNonDecompose) {
        const carbonBalance = parseFloat(totalPosteNonDecompose) * parseFloat(quantite);
        res.render('result', { carbonBalance });
    }

    function gettaux(callback) {
        const params = [secteur1, secteur2, secteur3, secteur4, secteur5, Nom, typeLigne];
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
            res.status(500).send('Internal server error');
        } else {
            calculateCarbonBalance(totalPosteNonDecompose);
        }
    });

    

};

