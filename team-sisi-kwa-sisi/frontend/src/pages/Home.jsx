import React, { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const base = "http://127.0.0.1:8005/api";
        const [projects, donations, requests, stories] = await Promise.all([
          fetch(`${base}/projects/`).then((res) => res.json()),
          fetch(`${base}/donations/`).then((res) => res.json()),
          fetch(`${base}/requests/`).then((res) => res.json()),
          fetch(`${base}/stories/`).then((res) => res.json()),
        ]);
        setStats({
          projects: projects.length,
          donations: donations.length,
          requests: requests.length,
          stories: stories.length,
        });
      } catch (err) {
        setStats({ error: "Could not load stats" });
      }
    }
    fetchStats();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f7fafc 0%, #e3f0ff 100%)",
        display: "flex",
        flexDirection: "column",
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
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <img
          src="https://img.icons8.com/color/96/handshake.png"
          alt="Team Sisi Kwa Sisi"
          style={{ marginBottom: "1rem" }}
        />
        <h1 style={{ color: "#2b6cb0", marginBottom: "1rem" }}>
          Welcome to Team Sisi Kwa Sisi
        </h1>
        <p
          style={{
            fontSize: "1.15rem",
            color: "#4a5568",
            marginBottom: "2rem",
          }}
        >
          A community-powered assistance platform where{" "}
          <b>beneficiaries</b>, <b>donors</b>, and <b>volunteers</b> unite to
          support each other in times of need.
        </p>
        {stats ? (
          stats.error ? (
            <div
              style={{
                color: "#e53e3e",
                marginBottom: "1rem",
              }}
            >
              {stats.error}
            </div>
          ) : (
            <div
              style={{
                marginBottom: "2rem",
                color: "#2b6cb0",
              }}
            >
              <div>
                <b>Projects:</b> {stats.projects}
              </div>
              <div>
                <b>Donations:</b> {stats.donations}
              </div>
              <div>
                <b>Requests:</b> {stats.requests}
              </div>
              <div>
                <b>Success Stories:</b> {stats.stories}
              </div>
            </div>
          )
        ) : (
          <div
            style={{
              color: "#2b6cb0",
              marginBottom: "2rem",
            }}
          >
            Loading stats...
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <a
            href="/register"
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
            Join the Community
          </a>
          <a
            href="/projects"
            style={{
              color: "#2b6cb0",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Explore Projects
          </a>
        </div>
      </div>
      <footer
        style={{
          marginTop: "2rem",
          color: "#718096",
          fontSize: "0.95rem",
        }}
      >
        &copy; {new Date().getFullYear()} Team Sisi Kwa Sisi. Empowering
        communities, together.
      </footer>
    </div>
  );
}