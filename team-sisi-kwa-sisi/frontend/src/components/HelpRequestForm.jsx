import { useState } from "react";

export default function HelpRequestForm() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    category: "",
    urgency: "",
    story: "",
    media: null,
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSuccess(false);
    setError("");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("location", form.location);
      formData.append("category", form.category);
      formData.append("urgency", form.urgency);
      formData.append("story", form.story);
      if (form.media) {
        formData.append("media", form.media);
      }

      const res = await fetch("http://127.0.0.1:8005/api/requests/", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess(true);
        setForm({
          name: "",
          location: "",
          category: "",
          urgency: "",
          story: "",
          media: null,
        });
      } else {
        const data = await res.json();
        setError(
          data.detail ||
            Object.values(data).flat().join(" ") ||
            "Failed to submit help request."
        );
      }
    } catch {
      setError("Network error. Please try again.");
    }
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
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        style={{
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "2.5rem 2rem",
          maxWidth: "450px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <img
          src="https://img.icons8.com/color/96/helping-hand.png"
          alt="Request Help"
          style={{ marginBottom: "1rem" }}
        />
        <h2 style={{ color: "#2b6cb0", marginBottom: "1.5rem" }}>Request Help</h2>
        <input
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
          name="location"
          placeholder="Location"
          value={form.location}
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
          name="category"
          placeholder="Category (e.g. Medical, Food, Shelter)"
          value={form.category}
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
          name="urgency"
          value={form.urgency}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #cbd5e0",
            color: form.urgency ? "#2b6cb0" : "#a0aec0",
          }}
        >
          <option value="">Select Urgency</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="Critical">Critical</option>
        </select>
        <textarea
          name="story"
          placeholder="Describe your situation and what help you need"
          value={form.story}
          onChange={handleChange}
          required
          rows={4}
          style={{
            width: "100%",
            padding: "0.75rem",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid #cbd5e0",
            resize: "none",
          }}
        />
        <input
          type="file"
          name="media"
          accept="image/*,video/*"
          onChange={handleChange}
          style={{
            width: "100%",
            marginBottom: "1.5rem",
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
          Submit Request
        </button>
        {success && (
          <div style={{ color: "#38a169", marginTop: "1rem" }}>
            Your help request has been submitted!
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