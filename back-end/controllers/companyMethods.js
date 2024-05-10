const connection = require('../config/database'); 


exports.getAllCompanies = (req, res) => {
    connection.query('SELECT * FROM companies', (error, results) => {
        if (error) {
            return res.status(500).send({ message: error.message });
        }
        res.send(results);
    });
};

exports.deleteCompany = (req, res) => {
    const { id } = req.params;  // assuming the company table has an 'id' column
    connection.query('DELETE FROM companies WHERE company_name = ?', [id], (error, results) => {
        if (error) {
            return res.status(500).send({ message: error.message });
        }
        res.send({ message: 'Company deleted successfully' });
    });
};