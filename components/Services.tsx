"use client";
import { useState } from "react";

function ItalicSpan({ children }: { children: string }) {
    return (
        <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
            {children}
        </span>
    );
}

// Project Management cards — images to be placed in /public/gulaal/
const pmCards = [
    {
        title: "Define your project",
        desc: "Scope, timeline, deliverables — all locked in from day one.",
        img1: "/gulaal/pm-define.avif",
        img2: null,
        bg: "#f5f5f5",
        icon: "📋",
    },
    {
        title: "Assign the team",
        desc: "Right people, right roles. We handle the coordination.",
        img1: "/gulaal/pm-assign.avif",
        img2: null,
        bg: "#e8e0ff",
        icon: "👥",
    },
    {
        title: "Track progress",
        desc: "Live dashboards. No surprises, no chasing updates.",
        img1: "/gulaal/pm-track.avif",
        img2: null,
        bg: "#d4f5e2",
        icon: "📊",
    },
    {
        title: "Deliver on time",
        desc: "Milestones, reviews, and sign-off — every time.",
        img1: "/gulaal/pm-deliver.avif",
        img2: null,
        bg: "#fff",
        icon: "✅",
    },
];

// E-Commerce cards
const ecomCards = [
    {
        title: "Launch your store",
        desc: "Full setup from branding to checkout — Shopify, WooCommerce, or custom.",
        img1: "/gulaal/ecom-launch.avif",
        img2: null,
        bg: "#fde8f0",
        icon: "🛒",
    },
    {
        title: "Source products",
        desc: "Supplier sourcing, quality checks, and inventory management.",
        img1: "/gulaal/ecom-source.avif",
        img2: null,
        bg: "#fff",
        icon: "📦",
    },
    {
        title: "Run campaigns",
        desc: "Paid ads, SEO, and social — all managed and optimised.",
        img1: "/gulaal/ecom-campaigns.avif",
        img2: null,
        bg: "#fff",
        icon: "📣",
    },
    {
        title: "Scale revenue",
        desc: "Analytics, A/B testing, and growth strategy — built to compound.",
        img1: "/gulaal/ecom-scale.avif",
        img2: null,
        bg: "#d6eeff",
        icon: "📈",
    },
];

function FeatureCard({ card }: { card: typeof pmCards[0] }) {
    return (
        <div
            style={{
                background: card.bg,
                border: "1px solid rgba(0,0,0,0.07)",
                borderRadius: "1.25rem",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: "22rem",
                position: "relative",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "default",
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
        >
            {/* Header */}
            <div style={{ padding: "1.75rem 1.75rem 0" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{card.icon}</div>
                <h3
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "1.25rem",
                        letterSpacing: "-0.02em",
                        color: "#000",
                        marginBottom: "0.375rem",
                    }}
                >
                    {card.title}
                </h3>
                <p
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(0,0,0,0.5)",
                        lineHeight: 1.5,
                    }}
                >
                    {card.desc}
                </p>
            </div>

            {/* Image area — shows image if available, else decorative fill */}
            <div style={{ flex: 1, position: "relative", marginTop: "1.25rem", overflow: "hidden" }}>
                <img
                    src={card.img1}
                    alt={card.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                    }}
                    onError={(e) => {
                        // Graceful fallback: hide broken image
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                />
            </div>
        </div>
    );
}

export default function Services() {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Project Management", "E-Commerce"];
    const cards = [pmCards, ecomCards];

    return (
        <section
            id="services"
            style={{
                paddingBlock: "8.25rem",
                background: "#fff",
            }}
        >
            <div style={{ maxWidth: "83rem", margin: "0 auto", padding: "0 3.5rem" }}>
                {/* Header */}
                <div style={{ marginBottom: "3rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {/* Pill label */}
                    <div style={{ display: "inline-flex" }}>
                        <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0.5rem", padding: "0.25rem 1rem", fontSize: "0.875rem", fontWeight: 500, fontFamily: "Inter, sans-serif", color: "rgba(0,0,0,0.6)", letterSpacing: "-0.01em" }}>
                            Services
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
                        We&apos;<ItalicSpan>v</ItalicSpan>e done the h<ItalicSpan>a</ItalicSpan>rd part, n<ItalicSpan>o</ItalicSpan>w it&apos;s your turn to gr<ItalicSpan>o</ItalicSpan>w
                    </h2>
                    <p
                        style={{
                            margin: 0,
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1.125rem",
                            color: "rgba(0,0,0,0.4)",
                            lineHeight: 1.5,
                            maxWidth: "36rem",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Whether you&apos;re launching a project or scaling an online store, everything is designed to flow effortlessly.
                    </p>
                </div>

                {/* Tabs */}
                <div
                    style={{
                        display: "flex",
                        gap: "0.375rem",
                        background: "#f5f5f5",
                        borderRadius: "0.625rem",
                        padding: "0.25rem",
                        width: "fit-content",
                        marginBottom: "2.5rem",
                    }}
                >
                    {tabs.map((tab, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontSize: "0.9375rem",
                                fontWeight: 400,
                                padding: "0.5rem 1.25rem",
                                borderRadius: "0.5rem",
                                border: "none",
                                cursor: "pointer",
                                transition: "background 0.2s, color 0.2s",
                                background: activeTab === i ? "#000" : "transparent",
                                color: activeTab === i ? "#fff" : "rgba(0,0,0,0.6)",
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Cards grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1rem",
                    }}
                    className="services-grid"
                >
                    {cards[activeTab].map((card, i) => (
                        <FeatureCard key={i} card={card} />
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 767px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
        </section>
    );
}
