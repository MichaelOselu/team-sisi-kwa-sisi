import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (access) {
      fetch("http://127.0.0.1:8005/api/accounts/profile/", {
        headers: { Authorization: `Bearer ${access}` },
      })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data && data.username) {
            setIsLoggedIn(true);
            setProfile(data);
          } else {
            setIsLoggedIn(false);
            setProfile(null);
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
          setProfile(null);
        });
    } else {
      setIsLoggedIn(false);
      setProfile(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
    setProfile(null);
    navigate("/login");
  };

  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #2b6cb0 0%, #3182ce 100%)",
        padding: "1rem 0",
        boxShadow: "0 2px 8px rgba(44, 62, 80, 0.08)",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "0 1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src="https://img.icons8.com/color/48/handshake.png"
            alt="Logo"
            style={{ height: 36, width: 36, marginRight: "0.5rem" }}
          />
          <span
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "1.25rem",
              letterSpacing: "1px",
            }}
          >
            Sisi Kwa Sisi
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.2rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link style={navLinkStyle} to="/">
            Home
          </Link>
          <Link style={navLinkStyle} to="/help-request">
            Request Help
          </Link>
          <Link style={navLinkStyle} to="/donate">
            Donate
          </Link>
          <Link style={navLinkStyle} to="/stories">
            Success Stories
          </Link>
          <Link style={navLinkStyle} to="/map">
            Map
          </Link>
          <Link style={navLinkStyle} to="/alerts">
            Alerts
          </Link>
          <Link style={navLinkStyle} to="/projects">
            Projects
          </Link>
          <Link style={navLinkStyle} to="/blog">
            Blog
          </Link>
          <Link style={navLinkStyle} to="/admin">
            Admin
          </Link>
          {isLoggedIn ? (
            <>
              <Link style={navLinkStyle} to="/profile">
                {profile ? profile.username : "Profile"}
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  ...navButtonStyle,
                  background: "#e53e3e",
                  color: "#fff",
                  marginLeft: 0,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link style={navButtonStyle} to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1rem",
  padding: "0.25rem 0.5rem",
  borderRadius: "0.25rem",
  transition: "background 0.2s",
};

const navButtonStyle = {
  ...navLinkStyle,
  background: "#fff",
  color: "#2b6cb0",
  fontWeight: "bold",
  padding: "0.4rem 1rem",
  borderRadius: "0.5rem",
  marginLeft: "0.5rem",
  boxShadow: "0 2px 8px rgba(44, 62, 80, 0.08)",
  textDecoration: "none",
};