import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3000/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setUser(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  },);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="profile-container" ref={dropdownRef}>
      {/* Profile Icon */}
      <div className="profile-icon" onClick={() => setOpen(!open)}>
        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="dropdown">
          <p className="username">{user?.name || "User"}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Profile;