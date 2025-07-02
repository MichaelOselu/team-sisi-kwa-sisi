import React, { useEffect, useState } from "react";

export default function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchProjects() {
            try {
                const res = await fetch("http://127.0.0.1:8005/api/projects/");
                if (!res.ok) throw new Error("Could not fetch projects.");
                const data = await res.json();
                setProjects(data);
            } catch {
                setError("Failed to load projects.");
            }
            setLoading(false);
        }
        fetchProjects();
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
                    maxWidth: "800px",
                    width: "100%",
                }}
            >
                <h2
                    style={{
                        color: "#2b6cb0",
                        textAlign: "center",
                        marginBottom: "2rem",
                        fontSize: "2rem",
                    }}
                >
                    Community Projects
                </h2>
                {loading ? (
                    <div style={{ color: "#2b6cb0", textAlign: "center" }}>Loading...</div>
                ) : error ? (
                    <div style={{ color: "#e53e3e", textAlign: "center" }}>{error}</div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "2rem",
                            justifyContent: "center",
                        }}
                    >
                        {projects.map((project, idx) => (
                            <div
                                key={project.id || idx}
                                style={{
                                    background: "#f7fafc",
                                    borderRadius: "0.75rem",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                                    padding: "1.5rem",
                                    maxWidth: "250px",
                                    width: "100%",
                                    textAlign: "center",
                                    transition: "transform 0.2s",
                                }}
                            >
                                <img
                                    src={project.image || "https://img.icons8.com/color/96/task.png"}
                                    alt={project.title}
                                    style={{
                                        marginBottom: "1rem",
                                        borderRadius: "0.5rem",
                                    }}
                                />
                                <h3
                                    style={{
                                        color: "#2b6cb0",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <div
                                    style={{
                                        color: "#718096",
                                        fontSize: "0.95rem",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {project.location || "Location N/A"} &middot;{" "}
                                    <span
                                        style={{
                                            color:
                                                project.status === "Ongoing"
                                                    ? "#38a169"
                                                    : "#718096",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {project.status || "Status N/A"}
                                    </span>
                                </div>
                                <p
                                    style={{
                                        color: "#4a5568",
                                        fontSize: "1rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    {project.description}
                                </p>
                                <a
                                    href="#"
                                    style={{
                                        color: "#fff",
                                        background: "#2b6cb0",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "0.5rem",
                                        textDecoration: "none",
                                        fontWeight: "bold",
                                        fontSize: "0.98rem",
                                        transition: "background 0.2s",
                                    }}
                                >
                                    View Details
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}