const connection = require('../config/database'); 

// Controller for deleting data
exports.deleteData = (req, res) => {
    const conditions = req.body.conditions;
    if (!conditions || conditions.length === 0) {
        return res.status(400).send({ message: 'Conditions are required for deletion.' });
    }

    const whereClauses = conditions.map(cond => `${connection.escapeId(cond.key)} = ?`).join(' AND ');
    const values = conditions.map(cond => cond.value);

    const query = `DELETE FROM base_de_donnees WHERE ${whereClauses}`;

    connection.query(query, values, (error, results) => {
        if (error) {
            return res.status(500).send({ message: error.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).send({ message: 'No record found with the provided conditions' });
        }
        res.send({ message: 'Record(s) deleted successfully' });
    });
};
