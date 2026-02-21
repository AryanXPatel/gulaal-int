"use client";

// ── Types ──────────────────────────────────────────────────────────────────
type BentoCard = {
    title: string;
    description: string;
    tag?: string;
    accent?: boolean;
};

// ── Data ───────────────────────────────────────────────────────────────────
const pmServices: BentoCard[] = [
    {
        title: "Planning & Scoping",
        description:
            "Structured roadmaps and clear milestones from the start. Every project begins with a well-defined plan.",
    },
    {
        title: "Execution & Coordination",
        description:
            "Hands-on management across every phase — keeping teams, timelines, and deliverables aligned.",
    },
    {
        title: "Reporting & Oversight",
        description:
            "Regular updates and transparent communication throughout the project lifecycle.",
    },
    {
        title: "Local Compliance",
        description:
            "Navigating UAE regulations and requirements so your project stays on track and fully compliant.",
    },
];

const ecomServices: BentoCard[] = [
    {
        title: "Product Curation",
        description:
            "Carefully selected products for the UAE consumer market — sourced and managed with quality in mind.",
    },
    {
        title: "Online Storefronts",
        description:
            "Operating across leading platforms to reach customers throughout the Emirates.",
    },
    {
        title: "Fulfillment & Delivery",
        description:
            "End-to-end logistics — from warehouse to doorstep — ensuring reliable delivery across the UAE.",
    },
    {
        title: "Market Insights",
        description:
            "Continuously learning from the market to refine our offerings and serve customers better.",
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
    tag,
    style,
}: BentoCard & { style?: React.CSSProperties }) => (
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
                    fontFamily: "Inter, sans-serif",
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
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.9375rem",
                    lineHeight: 1.6,
                    color: "rgba(0,0,0,0.5)",
                    letterSpacing: "-0.01em",
                }}
            >
                {description}
            </p>
        </div>
        {tag && (
            <div
                style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: "0.375rem",
                    padding: "0.2rem 0.625rem",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    fontFamily: "Inter, sans-serif",
                    color: "rgba(0,0,0,0.45)",
                    letterSpacing: "-0.01em",
                }}
            >
                {tag}
            </div>
        )}
    </div>
);

// ── Main Component ─────────────────────────────────────────────────────────
export default function Services() {
    return (
        <section
            style={{
                padding: "6rem 0",
                background: "#fff",
            }}
        >
            <div
                className="section-container"
                style={{
                    maxWidth: "83rem",
                    margin: "0 auto",
                    padding: "0 3.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4rem",
                }}
            >
                {/* ── Header ── */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
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
                            Services
                        </div>
                    </div>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "3rem",
                            alignItems: "end",
                        }}
                        className="services-header-grid"
                    >
                        <h2
                            className="section-heading"
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
                            What we do
                        </h2>
                        <p
                            style={{
                                margin: 0,
                                fontFamily: "Inter, sans-serif",
                                fontSize: "1.125rem",
                                color: "rgba(0,0,0,0.4)",
                                lineHeight: 1.5,
                                letterSpacing: "-0.02em",
                                maxWidth: "32rem",
                            }}
                        >
                            Two core capabilities — online retail and project management — delivered with focus and discipline.
                        </p>
                    </div>
                </div>

                {/* ── Project Management Bento ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <p
                        style={{
                            margin: 0,
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "rgba(0,0,0,0.3)",
                        }}
                    >
                        Project Management
                    </p>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "1rem",
                        }}
                        className="bento-grid-4"
                    >
                        {pmServices.map((card, i) => (
                            <BentoCard
                                key={i}
                                {...card}
                                tag={undefined}
                                style={
                                    i === 0
                                        ? { gridColumn: "span 2" }
                                        : i === 2
                                            ? { gridColumn: "span 2" }
                                            : {}
                                }
                            />
                        ))}
                    </div>
                </div>

                {/* ── E-Commerce Bento ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <p
                        style={{
                            margin: 0,
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "rgba(0,0,0,0.3)",
                        }}
                    >
                        Online Retail
                    </p>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "1rem",
                        }}
                        className="bento-grid-4"
                    >
                        {ecomServices.map((card, i) => (
                            <BentoCard
                                key={i}
                                {...card}
                                tag={undefined}
                                style={
                                    i === 1
                                        ? { gridColumn: "span 2" }
                                        : i === 3
                                            ? { gridColumn: "span 2" }
                                            : {}
                                }
                            />
                        ))}
                    </div>
                </div>

                {/* ── Footer CTA strip ── */}
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
                >
                    <p
                        style={{
                            margin: 0,
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1rem",
                            color: "rgba(0,0,0,0.4)",
                            letterSpacing: "-0.01em",
                            maxWidth: "32rem",
                        }}
                    >
                        Based in the UAE — everything we do is built around the local market and its unique pace of growth.
                    </p>
                    <a
                        href="#contact"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "#000",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
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
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        Start a project →
                    </a>
                </div>
            </div>

            {/* Responsive overrides */}
            <style>{`
                @media (max-width: 900px) {
                    .bento-grid-4 { grid-template-columns: 1fr 1fr !important; }
                    .bento-grid-4 > * { grid-column: span 1 !important; }
                    .services-header-grid { grid-template-columns: 1fr !important; }
                    .section-container { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
                    .section-heading { font-size: 2.25rem !important; }
                }
                @media (max-width: 600px) {
                    .bento-grid-4 { grid-template-columns: 1fr !important; }
                    .section-heading { font-size: 2rem !important; }
                }
            `}</style>
        </section>
    );
}
