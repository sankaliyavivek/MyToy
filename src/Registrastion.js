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

    let users = JSON.parse(localStorage.getItem('userdata')) || [];

    if (users.some((user) => user.email === email)) {
      toast.error("Email already exists!");
      return;
    }

    users.push({ name, lastname, email, password });
    localStorage.setItem('userdata', JSON.stringify(users));
    // console.log(users)

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
    <div >
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className='for register-form' onSubmit={handleSubmit}>

        <h3>Register Here</h3>
        <label>First Name</label>
        <input type="text" value={name} onChange={(e) => setFname(e.target.value)} placeholder="First Name" />
        <label>Last Name</label>
        <input type="text" value={lastname} onChange={(e) => setLname(e.target.value)} placeholder="Last Name" />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Register</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Registrastion;
