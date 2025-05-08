import React from 'react';
import { Link } from 'react-router-dom';
import './FormStyles.css'; 

const Login = () => {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2 className="form-title">Login</h2>
        <label className="label-text">Email :</label>
        <input type="email" className="input-field" />
        <label className="label-text">Password :</label>
        <input type="password" className="input-field" />
        <Link to="/forgot-password" className="forgot-link">forgot Password?</Link>
        <button className="login-btn">Log In</button>
        <p className="create-link">New Here? Create Account</p>
      </form>
    </div>
  );
};

export default Login;
