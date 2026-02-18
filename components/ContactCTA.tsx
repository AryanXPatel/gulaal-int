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
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
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
                        <div style={{ marginBottom: "2.5rem" }}>
                            <h2
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "clamp(2rem, 4vw, 3rem)",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.03em",
                                    color: "#000",
                                    marginBottom: "1rem",
                                }}
                            >
                                St<ItalicSpan>a</ItalicSpan>rt yo<ItalicSpan>u</ItalicSpan>r pr<ItalicSpan>o</ItalicSpan>ject bef<ItalicSpan>o</ItalicSpan>re anyon<ItalicSpan>e</ItalicSpan> else d<ItalicSpan>o</ItalicSpan>es
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
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "0.5rem",
                                        background: "#000",
                                        color: "#fff",
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "0.9375rem",
                                        fontWeight: 500,
                                        padding: "0.875rem 1.5rem",
                                        borderRadius: "0.5rem",
                                        border: "none",
                                        cursor: "pointer",
                                        marginTop: "0.5rem",
                                        transition: "opacity 0.2s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                                >
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                        <path d="M9.76121 13.7769C9.47557 14.0743 9.01244 14.0744 8.72688 13.7769C8.4412 13.4793 8.44125 12.9959 8.72688 12.6981L12.4862 8.7794L1.73146 8.7794C1.3275 8.77938 0.999999 8.43809 0.999999 8.01709C1.00008 7.59617 1.32756 7.25481 1.73146 7.25479L12.5197 7.25479L8.72688 3.30117C8.44133 3.0035 8.44138 2.5209 8.72688 2.22322C9.01252 1.92558 9.47557 1.92561 9.76121 2.22322L14.7867 7.46068C15.0037 7.68686 15.0546 8.01957 14.9418 8.297C14.8926 8.42691 14.8108 8.53933 14.7059 8.62286L9.76121 13.7769Z" fill="white" />
                                    </svg>
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
