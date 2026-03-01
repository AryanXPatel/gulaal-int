"use client";
import { useState, useEffect } from "react";

const faqs = [
    {
        q: "What services does Gulaal International offer?",
        a: "We specialize in two areas: online retail across the UAE and project management services. We're focused on delivering quality in both.",
    },
    {
        q: "Where are you based?",
        a: "We're based in the UAE and serve clients across the Emirates. All communication and coordination is handled directly by our team.",
    },
    {
        q: "How do I get started?",
        a: "Fill out the form or reach out via email. We'll schedule a brief conversation to understand your needs and see if we're the right fit.",
    },
    {
        q: "Do you work with international clients?",
        a: "Our primary focus is the UAE market, but we're open to conversations with businesses looking to enter or operate in the region.",
    },
    {
        q: "What's your typical engagement like?",
        a: "Every engagement is different, but we always start with a conversation to understand scope and goals before proposing a clear plan.",
    },
];

export default function ContactCTA() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    // Auto-dismiss success/error messages after 5 seconds
    useEffect(() => {
        if (status === "success" || status === "error") {
            const timer = setTimeout(() => setStatus("idle"), 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "e0f60d2b-c111-4c3d-beb9-a0f15e511270");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            style={{
                paddingBlock: "8.25rem",
                background: "#fff",
            }}
        >
            <div className="section-container" style={{ maxWidth: "83rem", margin: "0 auto", padding: "0 3.5rem" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "5rem",
                        alignItems: "start",
                    }}
                    className="contact-grid"
                >
                    {/* Left: Form */}
                    <div>
                        <div style={{ marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {/* Pill label */}
                            <div style={{ display: "inline-flex" }}>
                                <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0.5rem", padding: "0.25rem 1rem", fontSize: "0.875rem", fontWeight: 500, color: "rgba(0,0,0,0.6)", letterSpacing: "-0.01em" }}>
                                    Contact
                                </div>
                            </div>
                            <h2
                                className="section-heading"
                                style={{
                                    margin: 0,
                                    fontWeight: 400,
                                    fontSize: "3.75rem",
                                    lineHeight: 1.12,
                                    letterSpacing: "-0.02em",
                                    color: "#000",
                                }}
                            >
                                Let&apos;s talk about your next move
                            </h2>
                        </div>

                        {/* Form block */}
                        <div
                            style={{
                                border: "1px solid rgba(0,0,0,0.08)",
                                borderRadius: "1.25rem",
                                padding: "2rem",
                                background: "#fff",
                            }}
                        >
                            <h3
                                style={{
                                    fontWeight: 500,
                                    fontSize: "1.125rem",
                                    letterSpacing: "-0.01em",
                                    color: "#000",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Get a free consultation
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                            >
                                <input type="hidden" name="from_name" value="Gulaal International Website" />
                                <input type="hidden" name="replyto" value="contact@gulaal-international.ae" />
                                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First name"
                                        required
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last name"
                                        required
                                        style={inputStyle}
                                    />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    required
                                    style={inputStyle}
                                />

                                <div>
                                    <label
                                        style={{
                                            fontSize: "0.875rem",
                                            color: "rgba(0,0,0,0.6)",
                                            display: "block",
                                            marginBottom: "0.625rem",
                                        }}
                                    >
                                        What service are you interested in?
                                    </label>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                        {["Project Management", "Online Retail", "General Inquiry"].map((opt) => (
                                            <label
                                                key={opt}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.625rem",
                                                    cursor: "pointer",
                                                    fontSize: "0.9375rem",
                                                    color: "#000",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    name="service"
                                                    value={opt}
                                                    style={{ accentColor: "#000", width: "1rem", height: "1rem" }}
                                                />
                                                {opt}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="btn-press"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "0.5rem",
                                        background: "#000",
                                        color: "#fff",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        padding: "1rem 1.25rem",
                                        borderRadius: "5rem",
                                        border: "none",
                                        cursor: status === "loading" ? "not-allowed" : "pointer",
                                        marginTop: "0.5rem",
                                        lineHeight: 1,
                                        whiteSpace: "nowrap",
                                        opacity: status === "loading" ? 0.6 : 1,
                                    }}
                                >
                                    {status === "loading" && (
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ animation: "spin 0.8s linear infinite" }}>
                                            <circle cx="8" cy="8" r="6.5" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                                            <path d="M14.5 8a6.5 6.5 0 00-6.5-6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    )}
                                    {status === "loading" ? "Sending..." : "Book a Free Call"}
                                </button>

                                {/* Status messages with fade transition */}
                                <div
                                    className={`form-status ${status === "success" || status === "error" ? "show" : ""}`}
                                    aria-live="polite"
                                >
                                    {status === "success" && (
                                        <p style={{ fontSize: "0.875rem", color: "#16a34a", margin: 0 }}>
                                            Thank you. We will get back to you shortly.
                                        </p>
                                    )}
                                    {status === "error" && (
                                        <p style={{ fontSize: "0.875rem", color: "#dc2626", margin: 0 }}>
                                            Something went wrong. Please try again or email us directly.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right: FAQ */}
                    <div style={{ paddingTop: "1rem" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    style={{
                                        borderBottom: "1px solid rgba(0,0,0,0.08)",
                                    }}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="faq-hover"
                                        style={{
                                            width: "100%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            padding: "1.25rem 0",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            textAlign: "left",
                                            gap: "1rem",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: "0.9375rem",
                                                fontWeight: 400,
                                                color: "#000",
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {faq.q}
                                        </span>
                                        <div
                                            style={{
                                                flexShrink: 0,
                                                width: "1.25rem",
                                                height: "1.25rem",
                                                position: "relative",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: 0,
                                                    right: 0,
                                                    height: "1.5px",
                                                    background: "#000",
                                                    transform: "translateY(-50%)",
                                                }}
                                            />
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    bottom: 0,
                                                    left: "50%",
                                                    width: "1.5px",
                                                    background: "#000",
                                                    transform: `translateX(-50%) scaleY(${openFaq === i ? 0 : 1})`,
                                                    transition: "transform 0.25s ease",
                                                }}
                                            />
                                        </div>
                                    </button>
                                    <div
                                        style={{
                                            maxHeight: openFaq === i ? "300px" : "0",
                                            overflow: "hidden",
                                            transition: "max-height 0.35s ease",
                                        }}
                                    >
                                        <p
                                            style={{
                                                fontSize: "0.9375rem",
                                                color: "rgba(0,0,0,0.55)",
                                                lineHeight: 1.6,
                                                paddingBottom: "1.25rem",
                                            }}
                                        >
                                            {faq.a}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .section-container { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          .section-heading { font-size: 2.25rem !important; }
        }
      `}</style>
        </section>
    );
}

const inputStyle: React.CSSProperties = {
    fontSize: "0.9375rem",
    padding: "0.75rem 1rem",
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: "0.5rem",
    background: "#fff",
    color: "#000",
    width: "100%",
    transition: "box-shadow 0.15s ease, border-color 0.15s ease",
};
