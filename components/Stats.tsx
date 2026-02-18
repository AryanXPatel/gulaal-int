"use client";

function ItalicSpan({ children }: { children: string }) {
    return (
        <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
            {children}
        </span>
    );
}

const ctaImages = [
    { src: "/gulaal/cta-portrait-1.avif", pos: { top: "5%", left: "2%", width: "11rem" }, shape: "tall" },
    { src: "/gulaal/cta-portrait-2.avif", pos: { top: "5%", right: "2%", width: "11rem" }, shape: "tall" },
    { src: "/gulaal/cta-portrait-3.avif", pos: { bottom: "8%", left: "5%", width: "9rem" }, shape: "square" },
    { src: "/gulaal/cta-portrait-1.avif", pos: { bottom: "8%", right: "5%", width: "9rem" }, shape: "square" },
    { src: "/gulaal/cta-portrait-2.avif", pos: { top: "50%", left: "0%", transform: "translateY(-50%)", width: "14rem" }, shape: "tall" },
    { src: "/gulaal/cta-portrait-3.avif", pos: { top: "50%", right: "0%", transform: "translateY(-50%)", width: "14rem" }, shape: "tall" },
];

export default function Stats() {
    return (
        <section
            id="join"
            style={{
                paddingBlock: "8.25rem",
                background: "#fff",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Floating background images */}
            {ctaImages.map((img, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        ...img.pos,
                        zIndex: 0,
                        borderRadius: "1rem",
                        overflow: "hidden",
                        pointerEvents: "none",
                    }}
                >
                    <img
                        src={img.src}
                        alt=""
                        style={{
                            width: img.pos.width,
                            height: img.shape === "tall" ? "13.75rem" : "10rem",
                            objectFit: "cover",
                            borderRadius: "1rem",
                            display: "block",
                            background: "#f0f0f0",
                        }}
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
                    />
                </div>
            ))}

            {/* Center content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "83rem",
                    margin: "0 auto",
                    padding: "0 3.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "2.5rem",
                }}
            >
                {/* Logo mark */}
                <div style={{ width: "3.5rem", height: "3.5rem" }}>
                    <svg width="100%" height="100%" viewBox="0 0 56 56" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.1206 12C32.3863 12.0001 36.4776 13.6946 39.4939 16.7109C42.3605 19.5777 44.0321 23.4154 44.191 27.451H56.2435V28.7174H44.1887C44.0298 32.753 42.3577 36.5907 39.491 39.4575C36.4746 42.4737 32.3834 44.1683 28.1177 44.1684C23.852 44.1683 19.7608 42.4737 16.7444 39.4575C13.8777 36.5907 12.2056 32.753 12.0468 28.7174H0V27.451H12.0496C12.2085 23.4153 13.8805 19.5777 16.7473 16.7109C19.7637 13.6946 23.8549 12 28.1206 12ZM15.0357 28.7174C15.1891 32.2642 16.627 35.6336 19.0801 38.1548C21.6786 40.8255 25.2032 42.3257 28.878 42.3257C32.5528 42.3256 36.0776 40.8255 38.676 38.1548C41.1289 35.6336 42.5664 32.2642 42.7198 28.7174H15.0357ZM27.3603 13.8427C23.6856 13.8428 20.1613 15.343 17.5629 18.0136C15.1099 20.5347 13.6714 23.9042 13.5179 27.451H41.202C41.0486 23.9043 39.6111 20.5347 37.1582 18.0136C34.5598 15.3429 31.035 13.8428 27.3603 13.8427Z" fill="black" />
                    </svg>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
                    {/* Pill label */}
                    <div style={{ display: "inline-flex" }}>
                        <div style={{ border: "1px solid rgba(0,0,0,0.1)", borderRadius: "0.5rem", padding: "0.25rem 1rem", fontSize: "0.875rem", fontWeight: 500, fontFamily: "Inter, sans-serif", color: "rgba(0,0,0,0.6)", letterSpacing: "-0.01em" }}>
                            Get Started
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
                            maxWidth: "36rem",
                        }}
                    >
                        Re<ItalicSpan>a</ItalicSpan>dy to join the n<ItalicSpan>e</ItalicSpan>xt era of UA<ItalicSpan>E</ItalicSpan> busin<ItalicSpan>e</ItalicSpan>ss gr<ItalicSpan>o</ItalicSpan>wth?
                    </h2>
                    <p
                        style={{
                            margin: 0,
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1.125rem",
                            color: "rgba(0,0,0,0.4)",
                            lineHeight: 1.5,
                            maxWidth: "28rem",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Join the early waitlist and get notified the moment we launch new services.
                    </p>
                </div>

                {/* Form */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{
                        display: "flex",
                        gap: "0.75rem",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1rem",
                            padding: "0.5rem 1rem 0.5rem 1.125rem",
                            border: "none",
                            borderRadius: "5rem",
                            outline: "none",
                            background: "#f2f2f2",
                            color: "#000",
                            minWidth: "19rem",
                            height: "3rem",
                        }}
                    />
                    <button
                        type="submit"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "#000",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1rem",
                            fontWeight: 500,
                            padding: "1rem 1.25rem",
                            borderRadius: "5rem",
                            border: "none",
                            cursor: "pointer",
                            lineHeight: 1,
                            transition: "opacity 0.15s",
                            whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        Get in Touch
                    </button>
                </form>

                {/* Social proof */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                    {[
                        { value: "50+", label: "Projects Delivered" },
                        { value: "30+", label: "UAE Clients" },
                        { value: "4+", label: "Years Operating" },
                        { value: "98%", label: "Client Satisfaction" },
                    ].map(({ value, label }) => (
                        <div key={label} style={{ textAlign: "center" }}>
                            <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "2rem", fontWeight: 500, color: "#000", lineHeight: 1 }}>{value}</div>
                            <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8125rem", color: "rgba(0,0,0,0.45)", marginTop: "0.25rem" }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
