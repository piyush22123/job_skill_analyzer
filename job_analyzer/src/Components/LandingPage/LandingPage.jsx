import React from 'react';
import './LandingPage.css';
import { Search, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import Navigate from '../Navigate/Navigate';
import Footer from '../Footer/Footer';



const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navigate />

      {/* Hero Section */}
      <header className="hero">
        <h1>
          Analyze Your Skills, <span className="highlight">Land Your Dream Job</span>
        </h1>
        <p>
          Upload your resume and job descriptions to get detailed compatibility analysis,
          skill gap identification, and personalized course recommendations.
        </p>
        <div className="hero-buttons">
          <button>
            <Link to="/analzer" className="btn-dark"><Upload /> Upload Resume</Link>
          </button>
          <button>
            <Link to="/analyzer" className="btn-light"><Search /> Analyze Job Description</Link>
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h1>Everything you need to succeed</h1>
        <p className="subtext">
          Our AI-powered platform provides comprehensive analysis and actionable insights to help you advance your career.
        </p>
        <div className="cards">
          <div className="card">
            <div className="icon blue"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload h-6 w-6 text-blue-600"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg></div>
            <h3>Resume Analysis</h3>
            <p>Upload your resume and get detailed analysis of your skills, experience, and areas for improvement.</p>
          </div>
          <div className="card">
            <div className="icon green"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search h-6 w-6 text-green-600"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></div>
            <h3>Job Matching</h3>
            <p>Compare your skills against job requirements and get compatibility scores with detailed breakdowns.</p>
          </div>
          <div className="card">
            <div className="icon purple"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column h-6 w-6 text-purple-600"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
            <h3>Skill Gap Analysis</h3>
            <p>Identify missing skills and get prioritized recommendations for skill development and learning.</p>
          </div>
          <div className="card">
            <div className="icon orange"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open h-6 w-6 text-orange-600"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg></div>
            <h3>Free Courses</h3>
            <p>Access curated free courses and learning resources to bridge your skill gaps effectively.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
