const connection = require('../config/database'); // Mettre le chemin correct vers votre fichier de configuration de base de données

exports.getProductData = (req, res) => {
  const selectedProduct = req.query.nom;
  const selectedSecteur1 = req.query.Secteur1;
  const selectedSecteur2 = req.query.Secteur2;
  const selectedSecteur3 = req.query.Secteur3;
  const selectedSecteur4 = req.query.Secteur4;
  const selectedSecteur5 = req.query.Secteur5;
  const selectedunite = req.query.Unite_français;
  const selectednomattribut = req.query.Nom_attribut_français;
  const selectednomfrontiere = req.query.Nom_frontière_français;
  const selectedcontributeur = req.query.Contributeur;
  const selectedlocalisation = req.query.Localisation_geographique;
  const selectedsouslocalisation = req.query.Sous_localisation_geographique_français;
 
  const selectedquantite = req.query.Quantite;

  const query = `SELECT * FROM base_de_donnees WHERE Nom = ? AND Secteur1 = ? AND Secteur2 = ? AND Secteur3 = ? AND Secteur4 = ? AND Secteur5 = ? AND Unite_français= ? AND Nom_attribut_français = ? AND Nom_frontière_français = ? AND Contributeur = ? AND Localisation_geographique = ? AND Sous_localisation_geographique_français = ?;`;


  const params = [ selectedProduct, selectedSecteur1 ,selectedSecteur2 , selectedSecteur3 ,selectedSecteur4 ,selectedSecteur5, selectedunite , selectednomattribut  ,selectednomfrontiere,selectedcontributeur  ,selectedlocalisation ,selectedsouslocalisation ]
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

    res.json({ rows, sums }); // Envoie les données sous forme de JSON
    
  });
};