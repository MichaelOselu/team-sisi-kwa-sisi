import React, { useEffect, useState } from "react";

export default function MapView() {
  const [projects, setProjects] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsRes, requestsRes] = await Promise.all([
          fetch("http://127.0.0.1:8005/api/projects/"),
          fetch("http://127.0.0.1:8005/api/requests/"),
        ]);
        if (!projectsRes.ok || !requestsRes.ok)
          throw new Error("Failed to load map data.");
        const projectsData = await projectsRes.json();
        const requestsData = await requestsRes.json();
        setProjects(projectsData);
        setRequests(requestsData);
      } catch {
        setError("Could not load map data.");
      }
      setLoading(false);
    }
    fetchData();
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
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2b6cb0", marginBottom: "1rem" }}>
          Community Projects & Requests Map
        </h2>
        <p style={{ color: "#4a5568", marginBottom: "2rem" }}>
          Explore ongoing projects, help requests, and success stories across the
          region. Click on a marker to learn more about each initiative!
        </p>
        <div
          style={{
            width: "100%",
            height: "400px",
            borderRadius: "0.75rem",
            background:
              "url('https://img.icons8.com/color/400/worldwide-location.png') center/contain no-repeat, #e3f0ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            position: "relative",
          }}
        >
          {loading ? (
            <span
              style={{
                color: "#2b6cb0",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              Loading map data...
            </span>
          ) : error ? (
            <span
              style={{
                color: "#e53e3e",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              {error}
            </span>
          ) : (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflowY: "auto",
                background: "rgba(255,255,255,0.85)",
                borderRadius: "0.75rem",
                padding: "1rem",
                display: "flex",
                flexDirection: "row",
                gap: "2rem",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    color: "#2b6cb0",
                    marginBottom: "0.5rem",
                  }}
                >
                  Projects
                </h3>
                {projects.length === 0 ? (
                  <div style={{ color: "#718096" }}>No projects found.</div>
                ) : (
                  projects.map((proj, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#f7fafc",
                        borderRadius: "0.5rem",
                        marginBottom: "0.75rem",
                        padding: "0.75rem",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "bold",
                          color: "#2b6cb0",
                        }}
                      >
                        {proj.title || proj.name}
                      </div>
                      <div
                        style={{
                          color: "#4a5568",
                          fontSize: "0.97rem",
                        }}
                      >
                        {proj.location || "Location: N/A"}
                      </div>
                      <div
                        style={{
                          color: "#718096",
                          fontSize: "0.95rem",
                        }}
                      >
                        {proj.description}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    color: "#e53e3e",
                    marginBottom: "0.5rem",
                  }}
                >
                  Help Requests
                </h3>
                {requests.length === 0 ? (
                  <div style={{ color: "#718096" }}>No requests found.</div>
                ) : (
                  requests.map((req, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#fff5f5",
                        borderRadius: "0.5rem",
                        marginBottom: "0.75rem",
                        padding: "0.75rem",
                        boxShadow: "0 1px 4px rgba(229,62,62,0.04)",
                        textAlign: "left",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: "bold",
                          color: "#e53e3e",
                        }}
                      >
                        {req.title || req.name}
                      </div>
                      <div
                        style={{
                          color: "#4a5568",
                          fontSize: "0.97rem",
                        }}
                      >
                        {req.location || "Location: N/A"}
                      </div>
                      <div
                        style={{
                          color: "#718096",
                          fontSize: "0.95rem",
                        }}
                      >
                        {req.story || req.description}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
        <div style={{ color: "#718096", fontSize: "0.98rem" }}>
          Want your project or request to appear here?{" "}
          <a
            href="/register"
            style={{
              color: "#2b6cb0",
              textDecoration: "underline",
            }}
          >
            Join the community
          </a>{" "}
          or{" "}
          <a
            href="/help-request"
            style={{
              color: "#2b6cb0",
              textDecoration: "underline",
            }}
          >
            submit a help request
          </a>
          .
        </div>
      </div>
    </div>
  );
}