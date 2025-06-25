import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Registrastion() {
  const [name, setFname] = useState('');
  const [lastname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || name.length < 3) {
      toast.error("First name must be at least 3 characters");
      return;
    }

    if (!lastname || lastname.length < 3) {
      toast.error("Last name must be at least 3 characters");
      return;
    }

    if (!email || !validateEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!password || password.length < 5) {
      toast.error("Password must be at least 5 characters");
      return;
    }

    // Get users from localStorage
    let users = JSON.parse(localStorage.getItem('userdata')) || [];

    // Check for duplicate email
    if (users.some((user) => user.email === email)) {
      toast.error("Email already exists!");
      return;
    }

    // Save new user
    users.push({ name, lastname, email, password });
    localStorage.setItem('userdata', JSON.stringify(users));

    toast.success('Registration successful!', {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
      transition: Bounce,
    });

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className='container p-3'>
      <h2 className='text-center'>Registration Form</h2>
      <div className='d-flex justify-content-center'>
        <div className='text-start'>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" value={name} onChange={(e) => setFname(e.target.value)} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" value={lastname} onChange={(e) => setLname(e.target.value)} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Registrastion;
