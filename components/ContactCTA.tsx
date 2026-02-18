"use client";
import { useState } from "react";

function ItalicSpan({ children }: { children: string }) {
    return (
        <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
            {children}
        </span>
    );
}

const faqs = [
    {
        q: "Can I start a project without a full brief?",
        a: "Yes — we can help you define the scope during an initial consultation. Many of our best projects started with just a rough idea.",
    },
    {
        q: "How long does a typical project take?",
        a: "It depends on scope, but most projects range from 4–12 weeks. We'll give you a clear timeline before we begin.",
    },
    {
        q: "Do you work with international clients?",
        a: "Absolutely. While we're UAE-based, we work with clients across the GCC and internationally. All communication is handled remotely.",
    },
    {
        q: "What e-commerce platforms do you support?",
        a: "We work with Shopify, WooCommerce, Magento, and custom builds. We'll recommend the best fit for your business.",
    },
    {
        q: "Is there a minimum project size?",
        a: "We don't have a strict minimum, but we focus on projects where we can deliver meaningful impact. Reach out and we'll be honest about fit.",
    },
    {
        q: "What happens after the project is delivered?",
        a: "We offer ongoing support and retainer packages. Many clients continue with us for growth, maintenance, and new initiatives.",
    },
];

export default function ContactCTA() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <section
            id="contact"
            style={{
                paddingBlock: "8.25rem",
                background: "#fff",
            }}
        >
            <div style={{ maxWidth: "83rem", margin: "0 auto", padding: "0 3.5rem" }}>
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
                                <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0.5rem", padding: "0.25rem 1rem", fontSize: "0.875rem", fontWeight: 500, fontFamily: "Inter, sans-serif", color: "rgba(0,0,0,0.6)", letterSpacing: "-0.01em" }}>
                                    Contact
                                </div>
                            </div>
                            <h2
                                style={{
                                    margin: 0,
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "3.75rem",
                                    lineHeight: 1.12,
                                    letterSpacing: "-0.02em",
                                    color: "#000",
                                }}
                            >
                                St<ItalicSpan>a</ItalicSpan>rt your pr<ItalicSpan>o</ItalicSpan>ject bef<ItalicSpan>o</ItalicSpan>re anyone<ItalicSpan> </ItalicSpan>else d<ItalicSpan>o</ItalicSpan>es
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
                                    fontFamily: "Inter, sans-serif",
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
                                onSubmit={(e) => e.preventDefault()}
                                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                            >
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        required
                                        style={inputStyle}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        required
                                        style={inputStyle}
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    required
                                    style={inputStyle}
                                />

                                <div>
                                    <label
                                        style={{
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "0.875rem",
                                            color: "rgba(0,0,0,0.6)",
                                            display: "block",
                                            marginBottom: "0.625rem",
                                        }}
                                    >
                                        What service are you interested in?
                                    </label>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                        {["Project Management", "E-Commerce Setup", "Both"].map((opt) => (
                                            <label
                                                key={opt}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "0.625rem",
                                                    cursor: "pointer",
                                                    fontFamily: "Inter, sans-serif",
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
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "0.5rem",
                                        background: "#000",
                                        color: "#fff",
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        padding: "1rem 1.25rem",
                                        borderRadius: "5rem",
                                        border: "none",
                                        cursor: "pointer",
                                        marginTop: "0.5rem",
                                        lineHeight: 1,
                                        transition: "opacity 0.15s",
                                        whiteSpace: "nowrap",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                                >
                                    Book a Free Call
                                </button>
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
                                                fontFamily: "Inter, sans-serif",
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
                                                fontFamily: "Inter, sans-serif",
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
        @media (max-width: 767px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
        </section>
    );
}

const inputStyle: React.CSSProperties = {
    fontFamily: "Inter, sans-serif",
    fontSize: "0.9375rem",
    padding: "0.75rem 1rem",
    border: "1px solid rgba(0,0,0,0.12)",
    borderRadius: "0.5rem",
    outline: "none",
    background: "#fff",
    color: "#000",
    width: "100%",
};
