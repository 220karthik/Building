import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    location: '',
  });

  const [error, setError] = useState('');

  // Update form state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const { firstName, lastName, email, contact, location } = formData;
    if (!firstName || !lastName || !email || !contact || !location) {
      setError('Please fill out all fields.');
      return;
    }

    setError('');
    navigate('/Products');
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Signin</h2>

        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Karthik"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="S"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="karthiksolaisamy5@gmail.com"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="9345587584"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Coimbatore, India"
            required
          />
        </div>

        <button type="submit">Sign In</button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
