import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Utilities/firebase"
import "./Login.css";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSignup(e) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // Update user's display name in Firebase
      await updateProfile(userCred.user, { displayName: form.name });

      alert("Account created");
    } catch (err) {
      setError(err.message);
    }
  }

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

        <form onSubmit={handleSignup}>
          <label>Full Name</label>
          <input 
          type="text" 
          name="fullName" 
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={handleChange} />

          <label>Email</label>
          <input 
          type="email" 
          name="email" 
          placeholder="Enter your email"
          value={form.email} 
          onChange={handleChange} />

          <label>Password</label>
          <input 
          type="password" 
          name="password" 
          placeholder="Enter your password"
          value={form.password} 
          onChange={handleChange} />

          <label>Confirm Password</label>
          <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Confirm your password"
          value={form.confirmPassword} 
          onChange={handleChange} />

          <button type="submit" className="primary-btn">Create Account</button>

          {error && <p>{error}</p>}
        </form>

        <p className="signin-text">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
