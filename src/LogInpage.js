import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserLogin } from './App';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LogInpage() {
  const { setlogname, setlogout } = useContext(UserLogin);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(loggedInUser)
    if (loggedInUser) {
      navigate('/');
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("userdata")) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      toast.error("Invalid email or password");
      return;
    }

    toast.success(`Welcome ${user.lastname}`, {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
      transition: Bounce,
    });

    setlogname(user.lastname);
    setlogout(true);
    localStorage.setItem("loggedUser", JSON.stringify(user));

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className='for' onSubmit={handleLogin}>
        <h3>Login Here</h3>
        <label htmlFor="username">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
        />
        <button type="submit" style={{ marginTop: '40px' }}>Log In</button>
       
      </form>
      <ToastContainer />
    </div>
  );
}

export default LogInpage;
