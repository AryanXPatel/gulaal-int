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
        title: "End-to-End Project Delivery",
        description:
            "From scoping to handover — we own the full lifecycle. No gaps, no dropped balls, just clean execution across every phase.",
        tag: "Project Management",
    },
    {
        title: "Vendor & Supplier Coordination",
        description:
            "We manage your UAE vendor network so you don't have to. Contracts, timelines, and quality checks handled in one place.",
        tag: "Project Management",
    },
    {
        title: "Real-Time Reporting",
        description:
            "Live dashboards and weekly status reports keep you informed without the noise. Know exactly where your project stands.",
        tag: "Project Management",
    },
    {
        title: "Risk & Compliance Management",
        description:
            "UAE regulations move fast. We stay ahead of them — flagging risks early and keeping your project legally sound.",
        tag: "Project Management",
    },
];

const ecomServices: BentoCard[] = [
    {
        title: "Marketplace Launch & Setup",
        description:
            "Amazon.ae, Noon, Carrefour — we set up your storefront, listings, and logistics from day one.",
        tag: "E-Commerce",
    },
    {
        title: "Product Listing Optimisation",
        description:
            "SEO-tuned titles, A+ content, and keyword-rich descriptions that convert browsers into buyers in the UAE market.",
        tag: "E-Commerce",
    },
    {
        title: "Inventory & Fulfilment",
        description:
            "We handle stock levels, warehouse coordination, and last-mile delivery — so you never miss a sale.",
        tag: "E-Commerce",
    },
    {
        title: "Performance Analytics",
        description:
            "Sales trends, conversion rates, and competitor benchmarks — all translated into clear actions for growth.",
        tag: "E-Commerce",
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

// ── ItalicSpan ─────────────────────────────────────────────────────────────
const ItalicSpan = ({ children }: { children: React.ReactNode }) => (
    <span
        style={{
            fontFamily: "Cormorant Garamond, Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
        }}
    >
        {children}
    </span>
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
                                letterSpacing: "-0.02em",
                                maxWidth: "32rem",
                            }}
                        >
                            Whether you&apos;re launching a project or scaling an online store, everything is designed to flow effortlessly.
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
                        E-Commerce
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
                        Built for UAE businesses — every service is tailored to the local market, regulations, and pace of growth.
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
                }
                @media (max-width: 600px) {
                    .bento-grid-4 { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
}
