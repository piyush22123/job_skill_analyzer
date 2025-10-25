import React, { useState } from "react";
import "./Login.css";
import google from "/google.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful!");
        localStorage.setItem("token", data.token); // store JWT for auth
        window.location.href = "/analyzer"; // redirect after login
      } else {
        alert("wrong email/password");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
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

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email"
            value={formData.email} onChange={handleChange} />

          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password"
            value={formData.password} onChange={handleChange} />

          <button type="submit" className="primary-btn">Login</button>
        </form>

        <p className="signin-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
