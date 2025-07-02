import React, { useState } from "react";







export default function DonationPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    try {
      const res = await fetch("http://127.0.0.1:8005/api/donations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", amount: "", message: "" });
      } else {
        const data = await res.json();
        setError(
          data.detail ||
            Object.values(data).flat().join(" ") ||
            "Failed to process donation."
        );
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

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
          src="https://img.icons8.com/color/96/donate.png"
          alt="Donate"
          style={{ marginBottom: "1rem" }}
        />
        <h2 style={{ color: "#2b6cb0", marginBottom: "1.5rem" }}>
          Make a Donation
        </h2>
        <p style={{ color: "#4a5568", marginBottom: "1.5rem" }}>
          Your contribution helps us empower more communities. Every donation counts!
        </p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
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
          placeholder="Your Email"
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
          type="number"
          name="amount"
          placeholder="Amount (USD)"
          value={form.amount}
          onChange={handleChange}
          required
          min="1"
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #cbd5e0",
          }}
        />
        <textarea
          name="message"
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange}
          rows={3}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1.5rem",
            borderRadius: "0.5rem",
            border: "1px solid #cbd5e0",
            resize: "none",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#2b6cb0",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            fontWeight: "bold",
            width: "100%",
            cursor: "pointer",
            marginBottom: "1rem",
          }}
        >
          Donate Now
        </button>
        {success && (
          <div style={{ color: "#38a169", marginTop: "1rem" }}>
            Thank you for your generous donation!
          </div>
        )}
        {error && (
          <div style={{ color: "#e53e3e", marginTop: "1rem" }}>
            {error}
          </div>
        )}
      </form>
    </div>
  );
}