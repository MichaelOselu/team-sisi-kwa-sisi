import React, { useEffect, useState } from "react";

export default function EmergencyAlerts() {
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchAlerts() {
            try {
                const res = await fetch("http://127.0.0.1:8005/api/requests/");
                if (!res.ok) throw new Error("Could not fetch alerts.");
                const data = await res.json();
                const mapped = data.map((item) => ({
                    title: item.title || "Help Request",
                    description: item.story || item.description || "",
                    date: item.created_at ? item.created_at.slice(0, 10) : "",
                    type: item.category || "General",
                    icon:
                        item.category === "Medical"
                            ? "https://img.icons8.com/color/48/medical-doctor.png"
                            : item.category === "Disaster"
                            ? "https://img.icons8.com/color/48/floods.png"
                            : item.category === "Food"
                            ? "https://img.icons8.com/color/48/meal.png"
                            : "https://img.icons8.com/color/48/alarm.png",
                }));
                setAlerts(mapped);
            } catch {
                setError("Failed to load emergency alerts.");
            }
            setLoading(false);
        }
        fetchAlerts();
    }, []);

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #fff5f5 0%, #e3f0ff 100%)",
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
                }}
            >
                <h2
                    style={{
                        color: "#e53e3e",
                        textAlign: "center",
                        marginBottom: "2rem",
                        fontSize: "2rem",
                        letterSpacing: "1px",
                    }}
                >
                    🚨 Emergency Alerts
                </h2>
                {loading ? (
                    <div style={{ color: "#2b6cb0", textAlign: "center" }}>Loading...</div>
                ) : error ? (
                    <div style={{ color: "#e53e3e", textAlign: "center" }}>{error}</div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }}
                    >
                        {alerts.map((alert, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    background: "#fff5f5",
                                    borderLeft: "6px solid #e53e3e",
                                    borderRadius: "0.75rem",
                                    padding: "1.25rem 1rem",
                                    boxShadow: "0 2px 8px rgba(229,62,62,0.04)",
                                    gap: "1rem",
                                }}
                            >
                                <img
                                    src={alert.icon}
                                    alt={alert.type}
                                    style={{
                                        width: 48,
                                        height: 48,
                                        marginTop: 4,
                                    }}
                                />
                                <div>
                                    <h3
                                        style={{
                                            color: "#c53030",
                                            margin: 0,
                                            marginBottom: "0.25rem",
                                        }}
                                    >
                                        {alert.title}
                                    </h3>
                                    <div
                                        style={{
                                            color: "#4a5568",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {alert.description}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "#718096",
                                        }}
                                    >
                                        <b>Type:</b> {alert.type} &nbsp;|&nbsp; <b>Date:</b> {alert.date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div
                    style={{
                        marginTop: "2rem",
                        textAlign: "center",
                        color: "#2b6cb0",
                    }}
                >
                    <b>
                        If you can help, please{" "}
                        <a
                            href="/register"
                            style={{
                                color: "#e53e3e",
                                textDecoration: "underline",
                            }}
                        >
                            join the community
                        </a>{" "}
                        or{" "}
                        <a
                            href="/donate"
                            style={{
                                color: "#e53e3e",
                                textDecoration: "underline",
                            }}
                        >
                            donate now
                        </a>
                        .
                    </b>
                </div>
            </div>
        </div>
    );
}