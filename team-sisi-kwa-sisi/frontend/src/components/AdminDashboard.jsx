import React, { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const access = localStorage.getItem("access");
        const base = "http://127.0.0.1:8005/api";
        const [users, projects, donations, requests, stories] = await Promise.all([
          fetch(`${base}/accounts/profile/`, {
            headers: { Authorization: `Bearer ${access}` },
          }).then(res => res.ok ? [res.json()] : []), // Profile endpoint, adjust if you add a users list endpoint
          fetch(`${base}/projects/`).then(res => res.json()),
          fetch(`${base}/donations/`).then(res => res.json()),
          fetch(`${base}/requests/`).then(res => res.json()),
          fetch(`${base}/stories/`).then(res => res.json()),
        ]);
        setStats([
          { label: "Total Users", value: users.length || 1 }, // 1 if only profile endpoint, adjust if you add users endpoint
          { label: "Active Projects", value: projects.length },
          { label: "Pending Requests", value: requests.filter(r => r.status === "pending").length || requests.length },
          { label: "Donations", value: donations.length },
          { label: "Success Stories", value: stories.length },
        ]);
      } catch {
        setStats(null);
      }
      setLoading(false);
    }
    fetchStats();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f7fafc 0%, #e3f0ff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "2.5rem 2rem",
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <img
          src="https://img.icons8.com/color/96/admin-settings-male.png"
          alt="Admin"
          style={{ marginBottom: "1rem" }}
        />
        <h2 style={{ color: "#2b6cb0", marginBottom: "1.5rem" }}>
          Admin Dashboard
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {loading ? (
            <div style={{ color: "#2b6cb0", width: "100%" }}>Loading stats...</div>
          ) : stats ? (
            stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  flex: "1 1 120px",
                  background: "#ebf8ff",
                  borderRadius: "0.75rem",
                  padding: "1rem",
                  margin: "0.5rem 0",
                  color: "#2b6cb0",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.98rem", color: "#4a5568" }}>
                  {stat.label}
                </div>
              </div>
            ))
          ) : (
            <div style={{ color: "#e53e3e", width: "100%" }}>Could not load stats.</div>
          )}
        </div>
        <div style={{ textAlign: "left" }}>
          <h3 style={{ color: "#2b6cb0", marginBottom: "1rem" }}>
            Admin Tools & Moderation
          </h3>
          <ul
            style={{
              color: "#4a5568",
              fontSize: "1rem",
              paddingLeft: "1.2rem",
            }}
          >
            <li>✔️ Manage users and roles</li>
            <li>✔️ Approve or remove projects and requests</li>
            <li>✔️ Review donations and success stories</li>
            <li>✔️ Monitor platform activity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}