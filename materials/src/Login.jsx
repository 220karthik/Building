import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const allowedUsers = [
  { email: 'karthiksolaisamy5@gmail.com', password: 'Karthik#46' },
];

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = allowedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setMessage('');
      navigate('/admindash');
    } else {
      setMessage('User not found. Please sign up first.');
    }
  };

  const goToSignup = () => {
    navigate('/Signin');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
          <button type="submit">Log In</button>
          <button type="button" onClick={goToSignup} style={{ backgroundColor: '#555' }}>
            Sign Up
          </button>
        </div>

        {message && <p className="error-message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
