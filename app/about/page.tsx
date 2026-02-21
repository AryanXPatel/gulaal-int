"use client";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

/* ─── SVG Icons for Values Cards ─── */
const ShieldIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M3.22461 11.2417V6.91163C3.22479 6.01265 3.90606 5.22122 4.83887 5.14796C7.12851 4.96732 9.21269 4.0558 10.8584 2.64503L10.9844 2.5464C11.5884 2.11813 12.4118 2.11884 13.0156 2.5464L13.1406 2.64406L13.1416 2.64503C14.7871 4.05661 16.8712 4.9673 19.1611 5.14796H19.1602C20.0938 5.2209 20.7752 6.01289 20.7754 6.91261V11.2427C20.7754 15.9691 17.3764 20.3573 12.7344 21.6724C12.2573 21.8075 11.7437 21.8075 11.2666 21.6724C6.62338 20.3583 3.22461 15.9678 3.22461 11.2417ZM14.7705 9.79445C15.0732 9.49179 15.5645 9.49179 15.8672 9.79445C16.1695 10.0971 16.1697 10.5876 15.8672 10.8901L11.7188 15.0376C11.4161 15.3403 10.9257 15.3403 10.623 15.0376L8.13379 12.5493C7.83113 12.2467 7.83113 11.7553 8.13379 11.4526C8.43645 11.15 8.92784 11.15 9.23047 11.4526L11.1709 13.3931L14.7705 9.79445ZM4.77539 11.2417C4.77539 15.2494 7.6889 19.0491 11.6895 20.1812C11.8902 20.238 12.1107 20.238 12.3115 20.1812C16.3114 19.0481 19.2246 15.2502 19.2246 11.2427V6.91261C19.2244 6.7849 19.13 6.70113 19.04 6.69386H19.0391C16.4111 6.48653 14.0193 5.43916 12.1328 3.82081C12.0606 3.7594 11.9382 3.76086 11.8682 3.82081L11.8672 3.82179C9.981 5.43871 7.589 6.48652 4.96094 6.69386H4.95996C4.86948 6.70116 4.77557 6.78541 4.77539 6.91163V11.2417Z"
            fill="black"
        />
    </svg>
);

const BoltIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M13.5 2L4.5 14H12L10.5 22L19.5 10H12L13.5 2Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const GlobeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9.25" stroke="black" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="4.25" ry="9.25" stroke="black" strokeWidth="1.5" />
        <path d="M3.5 9H20.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.5 15H20.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

/* ─── Values Data ─── */
const values = [
    {
        icon: <ShieldIcon />,
        title: "Integrity",
        desc: "We operate with honesty and transparency in every interaction.",
    },
    {
        icon: <BoltIcon />,
        title: "Efficiency",
        desc: "Streamlined processes that respect your time and resources.",
    },
    {
        icon: <GlobeIcon />,
        title: "Local First",
        desc: "Everything we do is grounded in a deep understanding of the UAE market.",
    },
];

/* ─── Mission Highlights ─── */
const highlights = [
    "UAE-Based Operations",
    "Online Retail & Project Management",
    "Growth-Oriented Approach",
];

export default function AboutPage() {
    return (
        <>
            <NavBar />

            {/* ════════════════════════════════════════════════
                Section 1 — Page Hero
            ════════════════════════════════════════════════ */}
            <section
                className="about-hero-section"
                style={{
                    paddingTop: "4.5rem",
                    paddingBlock: "8.25rem",
                    background: "#fff",
                }}
            >
                <div
                    className="about-container"
                    style={{
                        maxWidth: "83rem",
                        margin: "0 auto",
                        padding: "0 3.5rem",
                        paddingTop: "4.5rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.75rem",
                            maxWidth: "48rem",
                        }}
                    >
                        {/* Pill */}
                        <div style={{ display: "inline-flex" }}>
                            <div
                                style={{
                                    border: "1px solid rgba(0,0,0,0.1)",
                                    borderRadius: "0.5rem",
                                    padding: "0.25rem 1rem",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    fontFamily: "Inter, sans-serif",
                                    color: "rgba(0,0,0,0.6)",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                About Us
                            </div>
                        </div>

                        {/* Heading */}
                        <h1
                            className="about-hero-heading"
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
                            Built for the UAE market.
                        </h1>

                        {/* Description */}
                        <p
                            style={{
                                margin: 0,
                                fontFamily: "Inter, sans-serif",
                                fontSize: "1.125rem",
                                fontWeight: 400,
                                color: "rgba(0,0,0,0.4)",
                                lineHeight: 1.5,
                                maxWidth: "38rem",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Gulaal International is a UAE-based company focused on online retail
                            and project management, serving businesses and consumers across the
                            Gulf region.
                        </p>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                Section 2 — Our Mission (2-column)
            ════════════════════════════════════════════════ */}
            <section
                className="about-mission-section"
                style={{
                    paddingBlock: "8.25rem",
                    background: "#fff",
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                }}
            >
                <div className="about-container" style={{ maxWidth: "83rem", margin: "0 auto", padding: "0 3.5rem" }}>
                    {/* Pill */}
                    <div style={{ display: "inline-flex", marginBottom: "2.5rem" }}>
                        <div
                            style={{
                                border: "1px solid rgba(0,0,0,0.1)",
                                borderRadius: "0.5rem",
                                padding: "0.25rem 1rem",
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                fontFamily: "Inter, sans-serif",
                                color: "rgba(0,0,0,0.6)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Our Mission
                        </div>
                    </div>

                    <div
                        className="about-mission-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "5rem",
                            alignItems: "start",
                        }}
                    >
                        {/* Left — Paragraph */}
                        <div>
                            <p
                                style={{
                                    margin: 0,
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "1.5rem",
                                    fontWeight: 400,
                                    color: "#000",
                                    lineHeight: 1.5,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                We combine local market knowledge with operational discipline to
                                deliver results, whether that means getting products to customers
                                across the Emirates or managing complex projects from start to finish.
                            </p>
                        </div>

                        {/* Right — Highlight cards */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}
                        >
                            {highlights.map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        border: "1px solid rgba(0,0,0,0.08)",
                                        borderRadius: "1rem",
                                        padding: "1.25rem 1.5rem",
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        color: "#000",
                                        letterSpacing: "-0.01em",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.875rem",
                                    }}
                                >
                                    {/* Small dot indicator */}
                                    <div
                                        style={{
                                            width: "0.5rem",
                                            height: "0.5rem",
                                            borderRadius: "50%",
                                            background: "#000",
                                            flexShrink: 0,
                                        }}
                                    />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* ════════════════════════════════════════════════
                Section 3 — Values (3 cards)
            ════════════════════════════════════════════════ */}
            <section
                className="about-values-section"
                style={{
                    paddingBlock: "8.25rem",
                    background: "#fff",
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                }}
            >
                <div className="about-container" style={{ maxWidth: "83rem", margin: "0 auto", padding: "0 3.5rem" }}>
                    {/* Header */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.75rem",
                            marginBottom: "5rem",
                        }}
                    >
                        <div style={{ display: "inline-flex" }}>
                            <div
                                style={{
                                    border: "1px solid rgba(0,0,0,0.1)",
                                    borderRadius: "0.5rem",
                                    padding: "0.25rem 1rem",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    fontFamily: "Inter, sans-serif",
                                    color: "rgba(0,0,0,0.6)",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Our Values
                            </div>
                        </div>
                        <h2
                            className="about-section-heading"
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
                            What drives us
                        </h2>
                    </div>

                    {/* 3-col grid */}
                    <div
                        className="about-values-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "1.5rem",
                        }}
                    >
                        {values.map((v, i) => (
                            <div
                                key={i}
                                style={{
                                    background: "#fff",
                                    border: "1px solid rgba(0,0,0,0.08)",
                                    borderRadius: "1.25rem",
                                    padding: "2rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.25rem",
                                }}
                            >
                                {/* Icon container */}
                                <div
                                    style={{
                                        width: "2.75rem",
                                        height: "2.75rem",
                                        background: "#f5f5f5",
                                        borderRadius: "0.75rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {v.icon}
                                </div>
                                <div>
                                    <h3
                                        style={{
                                            fontFamily: "Inter, sans-serif",
                                            fontWeight: 500,
                                            fontSize: "1.0625rem",
                                            letterSpacing: "-0.01em",
                                            color: "#000",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {v.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: "Inter, sans-serif",
                                            fontSize: "0.9375rem",
                                            fontWeight: 400,
                                            color: "rgba(0,0,0,0.55)",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {v.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* ════════════════════════════════════════════════
                Section 4 — CTA Banner
            ════════════════════════════════════════════════ */}
            <section
                className="about-cta-section"
                style={{
                    paddingBlock: "8.25rem",
                    background: "#f5f5f5",
                }}
            >
                <div
                    className="about-container"
                    style={{
                        maxWidth: "83rem",
                        margin: "0 auto",
                        padding: "0 3.5rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "2rem",
                    }}
                >
                    <h2
                        className="about-section-heading"
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
                        Want to work with us?
                    </h2>
                    <Link
                        href="/#contact"
                        style={{
                            font: "inherit",
                            border: "none",
                            borderRadius: "5rem",
                            padding: "1rem 1.5rem",
                            backgroundColor: "#000",
                            color: "#fff",
                            cursor: "pointer",
                            alignItems: "center",
                            lineHeight: 1,
                            display: "inline-flex",
                            gap: "0.5rem",
                            fontSize: "1rem",
                            fontWeight: 500,
                            fontFamily: "Inter, sans-serif",
                            whiteSpace: "nowrap",
                            transition: "opacity 0.15s",
                            textDecoration: "none",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>

            <Footer />

            {/* ── Responsive overrides ── */}
            <style>{`
                @media (max-width: 900px) {
                    .about-hero-heading {
                        font-size: 2.75rem !important;
                    }
                    .about-section-heading {
                        font-size: 2.75rem !important;
                    }
                }
                @media (min-width: 768px) and (max-width: 1023px) {
                    .about-values-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 767px) {
                    /* Container padding */
                    .about-container {
                        padding-left: 1.25rem !important;
                        padding-right: 1.25rem !important;
                    }
                    /* Section spacing */
                    .about-hero-section {
                        padding-block: 4rem !important;
                    }
                    .about-mission-section {
                        padding-block: 4rem !important;
                    }
                    .about-values-section {
                        padding-block: 4rem !important;
                    }
                    .about-cta-section {
                        padding-block: 4rem !important;
                    }
                    /* Heading sizes */
                    .about-hero-heading {
                        font-size: 2rem !important;
                    }
                    .about-section-heading {
                        font-size: 2rem !important;
                    }
                    /* Grid layouts */
                    .about-mission-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }
                    .about-values-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </>
    );
}
