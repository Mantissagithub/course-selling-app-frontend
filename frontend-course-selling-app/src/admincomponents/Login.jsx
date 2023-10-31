import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(''); // Define token state

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/admin/login', { username, password });
      console.log(response.data.message);
      const { token } = response.data;
      localStorage.setItem('token', token); // Assign the token from the response
      setToken(token); // Update the token state
    } catch (error) {
      console.error(error); // Use console.error instead of console.log for errors
    }
  }

  return (
    <div>
      <h1>Login to admin dashboard</h1>
      <br />
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> {/* Use type="password" for the password field for security */}
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      New here? <a href="/register">Register</a> {/* Consider using React Router for navigation */}
    </div>
  );
}

export default Login;
