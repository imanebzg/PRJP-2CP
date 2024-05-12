const connection = require('../config/database'); 

const saveBilan = async (req, res) => {
  try {
    const { companyId, startDate, endDate, globalRate } = req.body; 

    // Insert bilan data into the database
    await connection.execute('INSERT INTO bilan (company_id, start_date, end_date, global_rate) VALUES (?, ?, ?, ?)', [companyId, startDate, endDate, globalRate]);

    res.status(201).json({ message: 'Bilan saved successfully' });
  } catch (error) {
    console.error('Error saving bilan:', error);
    res.status(500).json({ message: 'Failed to save bilan' });
  }
};

module.exports = { saveBilan };
