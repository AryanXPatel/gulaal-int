"use client";

function ItalicSpan({ children }: { children: string }) {
    return (
        <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
            {children}
        </span>
    );
}

const row1 = [
    { label: "Construction", img: "/isomeet/690126ee5ec2cd7f83dcde2b_Photographers.avif" },
    { label: "Retail", img: "/isomeet/690126e8669938a5c3f9af81_Models.avif" },
    { label: "F&B", img: "/isomeet/690126ee35d3ba4767605de0_Videographers.avif" },
    { label: "Healthcare", img: "/isomeet/690126e8d7538051abe4b489_Hair stylists.avif" },
    { label: "E-Commerce", img: "/isomeet/690126cc4ebed955e557fd79_Content creators.avif" },
    { label: "Marketing", img: "/isomeet/690126e8cda7655503c7b020_Marketing.avif" },
    { label: "Beauty", img: "/isomeet/690126e8c2b722dbe178f270_Makeup artists.avif" },
    { label: "Events", img: "/isomeet/690126e829aa55d6b8db6751_Music talents.avif" },
    { label: "Influencers", img: "/isomeet/690126e8695f007675d67a8f_Influencers.avif" },
    { label: "Entertainment", img: "/isomeet/690126cc2ca1110bcfaed389_Actors.avif" },
];

const row2 = [
    { label: "Photography", img: "/isomeet/690126e819b7a9a9139c17da_Photo editors.avif" },
    { label: "Branding", img: "/isomeet/690126cc2b60187615b10b98_Brand specialists.avif" },
    { label: "Logistics", img: "/isomeet/690126d28568185dd161930e_Drone operators.avif" },
    { label: "Food & Bev", img: "/isomeet/690126e10200c2d051b7e6e9_Food specialists.avif" },
    { label: "Floristry", img: "/isomeet/690126e17ad452f088ae89c2_Florists.avif" },
    { label: "Video", img: "/isomeet/690126ee6a455bef4ad284b5_Video content creators.avif" },
    { label: "Fashion", img: "/isomeet/690126ee65bda9b0a21368a1_Stylists.avif" },
    { label: "Fitness", img: "/isomeet/690126d2b766b7d2bdc2af2e_Dancers.avif" },
    { label: "Media", img: "/isomeet/690126d2b58c322892d85058_Directors.avif" },
    { label: "Production", img: "/isomeet/690126ee4fcd080f98700957_Producers.avif" },
];

function MarqueeItem({ label, img }: { label: string; img: string }) {
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
                    background: "#f0f0f0",
                }}
            >
                <img
                    src={img}
                    alt={label}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
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
