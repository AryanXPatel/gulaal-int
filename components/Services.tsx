"use client";
import { useState } from "react";

function ItalicSpan({ children }: { children: string }) {
    return (
        <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
            {children}
        </span>
    );
}

const hirerCards = [
    {
        title: "Create a project",
        desc: "Add requirements, upload references.",
        img1: "/isomeet/690126d8650a040b504815c6_f-card-1-img-1.avif",
        img2: "/isomeet/690126d81d77af72f07564d7_f-card-1-img-2.avif",
        bg: "#fff",
        span: "col-span-1",
    },
    {
        title: "Hire talent",
        desc: "Choose talent and collaborate.",
        img1: "/isomeet/690126d8f3ae16d6264f0053_f-card-2-img-1.avif",
        img2: null,
        bg: "#e8e0ff",
        span: "col-span-1",
    },
    {
        title: "Communication",
        desc: "All DMs are finally in one app.",
        img1: "/isomeet/690126d8e46f644fbd12245e_f-card-3-img-2.avif",
        img2: "/isomeet/690126d8bd9266995bcfe79f_f-card-3-img-1.avif",
        bg: "#d4f5e2",
        span: "col-span-1",
    },
    {
        title: "Freely trust",
        desc: "Choose talent on rating and reviews.",
        img1: "/isomeet/690126d8419dbc1b6de70878_f-card-4-img-2.avif",
        img2: "/isomeet/690126d8adc74d2dc9ff42bd_f-card-4-img-1.avif",
        bg: "#fff",
        span: "col-span-1",
    },
];

const talentCards = [
    {
        title: "Become a talent",
        desc: "Turn your followers to bookings.",
        img1: "/isomeet/690126e11f44792a2b9fe236_f-card-5-img-1.avif",
        img2: null,
        bg: "#fde8f0",
        span: "col-span-1",
    },
    {
        title: "Find work",
        desc: "Apply for a project and collaborate.",
        img1: "/isomeet/690126e1e8e39be812c61bd2_f-card-6-img-1.avif",
        img2: "/isomeet/690126e1f3ae16d6264f0620_f-card-6-img-2.avif",
        bg: "#fff",
        span: "col-span-1",
    },
    {
        title: "Collaborate with talents",
        desc: "Create your own projects, find talents for collabs.",
        img1: "/isomeet/690126e11d883cdb006fceb8_f-card-7-img-1.avif",
        img2: null,
        bg: "#fff",
        span: "col-span-1",
    },
    {
        title: "Monetize your skills",
        desc: "Turn your passion to income.",
        img1: "/isomeet/690126e134e96e2b535602af_f-card-8-img-1.avif",
        img2: null,
        bg: "#d6eeff",
        span: "col-span-1",
    },
];

// Adapted for Gulaal
const pmCards = [
    {
        title: "Define your project",
        desc: "Add scope, timeline, and references.",
        img1: "/isomeet/690126d8650a040b504815c6_f-card-1-img-1.avif",
        img2: "/isomeet/690126d81d77af72f07564d7_f-card-1-img-2.avif",
        bg: "#fff",
    },
    {
        title: "Assign the team",
        desc: "Choose experts and start collaborating.",
        img1: "/isomeet/690126d8f3ae16d6264f0053_f-card-2-img-1.avif",
        img2: null,
        bg: "#e8e0ff",
    },
    {
        title: "Track progress",
        desc: "All updates in one clear dashboard.",
        img1: "/isomeet/690126d8e46f644fbd12245e_f-card-3-img-2.avif",
        img2: "/isomeet/690126d8bd9266995bcfe79f_f-card-3-img-1.avif",
        bg: "#d4f5e2",
    },
    {
        title: "Deliver on time",
        desc: "Milestones, reviews, and sign-off.",
        img1: "/isomeet/690126d8419dbc1b6de70878_f-card-4-img-2.avif",
        img2: "/isomeet/690126d8adc74d2dc9ff42bd_f-card-4-img-1.avif",
        bg: "#fff",
    },
];

const ecomCards = [
    {
        title: "Launch your store",
        desc: "Full setup from branding to checkout.",
        img1: "/isomeet/690126e11f44792a2b9fe236_f-card-5-img-1.avif",
        img2: null,
        bg: "#fde8f0",
    },
    {
        title: "Source products",
        desc: "Find suppliers and manage inventory.",
        img1: "/isomeet/690126e1e8e39be812c61bd2_f-card-6-img-1.avif",
        img2: "/isomeet/690126e1f3ae16d6264f0620_f-card-6-img-2.avif",
        bg: "#fff",
    },
    {
        title: "Run campaigns",
        desc: "Ads, SEO, and social — all handled.",
        img1: "/isomeet/690126e11d883cdb006fceb8_f-card-7-img-1.avif",
        img2: null,
        bg: "#fff",
    },
    {
        title: "Scale revenue",
        desc: "Analytics, optimization, and growth.",
        img1: "/isomeet/690126e134e96e2b535602af_f-card-8-img-1.avif",
        img2: null,
        bg: "#d6eeff",
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
                    }}
                >
                    {card.desc}
                </p>
            </div>

            {/* Images */}
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
                />
                {card.img2 && (
                    <img
                        src={card.img2}
                        alt=""
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            width: "55%",
                            objectFit: "cover",
                        }}
                    />
                )}
                <img
                    src="/isomeet/6901e53513dcf1ea037d2e38_bg-gradient.avif"
                    alt=""
                    style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        width: "60%",
                        pointerEvents: "none",
                        opacity: 0.5,
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
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem" }}>
                {/* Header */}
                <div style={{ marginBottom: "3rem" }}>
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
                        We&apos;<ItalicSpan>v</ItalicSpan>e do<ItalicSpan>n</ItalicSpan>e the h<ItalicSpan>a</ItalicSpan>rd part, n<ItalicSpan>o</ItalicSpan>w it&apos;s your turn to gr<ItalicSpan>o</ItalicSpan>w
                    </h2>
                    <p
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1.0625rem",
                            color: "rgba(0,0,0,0.55)",
                            lineHeight: 1.6,
                            maxWidth: "36rem",
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
