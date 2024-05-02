


// Express route to handle GET requests for products
app.get('/products', (req, res) => {
  // Retrieve selected product from request query
  const selectedProduct = req.query.productName;

  console.log("selectedProduct :",selectedProduct)
  // Query database to get rows for the selected product
  const query = `SELECT * FROM base_de_donnees WHERE Nom = ?`;
  connection.query(query, [selectedProduct], (err, rows) => {
    if (err) {
      console.error('Error querying database: ' + err.stack);
      return;
    }

// Find the value of Total_poste_non_decompose from the first row
let firstTotalPosteNonDecompose;

rows.forEach((row, index) => {
  if (row.Type_poste !== "Total" && !firstTotalPosteNonDecompose && row.Type_poste !== "") {
    firstTotalPosteNonDecompose = parseFloat(row.Total_poste_non_decompose);
  }
});

// Calculate sums of columns
const sums = {
  CO2f: 0,
  CH4f: 0,
  N2O: 0,
  CO2b: 0,
  Total_poste_non_decompose: 0
};

rows.forEach(row => {
  if (row.Type_poste !== "Total" && row.Type_poste !== "") {
    // Parse values to numbers before adding
    sums.CO2f += parseFloat(row.CO2f) || 0; // Use 0 if parsing fails
    sums.CH4f += parseFloat(row.CH4f) || 0;
    sums.N2O += parseFloat(row.N2O) || 0;
    sums.CO2b += parseFloat(row.CO2b) || 0;
    sums.Total_poste_non_decompose += parseFloat(row.Total_poste_non_decompose) || 0;
  }
// Vérifie si le tableau n'est pas vide et si le dernier élément est 'Combustible' ou 'Amont'
const shouldReverse = rows.length > 0 && (
  [ "Combustion",
  "Amont",
  "Fabrication",
  "Total Non Décomposé",
  "Combustion à la centrale",
  "Emissions fugitives",
  "Transport et distribution",
  "Energie",
  "Transport",
  "Fabrication",
  "Collecte",
  "Traitement",
  "Fuites",
  "Incinération",
  "Energie (électricité : réseaux, usines)",
  "Intrants",
  "Energie (Electricité: réseaux, usines)",
  "Emissions fugitives (process d'épuration)",
  "Emissions fugitives (Rejets au milieu naturel)",
  "Amortissement"
].includes(rows[rows.length - 1].Type_poste)
);


  // Inverser les lignes si la condition est vraie
  if (!shouldReverse) {

    rows.reverse();
  }
  

});

const style = `<style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
}
table {
  width: 100%;
  border-collapse: separate; /* Permet d'ajouter des espacements entre les cellules */
  border-spacing: 10px; /* Espacement de 10px entre les cellules, à la fois horizontalement et verticalement */
  margin: 20px 0;
}

th, td {
  padding: 8px;
  text-align: left;
  color: black;
  background-color: white; /* Définir la couleur de fond pour th et td */
  border-radius: 5px; /* Ajoutez des bordures arrondies si désiré */
  border: 2px solid #E8EFFB;
}

th {
  background-color: rgba(193, 193, 193, 0.4); 
  color: black; 
  border: 1.5px solid rgba(193, 193, 193, 0.4); 
  font-weight:300;
}
.seconde-colonne {
  background-color: #E8EFFB; 
}

tr:last-child td { 
  background-color: #E8EFFB;
}

</style>
`;

// Render the table with retrieved rows and sums
res.send(`
      ${style}
      <table>
        <tr>
          <th>Postes</th>
          <th>CO2f</th>
          <th>CH4f</th>
          <th>N2O</th>
          <th>CO2b</th>
          <th>Total</th>
        </tr>
        ${rows.map(row => `
          <tr>
            <td>${row.Type_poste}</td>
            <td>${parseFloat(row.CO2f).toFixed(3)}</td>
            <td>${parseFloat(row.CH4f).toFixed(3)}</td>
            <td>${parseFloat(row.N2O).toFixed(3)}</td>
            <td>${parseFloat(row.CO2b).toFixed(3)}</td>
            <td class="seconde-colonne">${parseFloat(row.Total_poste_non_decompose).toFixed(3)}</td>
          </tr>
        `).join('')}
      </table>
    `);




  });
});

