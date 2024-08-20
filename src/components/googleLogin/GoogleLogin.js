import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import './GoogleLogin.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null); // To track login errors
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/home');
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google Login successful:', response);
    // Redirect or handle successful login here
    navigate('/home');
  };

  const handleGoogleFailure = (response) => {
    console.log('Google Login failed:', response);
    if (response.error === 'popup_closed_by_user') {
      setLoginError('Login popup was closed before completion.');
    } else {
      setLoginError('Google Login failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <p>Sign in to your account</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>

      {/* Google OAuth Login Button */}
      <div className="google-login">
        <GoogleLogin
          clientId="1096607983057-erbfjipfmndjal1m4s4m8b0kq0agsld8.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={handleGoogleSuccess}
          onFailure={handleGoogleFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>

      {loginError && <p className="error-message">{loginError}</p>}

      <p>Don't have an account? <a href="#">Register here</a></p>
    </div>
  );
}

export default App;
