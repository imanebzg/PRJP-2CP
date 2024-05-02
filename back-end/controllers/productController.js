const connection = require('../config/database'); // Mettre le chemin correct vers votre fichier de configuration de base de données

exports.getProductData = (req, res) => {
    console.log("Query parameters received:", req.query);
  const selectedProduct = req.query.productName;
  const selectedSecteur1 = req.query.Secteur1;
  const selectedSecteur2 = req.query.Secteur2;
  const selectedSecteur3 = req.query.Secteur3;
  const selectedSecteur4 = req.query.Secteur4;
  const selectedSecteur5 = req.query.Secteur5;
  const selectedposte = req.query.Type_poste;
  const selectedligne = req.query.Type_Ligne;
  const selectedcontributeur = req.query.Contributeur;
  const selectedlocalisation = req.query.Localisation_geographique;
  const selectedsouslocalisation = req.query.Sous_localisation_geographique_français;
  const selectedquantite = req.query.quantite;
  const selectednomattribut = req.query.Nom_attribut_français;
  const selectednomfrontiere = req.query.Nom_frontière_français;
  const selectedunite = req.query.Unite_français;




  //const selectedProduct = 'Tourbe';
console.log("selectedProduct controller ",selectedProduct);
console.log(selectedSecteur1 );
console.log( selectedSecteur2 );
console.log(selectedSecteur3);
console.log(selectedSecteur4 );
console.log(selectedSecteur5 );
console.log( selectedposte );
console.log( selectedligne );
console.log( selectedcontributeur );
console.log( selectedlocalisation );
console.log( selectedsouslocalisation );
console.log(selectedquantite );
console.log(selectednomattribut);
console.log( selectednomfrontiere );
console.log( selectedunite );


  const query = `SELECT * FROM base_de_donnees WHERE Nom = ? AND Type_Ligne = ? AND \`Nom_attribut_français\` = ? AND Nom_frontière_français = ? AND Secteur1 = ? AND Secteur2 = ? AND Secteur3 = ? AND Secteur4 = ? AND Secteur5 = ? AND Unite_français= ? AND Contributeur = ? AND Localisation_geographique = ? AND Sous_localisation_geographique_français = ? AND Type_poste = ? ;`;


  let params = [
    selectedProduct, selectedligne, selectednomattribut  ,selectednomfrontiere, selectedSecteur1 ,selectedSecteur2 , selectedSecteur3 ,selectedSecteur4 ,selectedSecteur5, selectedunite ,selectedcontributeur  ,selectedlocalisation ,selectedsouslocalisation ,selectedposte 
  ]
  connection.query(query, params, (err, rows) => {
    if (err) {
      console.error('Error querying database: ' + err.stack);
      res.status(500).send('Error querying database');
      return;
    }

    let firstTotalPosteNonDecompose;
    rows.forEach((row, index) => {
      if (row.Type_poste !== "Total" && !firstTotalPosteNonDecompose && row.Type_poste !== "") {
        firstTotalPosteNonDecompose = parseFloat(row.Total_poste_non_decompose);
      }
    });

    const sums = {
      CO2f: 0,
      CH4f: 0,
      N2O: 0,
      CO2b: 0,
      Total_poste_non_decompose: 0
    };

    rows.forEach(row => {
      if (row.Type_poste !== "Total" && row.Type_poste !== "") {
        sums.CO2f += parseFloat(row.CO2f) || 0;
        sums.CH4f += parseFloat(row.CH4f) || 0;
        sums.N2O += parseFloat(row.N2O) || 0;
        sums.CO2b += parseFloat(row.CO2b) || 0;
        sums.Total_poste_non_decompose += parseFloat(row.Total_poste_non_decompose) || 0;
      }
    });

    const shouldReverse = rows.length > 0 && ["Combustion", "Amont"].includes(rows[rows.length - 1].Type_poste);

    if (!shouldReverse) {
      rows.reverse();
    }
    console.log("rows",rows)

    res.json({ rows, sums }); // Envoie les données sous forme de JSON
  });
};
