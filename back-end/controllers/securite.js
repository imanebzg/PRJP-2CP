const bcrypt = require('bcryptjs'); 
const connection = require('../config/database');

exports.changePassword = (req, res) => {
    
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;
   // const userId = req.user.company_id; 
   console.log("id changePassword= ", id)
   console.log("oldPassword changePassword= ", oldPassword)
   console.log("newPassword changePassword= ", newPassword)

    connection.query('SELECT password FROM companies WHERE email = ?', [id], async (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length > 0) {
            const match = await bcrypt.compare(oldPassword, results[0].password);

            if (!match) {
                return res.status(401).json({ message: 'Old password does not match' });
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            connection.query('UPDATE companies SET password = ? WHERE email = ?', [hashedPassword, id], (error, results) => {
                if (error) {
                    return res.status(500).json({ message: 'Failed to update password' });
                }

                res.status(200).json({ message: 'Password successfully updated' });
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    });
};
