import React, { useState } from 'react';
import './Securite.css'; 

function ChangePasswordForm({ companyId }) {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            alert('New passwords do not match!');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/securite/change-password/${companyId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    oldPassword: formData.oldPassword,
                    newPassword: formData.newPassword
                })
            });

            const data = await response.json();
            if (response.status === 200) {
                alert('Password successfully changed!');
            } else {
                throw new Error(data.message || 'Failed to change password');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="Securite">
            <div className="title"><p>Change Password</p></div>
            <form onSubmit={handleSubmit} className="user_details">
                <div className="input_box">
                    <label>Old Password:</label>
                    <input type="password" name="oldPassword" value={formData.oldPassword} onChange={handleChange} />
                </div>
                <div className="input_box">
                    <label>New Password:</label>
                    <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
                </div>
                <div className="input_box">
                    <label>Confirm New Password:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                </div>
                <button type="submit" className="btn1">Changer mot de passe</button>
            </form>
        </div>
    );
}

export default ChangePasswordForm;
