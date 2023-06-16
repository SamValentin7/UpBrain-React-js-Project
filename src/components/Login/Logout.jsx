import PropTypes from 'prop-types';


const Logout = ({ onLogout }) => {
  return (
    <button onClick={onLogout}>Logout</button>
  );
};
Logout.propTypes = {
    onLogout: PropTypes.func.isRequired,
  };
export default Logout;