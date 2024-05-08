const connection = require('../config/database');

function getCompanyById(req, res) {
    const { id } = req.params;
    const queryString = "SELECT * FROM companies WHERE company_id = ?";
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
    const { name, industry, email, phonenum, contactPerson, location, postalCode } = req.body;
    const queryString = "UPDATE companies SET company_name = ?, industry = ?, email = ?, phone_number = ?, contact_person = ?, location = ?, postal_code = ? WHERE company_id = ?";
    connection.query(queryString, [name, industry, email, phonenum, contactPerson, location, postalCode, id], (err, results) => {
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
