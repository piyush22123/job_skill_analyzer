import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-logo">
                    <strong>Job Skill Analyzer</strong><br />
                    <p>Empowering professionals to bridge skill gaps and achieve career success through AI-powered analysis.</p>
                </div>
                <div className="footer-links">
                    <h4>Company</h4>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/about">Privacy Policy</a>
                    <a href="/about">Terms of Service</a>
                </div>
                <div className="footer-start">
                    <h4>Get Started</h4>
                    <p>Ready to analyze your skills?</p>
                    <button>
                        <Link to="/analyzer" className="btn-blue">Start Analysis</Link>
                    </button>
                </div>
            </footer>
            <div className="copyright">
                © 2025 Job Skill Analyzer. All rights reserved.
            </div>
        </div>
    )
}

export default Footer
