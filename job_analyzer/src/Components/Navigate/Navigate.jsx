import React from "react";
import { Link } from "react-router-dom";
// import { auth } from '../../Utilities/firebase'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navigate = () => {
  return (
    <div className="navContainer">
      <nav className="navbar">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chart-column h-8 w-8 text-blue-600"
          >
            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
            <path d="M18 17V9"></path>
            <path d="M13 17V5"></path>
            <path d="M8 17v-3"></path>
          </svg>
          Job Skill Analyzer
        </div>
        <div className="nav-buttons flex items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button>
            <Link to="/analyzer" className="btn-black">
              Get Started
            </Link>
          </button>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            <div className=""><UserButton /></div>
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Navigate;
