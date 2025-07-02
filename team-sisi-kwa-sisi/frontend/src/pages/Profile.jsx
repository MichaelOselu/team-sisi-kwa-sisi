import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const access = localStorage.getItem("access");
        const res = await fetch("http://127.0.0.1:8005/api/accounts/profile/", {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          setUser({
            username: data.username,
            email: data.email,
            role: data.role || "N/A",
            joined: data.date_joined ? data.date_joined.slice(0, 10) : "",
            bio: data.bio || "",
            avatar: "https://img.icons8.com/color/96/user-male-circle--v1.png",
          });
        } else {
          setMessage("Could not load profile. Please log in.");
        }
      } catch {
        setMessage("Network error. Please try again.");
      }
    }
    fetchProfile();
  }, []);

  if (message) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "#e53e3e", fontSize: "1.2rem" }}>{message}</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ color: "#2b6cb0", fontSize: "1.2rem" }}>
          Loading profile...
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f7fafc 0%, #e3f0ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "2.5rem 2rem",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <img
          src={user.avatar}
          alt="Profile"
          style={{ marginBottom: "1rem", borderRadius: "50%" }}
        />
        <h2 style={{ color: "#2b6cb0", marginBottom: "0.5rem" }}>
          {user.username}
        </h2>
        <div style={{ color: "#4a5568", marginBottom: "1rem" }}>
          <span
            style={{
              background: "#ebf8ff",
              color: "#2b6cb0",
              borderRadius: "0.5rem",
              padding: "0.25rem 0.75rem",
              fontSize: "0.95rem",
              fontWeight: "bold",
            }}
          >
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </span>
        </div>
        <p style={{ color: "#4a5568", marginBottom: "1rem" }}>{user.bio}</p>
        <div
          style={{
            background: "#f1f5f9",
            borderRadius: "0.5rem",
            padding: "1rem",
            marginBottom: "1rem",
            textAlign: "left",
            fontSize: "0.98rem",
          }}
        >
          <div>
            <b>Email:</b> {user.email}
          </div>
          <div>
            <b>Joined:</b> {user.joined}
          </div>
        </div>
        <button
          style={{
            background: "#2b6cb0",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            fontWeight: "bold",
            width: "100%",
            cursor: "pointer",
            marginBottom: "0.5rem",
          }}
        >
          Edit Profile
        </button>
        <button
          style={{
            background: "#e53e3e",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            fontWeight: "bold",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => {
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}