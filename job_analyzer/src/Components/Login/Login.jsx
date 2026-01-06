import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Utilities/firebase";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/analyzer')
      alert("Login succesful");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="form-card">
        <a href="/" className="back-link">← Back to Home</a>
        <h2 className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-chart-column h-8 w-8 text-blue-600">
            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
            <path d="M18 17V9"></path>
            <path d="M13 17V5"></path>
            <path d="M8 17v-3"></path>
          </svg> Job Skill Analyzer
        </h2>
        <h3>Login your account</h3>
        <p className="subtitle">Get started with your skill analysis journey</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input 
          type="email" 
          name="email" 
          placeholder="Enter your email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input 
          type="password" 
          name="password" 
          placeholder="Enter your password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="primary-btn">Login</button>

          {error && <p>{error}</p>}
        </form>

        <p className="signin-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
