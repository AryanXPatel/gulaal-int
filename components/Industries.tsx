"use client";

function ItalicSpan({ children }: { children: string }) {
    return (
        <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
            {children}
        </span>
    );
}

// UAE business industries — no external images needed
const row1 = [
    { label: "Retail", icon: "🛍️" },
    { label: "F&B", icon: "🍽️" },
    { label: "Real Estate", icon: "🏢" },
    { label: "Healthcare", icon: "🏥" },
    { label: "E-Commerce", icon: "🛒" },
    { label: "Logistics", icon: "📦" },
    { label: "Fashion", icon: "👗" },
    { label: "Tourism", icon: "✈️" },
    { label: "Finance", icon: "💼" },
    { label: "Construction", icon: "🏗️" },
];

const row2 = [
    { label: "Marketing", icon: "📣" },
    { label: "Technology", icon: "💻" },
    { label: "Education", icon: "🎓" },
    { label: "Beauty", icon: "💄" },
    { label: "Events", icon: "🎪" },
    { label: "Media", icon: "📱" },
    { label: "Automotive", icon: "🚗" },
    { label: "Food & Bev", icon: "☕" },
    { label: "Wellness", icon: "🌿" },
    { label: "Consulting", icon: "📊" },
];

function MarqueeItem({ label, icon }: { label: string; icon: string }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.625rem",
                flexShrink: 0,
            }}
        >
            <div
                style={{
                    width: "7.5rem",
                    height: "7.5rem",
                    borderRadius: "9999px",
                    overflow: "hidden",
                    background: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                    border: "1px solid rgba(0,0,0,0.06)",
                }}
            >
                {icon}
            </div>
            <span
                style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    color: "#000",
                    whiteSpace: "nowrap",
                }}
            >
                {label}
            </span>
        </div>
    );
}

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
    const doubled = [...items, ...items];
    return (
        <div style={{ overflow: "hidden" }}>
            <div
                style={{
                    display: "flex",
                    gap: "2.6rem",
                    width: "max-content",
                    animation: reverse
                        ? "marquee-reverse 30s linear infinite"
                        : "marquee 30s linear infinite",
                }}
            >
                {doubled.map((item, i) => (
                    <MarqueeItem key={i} {...item} />
                ))}
            </div>
        </div>
    );
}

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
            {/* Header */}
            <div style={{ maxWidth: "83rem", margin: "0 auto", padding: "0 3.5rem", marginBottom: "3.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Pill label */}
                <div style={{ display: "inline-flex" }}>
                    <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0.5rem", padding: "0.25rem 1rem", fontSize: "0.875rem", fontWeight: 500, fontFamily: "Inter, sans-serif", color: "rgba(0,0,0,0.6)", letterSpacing: "-0.01em" }}>
                        Industries
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
                    F<ItalicSpan>o</ItalicSpan>r every bu<ItalicSpan>s</ItalicSpan>iness that bu<ItalicSpan>i</ItalicSpan>lds
                </h2>
                <p
                    style={{
                        margin: 0,
                        fontFamily: "Inter, sans-serif",
                        fontSize: "1.125rem",
                        color: "rgba(0,0,0,0.4)",
                        maxWidth: "36rem",
                        lineHeight: 1.5,
                        letterSpacing: "-0.02em",
                    }}
                >
                    From retail to real estate — we&apos;ve delivered projects across every major industry in the UAE.
                </p>
            </div>

            {/* Marquee rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <MarqueeRow items={row1} />
                <MarqueeRow items={row2} reverse />
            </div>

            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 1.3rem)); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(calc(-50% - 1.3rem)); }
          to { transform: translateX(0); }
        }
      `}</style>
        </section>
    );
}
