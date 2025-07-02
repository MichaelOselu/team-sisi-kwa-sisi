import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f7fafc 0%, #e3f0ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <img
        src="https://img.icons8.com/color/96/error--v1.png"
        alt="404 Not Found"
        style={{ marginBottom: "1.5rem" }}
      />
      <h1 style={{ color: "#2b6cb0", fontSize: "2.5rem", marginBottom: "1rem" }}>
        404 - Page Not Found
      </h1>
      <p style={{ color: "#4a5568", fontSize: "1.15rem", marginBottom: "2rem" }}>
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        style={{
          background: "#2b6cb0",
          color: "#fff",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background 0.2s",
        }}
      >
        Go to Home
      </a>
    </div>
  );
}