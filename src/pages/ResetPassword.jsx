import './FormStyles.css';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const { token } = useParams();
  console.log("Reset token:", token); // Log the token for debugging or use it as needed

  return (
    <div className="form-container">
      <form className="form-box">
        <h2 className="form-title">Reset Password</h2>

        <label className="label-text">New Password:</label>
        <input type="password" className="input-field" />

        <label className="label-text">Confirm Password:</label>
        <input type="password" className="input-field" />

        <button className="login-btn">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
