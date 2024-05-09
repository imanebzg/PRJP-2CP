const connection = require('../config/database');

function getCompanyById(req, res) {
    const { id } = req.params;

    const queryString = "SELECT * FROM companies WHERE email = ?";
    connection.query(queryString, [id], (err, rows) => {
        if (err) {
            console.error("Failed to query for company: " + err);
            res.sendStatus(500);
            return;
        }
        res.json(rows);
    });
}

function updateCompany(req, res) {
    const { id } = req.params;
    const { company_name, industry, email, phone_number, contact_person, location, postal_code } = req.body;
    console.log(company_name, industry, email, phone_number, contact_person, location, postal_code);

    const queryString = "UPDATE companies SET company_name = ?, industry = ?, email = ?, phone_number = ?, contact_person = ?, location = ?, postal_code = ? WHERE email = ?";
    connection.query(queryString, [company_name, industry, email, phone_number, contact_person, location, postal_code, id], (err, results) => {
        if (err) {
            console.error("Failed to update company: " + err);
            res.sendStatus(500);
            return;
        }
        res.sendStatus(200);
    });
}

module.exports = {
    getCompanyById,
    updateCompany
};
