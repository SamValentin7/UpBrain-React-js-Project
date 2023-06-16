import {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import './login.css';

const Logout = ({ onLogout }) => {
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUserImage(user.picture);
    }
  }, []);

  return (
    <Popup
      trigger={
        <button className="logout-btn">
          <img src={userImage} alt="User Profile" className="logout-img" />
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="content">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out?</p>
          </div>
          <div className="actions">
            <button className="button confirm" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

Logout.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default Logout;
