"use client";

import {
    Storefront,
    ForkKnife,
    Buildings,
    FirstAid,
    ShoppingCart,
    Package,
    TShirt,
    Airplane,
    CurrencyDollar,
    Crane,
    MegaphoneSimple,
    Desktop,
    GraduationCap,
    Sparkle,
    Confetti,
    DeviceMobile,
    Car,
    ChartBar,
    Coffee,
    Barbell,
} from "@phosphor-icons/react";

function ItalicSpan({ children }: { children: string }) {
    return (
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
}

function PlusIcon({ style }: { style?: React.CSSProperties }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                position: "absolute",
                color: "rgba(0,0,0,0.18)",
                zIndex: 2,
                ...style,
            }}
        >
            <path d="M12 6v12m6-6H6" />
        </svg>
    );
}

const ICON_SIZE = 28;
const ICON_WEIGHT = "light" as const;

const industries = [
    { label: "Retail & FMCG", Icon: Storefront, muted: true },
    { label: "Food & Beverage", Icon: ForkKnife, muted: false },
    { label: "Real Estate", Icon: Buildings, muted: false },
    { label: "Healthcare", Icon: FirstAid, muted: true },
    { label: "E-Commerce", Icon: ShoppingCart, muted: false },

    { label: "Logistics", Icon: Package, muted: false },
    { label: "Fashion & Apparel", Icon: TShirt, muted: true },
    { label: "Tourism & Travel", Icon: Airplane, muted: false },
    { label: "Finance", Icon: CurrencyDollar, muted: true },
    { label: "Construction", Icon: Crane, muted: true },

    { label: "Marketing & PR", Icon: MegaphoneSimple, muted: true },
    { label: "Technology", Icon: Desktop, muted: false },
    { label: "Education", Icon: GraduationCap, muted: true },
    { label: "Beauty & Wellness", Icon: Sparkle, muted: false },
    { label: "Events & Expos", Icon: Confetti, muted: false },

    { label: "Media & Content", Icon: DeviceMobile, muted: false },
    { label: "Automotive", Icon: Car, muted: true },
    { label: "Consulting", Icon: ChartBar, muted: false },
    { label: "Hospitality", Icon: Coffee, muted: true },
    { label: "Sports & Fitness", Icon: Barbell, muted: false },
];

const COLS = 5;

export default function Industries() {
    return (
        <section
            id="who"
            style={{
                paddingBlock: "8.25rem",
                background: "#fff",
                overflow: "hidden",
            }}
        >
            {/* ── Header ── */}
            <div
                style={{
                    maxWidth: "83rem",
                    margin: "0 auto",
                    padding: "0 3.5rem",
                    marginBottom: "4rem",
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
                        Industries
                    </div>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "3rem",
                        alignItems: "end",
                    }}
                    className="industries-header-grid"
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
                        F<ItalicSpan>o</ItalicSpan>r every bu<ItalicSpan>s</ItalicSpan>iness that bu<ItalicSpan>i</ItalicSpan>lds
                    </h2>
                    <p
                        style={{
                            margin: 0,
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1.125rem",
                            color: "rgba(0,0,0,0.4)",
                            maxWidth: "32rem",
                            lineHeight: 1.5,
                            letterSpacing: "-0.02em",
                        }}
                    >
                        From retail to real estate — we&apos;ve delivered projects across every major industry in the UAE.
                    </p>
                </div>
            </div>

            {/* ── Full-bleed grid ── */}
            <div
                style={{
                    borderTop: "1px solid rgba(0,0,0,0.08)",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
                        maxWidth: "83rem",
                        margin: "0 auto",
                        padding: "0 3.5rem",
                    }}
                    className="industries-grid"
                >
                    {industries.map((item, i) => {
                        const col = i % COLS;
                        const row = Math.floor(i / COLS);
                        const totalRows = Math.ceil(industries.length / COLS);
                        const isLastRow = row === totalRows - 1;
                        const isLastCol = col === COLS - 1;
                        const { Icon } = item;

                        return (
                            <div
                                key={i}
                                style={{
                                    position: "relative",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    padding: "2.75rem 1.5rem",
                                    background: item.muted ? "#f9f9f9" : "#fff",
                                    borderRight: isLastCol ? "none" : "1px solid rgba(0,0,0,0.08)",
                                    borderBottom: isLastRow ? "none" : "1px solid rgba(0,0,0,0.08)",
                                    transition: "background 0.2s",
                                    cursor: "default",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.background = "#f2f2f2";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.background =
                                        item.muted ? "#f9f9f9" : "#fff";
                                }}
                            >
                                {/* Plus at bottom-right intersection */}
                                {!isLastCol && !isLastRow && (
                                    <PlusIcon style={{ bottom: -10, right: -10 }} />
                                )}
                                {/* Plus at bottom-left of first column */}
                                {col === 0 && !isLastRow && (
                                    <PlusIcon style={{ bottom: -10, left: -10 }} />
                                )}

                                {/* Phosphor icon */}
                                <Icon
                                    size={ICON_SIZE}
                                    weight={ICON_WEIGHT}
                                    color="rgba(0,0,0,0.7)"
                                />

                                {/* Label */}
                                <span
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "0.9rem",
                                        fontWeight: 500,
                                        letterSpacing: "-0.02em",
                                        color: "#000",
                                        textAlign: "center",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
                @media (max-width: 900px) {
                    .industries-grid { grid-template-columns: repeat(3, 1fr) !important; }
                    .industries-header-grid { grid-template-columns: 1fr !important; }
                }
                @media (max-width: 600px) {
                    .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </section>
    );
}
