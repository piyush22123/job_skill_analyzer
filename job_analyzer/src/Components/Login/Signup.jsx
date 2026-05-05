import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSignup(e) {
    e.preventDefault();
    setError("");

    const { fullName, email, password, confirmPassword } = form;

    // ✅ empty check
    if (!fullName || !email || !password || !confirmPassword) {
      return setError("All fields are required");
    }

    // ✅ name validation
    if (fullName.length < 3) {
      return setError("Full name must be at least 3 characters");
    }

    // ✅ email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setError("Invalid email format");
    }

    // ✅ password strength
    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    // Optional strong password
    const strongPassword = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
    if (!strongPassword.test(password)) {
      return setError(
        "Password must include at least 1 uppercase letter and 1 number",
      );
    }

    // match check
    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        name: fullName,
        email,
        password,
      });

      const res = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Account created successfully");
      navigate("/analyzer");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  }

  return (
    <div className="bg-sky-100 flex h-[100vh] items-center justify-center">
      <div className="login-container">
        <div className="form-card">
          <a href="/" className="back-link">
            ← Back to Home
          </a>
          <h2 className="logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chart-column h-8 w-8 text-blue-600"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
              <path d="M18 17V9"></path>
              <path d="M13 17V5"></path>
              <path d="M8 17v-3"></path>
            </svg>{" "}
            Job Skill Analyzer
          </h2>
          <h3>Create your account</h3>
          <p className="subtitle">
            Get started with your skill analysis journey
          </p>

          <form onSubmit={handleSignup}>
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            <button type="submit" className="primary-btn">
              Create Account
            </button>

            {error && <p>{error}</p>}
          </form>

          <p className="signin-text">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
