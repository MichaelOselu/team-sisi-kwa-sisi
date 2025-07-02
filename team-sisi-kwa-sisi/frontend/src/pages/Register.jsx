import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "beneficiary",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("http://127.0.0.1:8005/api/accounts/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Registration successful! You can now log in.");
        setForm({
          username: "",
          email: "",
          password: "",
          role: "beneficiary",
        });
      } else {
        setMessage(
          data.detail ||
            Object.values(data).flat().join(" ") ||
            "Registration failed."
        );
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #e3f0ff 0%, #f7fafc 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <form
        onSubmit={handleSubmit}
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
          src="https://img.icons8.com/color/96/add-user-group-man-man.png"
          alt="Register"
          style={{ marginBottom: "1rem" }}
        />
        <h2
          style={{
            color: "#2b6cb0",
            marginBottom: "1.5rem",
          }}
        >
          Create Your Account
        </h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #cbd5e0",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #cbd5e0",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #cbd5e0",
          }}
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #cbd5e0",
          }}
        >
          <option value="beneficiary">Beneficiary</option>
          <option value="donor">Donor</option>
          <option value="volunteer">Volunteer</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#2b6cb0",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            fontWeight: "bold",
            width: "100%",
            marginBottom: "1rem",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {message && (
          <div
            style={{
              color: message.includes("success") ? "#38a169" : "#e53e3e",
              marginTop: "1rem",
            }}
          >
            {message}
          </div>
        )}
        <div style={{ marginTop: "1rem", color: "#4a5568" }}>
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#2b6cb0",
              textDecoration: "underline",
            }}
          >
            Log in
          </a>
        </div>
      </form>
    </div>
  );
}