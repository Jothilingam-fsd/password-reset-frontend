import './FormStyles.css';

const ForgotPassword = () => {
  return (
    <div className="form-container">
      <form className="form-box">
        <h2 className="form-title">Forgot Password</h2>

        <label className="label-text">Enter your email:</label>
        <input type="email" className="input-field" />

        <button className="login-btn">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
