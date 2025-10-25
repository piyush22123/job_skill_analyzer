import React, { useState } from "react";
import "./Login.css";
import google from "/google.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("User Registered successful!");
        localStorage.setItem("token", data.token); // store JWT for auth
        window.location.href = "/login"; // redirect after login
      } else {
        alert(data.message);
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
        <h3>Create your account</h3>
        <p className="subtitle">Get started with your skill analysis journey</p>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input type="text" name="fullName" placeholder="Enter your full name"
            value={formData.fullName} onChange={handleChange} />

          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email"
            value={formData.email} onChange={handleChange} />

          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password"
            value={formData.password} onChange={handleChange} />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm your password"
            value={formData.confirmPassword} onChange={handleChange} />

          <button type="submit" className="primary-btn">Create Account</button>
        </form>

        <p className="signin-text">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
