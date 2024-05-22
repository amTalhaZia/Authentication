import React, { useState } from 'react';
import { useAuth } from '../../store/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { signUp } = useAuth();
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
            await signUp(formData.email, formData.password);
            toast.success('Sign up successful');
        } catch (error) {
            console.error('Error signing up:', error);
            toast.error('Sign up failed');
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={submitHandler} className="signup-form">
                <h2 className='heading' >Sign Up</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    className="signup-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    className="signup-input"
                />
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <p className="signup-footer">
                Already have an account? <Link to="/signin" className="signup-link">Sign In</Link>
            </p>
            <ToastContainer />
        </div>
    );
};

export default Signup;
