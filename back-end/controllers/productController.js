const connection = require('../config/database'); // Mettre le chemin correct vers votre fichier de configuration de base de données

exports.getProductData = (req, res) => {
  const selectedProduct = req.query.productName;
  //const selectedProduct = 'Tourbe';
console.log("ici3")
console.log("selectedProduct controller ",selectedProduct)

  const query = `SELECT * FROM base_de_donnees WHERE Nom = ?`;

  connection.query(query, [selectedProduct], (err, rows) => {
    if (err) {
      console.error('Error querying database: ' + err.stack);
      res.status(500).send('Error querying database');
      console.log("ici4")

      return;
    }

    let firstTotalPosteNonDecompose;
    rows.forEach((row, index) => {
      if (row.Type_poste !== "Total" && !firstTotalPosteNonDecompose && row.Type_poste !== "") {
        firstTotalPosteNonDecompose = parseFloat(row.Total_poste_non_decompose);
        console.log("ici5")

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
