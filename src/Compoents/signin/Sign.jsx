// Components/signin/Sign.js
import React, { useState } from 'react';
import { useAuth } from '../../store/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signIn(formData.email, formData.password);
      toast.success('Sign in successful');
      navigate('/');  
    } catch (error) {
      console.error('Error signing in:', error);
      toast.error('Wrong email or password');
    }
  };

  return (
    <div className="sign-container">
      <form onSubmit={submitHandler} className="sign-form">
        <h2 className="heading">Sign In</h2>
        <input
          type="email"
          placeholder="Write email here"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="sign-input"
        />
        <input
          type="password"
          placeholder="Write password here"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="sign-input"
        />
        <button type="submit" className="sign-button">Sign In</button>
      </form>
      <p className="sign-footer">
        Don't have an account? <Link to="/signup" className="sign-link">Sign Up</Link>
      </p>
      <ToastContainer />
    </div>
  );
};

export default Sign;
