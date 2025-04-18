


import React, { useState } from 'react';
import './Login.css';
import { generateHash } from '../utils/hash'; // ✅ Your hash function

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hash = await generateHash(email, password);

    try {
      const response = await fetch(
        `http://localhost:5000/api/${activeTab}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, hash }),
        }
      );

      const data = await response.json();
      setMessage(data.message || 'Success');
    } catch (error) {
      console.error('Failed to fetch:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="logo-circle">PB</div>
        <h1 className="brand-name">policybazaar</h1>

        <div className="welcome-text">
          <h2>Welcome to policybazaar</h2>
          <p>Login or create an account to manage your scheduling journey</p>
        </div>

        <div className="tabs">
          <button
            className={`tab ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`tab ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="login-button">
            <span className="button-icon">🔓</span>
            {activeTab === 'login' ? 'Login' : 'Create account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: 'green', marginTop: '10px' }}>
          {message}
        </p>

        <div className="footer">
          <p>
            By using policybazaar, you agree to our{' '}
            <a href="#terms">Terms of Service</a> and{' '}
            <a href="#privacy">Privacy Policy</a>.
          </p>
        </div>

        <div className="tags">
          <span className="tag">Secure login</span>
          <span className="tag">Data privacy</span>
          <span className="tag">Personalized scheduling</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
