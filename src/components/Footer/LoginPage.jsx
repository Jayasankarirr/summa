import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Change the password check to '123' for login success
    if (password === '123') {
      // For demo purposes, the password '123' grants access
      localStorage.setItem('token', 'yourGeneratedTokenHere');
      alert('Login Successful');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  const backgroundImageUrl = 'https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178345.jpg?w=1060&t=st=1697099305~exp=1697099905~hmac=b7217fcf8e37934360faa7ee0becb0e69a816253118e53683ddc39bb302e385f'; // Replace with the actual image URL

  return (
    <div className='log' style={{
      backgroundImage: `url(${backgroundImageUrl})`, // Set the online image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="login-container">
        <div className="login-content">
          <div className="login-form">
            <h2>Sign In</h2>
            <p>“Relax we've got this!”</p>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="input2"
                  name="input2"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Login</button>
              <br/><br/>
              Don't have an account?
              <Link to='/SignupPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>
                Create a new account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
