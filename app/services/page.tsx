import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services | Gulaal International",
    description:
        "Explore Gulaal International's services: online retail and project management across the UAE.",
    openGraph: {
        title: "Services | Gulaal International",
        description:
            "Explore Gulaal International's services: online retail and project management across the UAE.",
    },
};

// ── Types ──────────────────────────────────────────────────────────────────
type BentoCardData = {
    title: string;
    description: string;
};

// ── Data ───────────────────────────────────────────────────────────────────
const retailCards: BentoCardData[] = [
    {
        title: "Product Curation",
        description: "Carefully selected products for the UAE consumer.",
    },
    {
        title: "Online Operations",
        description: "End-to-end management of our digital storefronts.",
    },
    {
        title: "Delivery & Fulfillment",
        description: "Reliable logistics across the Emirates.",
    },
];

const pmCards: BentoCardData[] = [
    {
        title: "Planning & Scoping",
        description: "Clear roadmaps from day one.",
    },
    {
        title: "Execution & Coordination",
        description: "Hands-on management across every milestone.",
    },
    {
        title: "Reporting & Oversight",
        description: "Transparent communication throughout.",
    },
];

// ── Corner Plus Icons ──────────────────────────────────────────────────────
const PlusIcon = ({ style }: { style?: React.CSSProperties }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={20}
        height={20}
        strokeWidth="1"
        stroke="currentColor"
        style={{
            position: "absolute",
            color: "rgba(0,0,0,0.2)",
            ...style,
        }}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
);

const CornerPlus = () => (
    <>
        <PlusIcon style={{ top: -10, left: -10 }} />
        <PlusIcon style={{ top: -10, right: -10 }} />
        <PlusIcon style={{ bottom: -10, left: -10 }} />
        <PlusIcon style={{ bottom: -10, right: -10 }} />
    </>
);

// ── BentoCard ──────────────────────────────────────────────────────────────
const BentoCard = ({
    title,
    description,
    style,
}: BentoCardData & { style?: React.CSSProperties }) => (
    <div
        style={{
            position: "relative",
            border: "1px dashed rgba(0,0,0,0.18)",
            borderRadius: "1rem",
            padding: "1.75rem",
            background: "#fff",
            minHeight: "10rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "1rem",
            ...style,
        }}
    >
        <CornerPlus />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            <h3
                style={{
                    margin: 0,
                    fontWeight: 500,
                    fontSize: "1.0625rem",
                    letterSpacing: "-0.02em",
                    color: "#000",
                    lineHeight: 1.3,
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    margin: 0,
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "rgba(0,0,0,0.5)",
                    letterSpacing: "-0.01em",
                }}
            >
                {description}
            </p>
        </div>
    </div>
);

// ── Section Label ──────────────────────────────────────────────────────────
const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <p
        style={{
            margin: 0,
            fontSize: "0.8125rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.3)",
        }}
    >
        {children}
    </p>
);

// ── Main Page ──────────────────────────────────────────────────────────────
export default function ServicesPage() {
    return (
        <main>
            <NavBar />

            {/* ── Page Hero ── */}
            <section
                className="services-hero-section"
                style={{
                    paddingTop: "calc(4.5rem + 8.25rem)",
                    paddingBottom: "4rem",
                    background: "#fff",
                }}
            >
                <div
                    className="services-container"
                    style={{
                        maxWidth: "83rem",
                        margin: "0 auto",
                        padding: "0 3.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                    }}
                >
                    {/* Pill label */}
                    <div style={{ display: "inline-flex" }}>
                        <div
                            style={{
                                border: "1px solid rgba(0,0,0,0.1)",
                                borderRadius: "0.5rem",
                                padding: "0.25rem 1rem",
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                color: "rgba(0,0,0,0.6)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Services
                        </div>
                    </div>

                    {/* Heading */}
                    <h1
                        style={{
                            margin: 0,
                            fontWeight: 400,
                            fontSize: "3.75rem",
                            lineHeight: 1.12,
                            letterSpacing: "-0.02em",
                            color: "#000",
                        }}
                        className="services-page-hero-heading"
                    >
                        What we do.
                    </h1>

                    {/* Description */}
                    <p
                        style={{
                            margin: 0,
                            fontSize: "1.125rem",
                            color: "rgba(0,0,0,0.4)",
                            lineHeight: 1.5,
                            letterSpacing: "-0.02em",
                            maxWidth: "32rem",
                        }}
                    >
                        Two core capabilities, one reliable partner.
                    </p>
                </div>
            </section>

            {/* ── Online Retail ── */}
            <section
                style={{
                    paddingBlock: "4rem",
                    background: "#fff",
                }}
            >
                <div
                    className="services-container"
                    style={{
                        maxWidth: "83rem",
                        margin: "0 auto",
                        padding: "0 3.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    <SectionLabel>Online Retail</SectionLabel>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <h2
                            style={{
                                margin: 0,
                                fontWeight: 400,
                                fontSize: "2.25rem",
                                lineHeight: 1.2,
                                letterSpacing: "-0.02em",
                                color: "#000",
                                maxWidth: "36rem",
                            }}
                            className="services-page-section-heading"
                        >
                            Bringing quality products to the UAE market.
                        </h2>
                        <p
                            style={{
                                margin: 0,
                                fontSize: "1.0625rem",
                                color: "rgba(0,0,0,0.4)",
                                lineHeight: 1.6,
                                letterSpacing: "-0.01em",
                                maxWidth: "40rem",
                            }}
                        >
                            We source, curate, and sell products online, operating across
                            leading platforms to reach customers throughout the Emirates.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "1rem",
                        }}
                        className="services-bento-grid"
                    >
                        {retailCards.map((card, i) => (
                            <BentoCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Project Management ── */}
            <section
                style={{
                    paddingBlock: "4rem",
                    background: "#fff",
                }}
            >
                <div
                    className="services-container"
                    style={{
                        maxWidth: "83rem",
                        margin: "0 auto",
                        padding: "0 3.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    <SectionLabel>Project Management</SectionLabel>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <h2
                            style={{
                                margin: 0,
                                fontWeight: 400,
                                fontSize: "2.25rem",
                                lineHeight: 1.2,
                                letterSpacing: "-0.02em",
                                color: "#000",
                                maxWidth: "36rem",
                            }}
                            className="services-page-section-heading"
                        >
                            Structured delivery, every time.
                        </h2>
                        <p
                            style={{
                                margin: 0,
                                fontSize: "1.0625rem",
                                color: "rgba(0,0,0,0.4)",
                                lineHeight: 1.6,
                                letterSpacing: "-0.01em",
                                maxWidth: "40rem",
                            }}
                        >
                            From planning to execution, we manage projects with clarity and
                            discipline.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "1rem",
                        }}
                        className="services-bento-grid"
                    >
                        {pmCards.map((card, i) => (
                            <BentoCard key={i} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Strip ── */}
            <section
                className="services-cta-section"
                style={{
                    paddingBottom: "8.25rem",
                    background: "#fff",
                }}
            >
                <div
                    className="services-container"
                    style={{
                        maxWidth: "83rem",
                        margin: "0 auto",
                        padding: "0 3.5rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderTop: "1px solid rgba(0,0,0,0.07)",
                            paddingTop: "2rem",
                            gap: "2rem",
                            flexWrap: "wrap",
                        }}
                        className="services-cta-strip"
                    >
                        <p
                            style={{
                                margin: 0,
                                fontSize: "1rem",
                                color: "rgba(0,0,0,0.4)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Ready to get started?
                        </p>
                        <Link
                            href="/#contact"
                            className="hover-opacity"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "#000",
                                color: "#fff",
                                fontSize: "1rem",
                                fontWeight: 500,
                                padding: "0.875rem 1.5rem",
                                borderRadius: "5rem",
                                textDecoration: "none",
                                letterSpacing: "-0.01em",
                                transition: "opacity 0.15s",
                                whiteSpace: "nowrap",
                                flexShrink: 0,
                            }}
                        >
                            Get in Touch →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

            {/* Responsive overrides */}
            <style>{`
                @media (max-width: 900px) {
                    .services-bento-grid {
                        grid-template-columns: 1fr 1fr !important;
                    }
                    .services-page-hero-heading {
                        font-size: 2.75rem !important;
                    }
                    .services-page-section-heading {
                        font-size: 1.75rem !important;
                    }
                }
                @media (max-width: 767px) {
                    /* Container padding */
                    .services-container {
                        padding-left: 1.25rem !important;
                        padding-right: 1.25rem !important;
                    }
                    /* Section spacing */
                    .services-hero-section {
                        padding-top: calc(4.5rem + 4rem) !important;
                        padding-bottom: 2rem !important;
                    }
                    .services-cta-section {
                        padding-bottom: 4rem !important;
                    }
                }
                @media (max-width: 600px) {
                    .services-bento-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .services-page-hero-heading {
                        font-size: 2rem !important;
                    }
                    .services-page-section-heading {
                        font-size: 1.5rem !important;
                    }
                    .services-cta-strip {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                    }
                }
            `}</style>
        </main>
    );
}
