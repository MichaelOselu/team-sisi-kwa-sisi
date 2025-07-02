import React, { useEffect, useState } from "react";

export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchStories() {
            try {
                const res = await fetch("http://127.0.0.1:8005/api/stories/");
                if (!res.ok) throw new Error("Could not fetch blog stories.");
                const data = await res.json();
                // Map backend data to blog card format
                const mapped = data.map((story) => ({
                    title: story.title,
                    date: story.date || story.created_at || "",
                    author: story.author || story.beneficiary || "Anonymous",
                    summary: story.summary || story.content || "",
                    image: story.image || "https://img.icons8.com/color/96/news.png",
                    link: "#",
                }));
                setArticles(mapped);
            } catch (err) {
                setError("Failed to load blog stories.");
            }
            setLoading(false);
        }
        fetchStories();
    }, []);

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #f7fafc 0%, #e3f0ff 100%)",
                padding: "2rem 0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                    Blog & Awareness
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
                        {articles.map((article, idx) => (
                            <div
                                key={idx}
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
                                    src={article.image}
                                    alt={article.title}
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
                                    {article.title}
                                </h3>
                                <div
                                    style={{
                                        color: "#718096",
                                        fontSize: "0.95rem",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {article.date} &middot; {article.author}
                                </div>
                                <p
                                    style={{
                                        color: "#4a5568",
                                        fontSize: "1rem",
                                        marginBottom: "1rem",
                                    }}
                                >
                                    {article.summary}
                                </p>
                                <a
                                    href={article.link}
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
                                    Read More
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}