import React, { useState } from 'react';
import axios from 'axios';
import './loginPage.css';

function LoginPage({ handleLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/user', {
        params: {
          email: email,
          password: password,
        },
      });

      if (response.data && response.data.length > 0) {
        handleLogin(true); 
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error occurred during login');
    }
  };

  return (
    <div className="LoginPage">
      <form onSubmit={handleLoginSubmit}>
        <p>Already have an account?</p>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
