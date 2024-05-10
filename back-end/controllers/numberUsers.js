const connection = require('../config/database'); 

exports.getCompanyCount = (req, res) => {
    const query = "SELECT COUNT(*) AS count FROM companies WHERE company_name NOT LIKE 'Administrateur%' ";// company_name doesnt start with Administrateur

    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).send({ message: error.message });
        }
        res.send({ count: results[0].count });
    });
};