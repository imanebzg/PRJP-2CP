import React, { useState } from 'react';
import './Supprimer.css';

const Supprimer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = () => {
    if (isChecked) {
      // Assuming userId is known or can be passed as a prop
      const userId = localStorage.getItem('userEmail');

      fetch(`http://localhost:3001/delete/deleteUser/${userId}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          alert('User deleted successfully');
          localStorage.clear();
          window.location.href = '/'; 
          // Optionally, you can navigate to another page or update UI
        } else {
          throw new Error('Failed to delete user');
        }
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      });
    } else {
      alert('Please confirm deletion by checking the box');
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="Supprimer">
      <div className="container">
        <div className="title">
          <p>Supprimer le compte</p>
        </div>

        <form>
          <div className="user_details">
            <div className="container_check">
              <div className='text_big_small'>
                <div className="title_big">
                  <p>Supprimer le compte de l'entreprise :</p>
                </div>
                <div className="title_small"></div>
              </div>
              <div className="cheking">
                <div className="checkbox-wrapper-4">
                  <input
                    className="inp-cbx"
                    id="morning7"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <label className="cbx" htmlFor="morning7">
                    <span>
                      <svg width="12px" height="10px"></svg>
                    </span>
                    <span>je veux quand même supprimer le compte</span>
                  </label>
                  <svg className="inline-svg">
                    <symbol id="check-4" viewBox="0 0 12 10">
                      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </symbol>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <br />
          <button className="btn1" type="button" onClick={handleDelete}>
            Supprimer
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Supprimer;
