const db = require('../config/database');

exports.addProduct = (req, res) => {
    const {
        Type_Ligne, Structure, Statut, Nom, Nom_attribut_français, Nom_frontière_français, Secteur1, Secteur2, Secteur3, Secteur4, Secteur5,
        Unite_français, Contributeur, Localisation_geographique, Sous_localisation_geographique_français,
        Incertitude, Transparence, Qualité, Qualité_TeR,
        Qualité_GR, Qualité_TiR, Qualité_C, Qualité_P, Qualit_M, Type_poste,
        Total_poste_non_decompose, CO2f, CH4f, CH4b, N2O, Code_gaz_supplémentaire_1, Valeur_gaz_supplémentaire_1,
        Code_gaz_supplémentaire_2, Valeur_gaz_supplémentaire_2, Code_gaz_supplémentaire_3, Valeur_gaz_supplémentaire_3,
        Code_gaz_supplémentaire_4, Valeur_gaz_supplémentaire_4, Code_gaz_supplémentaire_5, Valeur_gaz_supplémentaire_5,
        Autres_GES, CO2b
    } = req.body;

    const sql = `
        INSERT INTO base_de_donnees (
            Type_Ligne, Structure, Statut, Nom, Nom_attribut_français, Nom_frontière_français, Secteur1, Secteur2, Secteur3, Secteur4, Secteur5,
            Unite_français, Contributeur, Localisation_geographique, Sous_localisation_geographique_français,
            Incertitude, Transparence, Qualité, Qualité_TeR,
            Qualité_GR, Qualité_TiR, Qualité_C, Qualité_P, Qualit_M, Type_poste,
            Total_poste_non_decompose, CO2f, CH4f, CH4b, N2O, \`Code gaz supplémentaire 1\`, \`Valeur gaz supplémentaire 1\`,
            \`Code gaz supplémentaire 2\`, \`Valeur gaz supplémentaire 2\`, \`Code gaz supplémentaire 3\`, \`Valeur gaz supplémentaire 3\`,
            \`Code gaz supplémentaire 4\`, \`Valeur gaz supplémentaire 4\`, \`Code gaz supplémentaire 5\`, \`Valeur gaz supplémentaire 5\`,
            Autres_GES, CO2b
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const values = [
        Type_Ligne, Structure, Statut, Nom, Nom_attribut_français, Nom_frontière_français, Secteur1, Secteur2, Secteur3, Secteur4, Secteur5,
        Unite_français, Contributeur, Localisation_geographique, Sous_localisation_geographique_français,
        Incertitude, Transparence, Qualité, Qualité_TeR,
        Qualité_GR, Qualité_TiR, Qualité_C, Qualité_P, Qualit_M, Type_poste,
        Total_poste_non_decompose, CO2f, CH4f, CH4b, N2O, Code_gaz_supplémentaire_1, Valeur_gaz_supplémentaire_1,
        Code_gaz_supplémentaire_2, Valeur_gaz_supplémentaire_2, Code_gaz_supplémentaire_3, Valeur_gaz_supplémentaire_3,
        Code_gaz_supplémentaire_4, Valeur_gaz_supplémentaire_4, Code_gaz_supplémentaire_5, Valeur_gaz_supplémentaire_5,
        Autres_GES, CO2b
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting data", err);
            return res.status(500).send('Failed to add product');
        }
        res.status(201).send('Product added successfully');
    });
};
