const connection = require('../config/database'); 

// Function to delete a user from the database
const deleteUser = (req, res) => {
  const { userId } = req.params;

  // Construct the SQL query to delete user
  const query = `DELETE FROM companies WHERE email = ?`;

  // Execute the query
  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
};

module.exports = { deleteUser };