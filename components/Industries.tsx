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
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", marginBottom: "3.5rem" }}>
                <h2
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        color: "#000",
                    }}
                >
                    F<ItalicSpan>o</ItalicSpan>r ev<ItalicSpan>e</ItalicSpan>ry bu<ItalicSpan>s</ItalicSpan>iness th<ItalicSpan>a</ItalicSpan>t bu<ItalicSpan>i</ItalicSpan>lds
                </h2>
                <p
                    style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "1rem",
                        color: "rgba(0,0,0,0.5)",
                        marginTop: "0.75rem",
                        maxWidth: "36rem",
                        lineHeight: 1.6,
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
