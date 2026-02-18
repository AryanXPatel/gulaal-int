"use client";
import { useEffect, useRef } from "react";

// Isomeet-style italic letter span helper
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

const heroSlides = [
    { main: "/isomeet/6908eaa020eecfd681121acf_hero-slide-1-img-1.avif", secondary: "/isomeet/6908eaa08f873b1b8e9f2260_hero-slide-1-img-2.avif" },
    { main: "/isomeet/6908eaa03ca3b733f5b55d74_hero-slide-2-img-1.avif", secondary: "/isomeet/6908eaa1a496e8044c51f8e7_hero-slide-2-img-2.avif" },
    { main: "/isomeet/6908eaa0e74a211f5605758c_hero-slide-3-img-1.avif", secondary: "/isomeet/6908eaa0a826889d83292f9e_hero-slide-3-img-2.avif" },
    { main: "/isomeet/6908eaa045537dccaaf8a29d_hero-slide-4-img-1.avif", secondary: "/isomeet/6908eaa0bb44071f5696a011_hero-slide-4-img-2.avif" },
    { main: "/isomeet/6908eaa08dc1cd6373fb8c1a_hero-slide-5-img-1.avif", secondary: "/isomeet/6908eaa0a912a88208184ff3_hero-slide-5-img-2.avif" },
];

export default function Hero() {
    const currentSlide = useRef(0);
    const mainImgsRef = useRef<HTMLImageElement[]>([]);
    const secImgsRef = useRef<HTMLImageElement[]>([]);
    const dotsRef = useRef<HTMLDivElement[]>([]);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    function goTo(idx: number) {
        const prev = currentSlide.current;
        // Hide previous
        if (mainImgsRef.current[prev]) {
            mainImgsRef.current[prev].style.opacity = "0";
            mainImgsRef.current[prev].style.zIndex = "0";
        }
        if (secImgsRef.current[prev]) {
            secImgsRef.current[prev].style.opacity = "0";
            secImgsRef.current[prev].style.zIndex = "0";
        }
        if (dotsRef.current[prev]) {
            dotsRef.current[prev].style.width = "0.5rem";
            dotsRef.current[prev].style.height = "0.5rem";
            dotsRef.current[prev].style.background = "rgba(0,0,0,0.1)";
        }
        // Show next
        if (mainImgsRef.current[idx]) {
            mainImgsRef.current[idx].style.opacity = "1";
            mainImgsRef.current[idx].style.zIndex = "1";
        }
        if (secImgsRef.current[idx]) {
            secImgsRef.current[idx].style.opacity = "1";
            secImgsRef.current[idx].style.zIndex = "1";
        }
        if (dotsRef.current[idx]) {
            dotsRef.current[idx].style.width = "0.8rem";
            dotsRef.current[idx].style.height = "0.8rem";
            dotsRef.current[idx].style.background = "rgba(0,0,0,0.4)";
        }
        currentSlide.current = idx;
    }

    useEffect(() => {
        goTo(0);
        intervalRef.current = setInterval(() => {
            const next = (currentSlide.current + 1) % heroSlides.length;
            goTo(next);
        }, 2500);
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    return (
        <section
            style={{
                paddingTop: "4.5rem", // navbar height
                minHeight: "100vh",
                background: "#fff",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "0 2.5rem",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "3rem",
                        alignItems: "center",
                        minHeight: "calc(100vh - 4.5rem)",
                        paddingBlock: "4rem",
                    }}
                    className="hero-grid"
                >
                    {/* LEFT COLUMN */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        {/* Badge */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                background: "#f5f5f5",
                                borderRadius: "9999px",
                                padding: "0.4rem 0.875rem",
                                width: "fit-content",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "0.8125rem",
                                fontWeight: 400,
                                color: "#000",
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M13.5864 5.4544C13.4937 5.5264 11.8584 6.4496 11.8584 8.5024C11.8584 10.8768 13.9393 11.7168 14.0016 11.7376C13.992 11.7888 13.671 12.888 12.9044 14.008C12.2209 14.9936 11.507 15.9776 10.421 15.9776C9.33501 15.9776 9.05553 15.3456 7.80184 15.3456C6.5801 15.3456 6.1457 15.9984 5.15233 15.9984C4.15897 15.9984 3.46585 15.0864 2.66892 13.9664C1.74582 12.6512 1 10.608 1 8.6688C1 5.5584 3.01867 3.9088 5.00541 3.9088C6.06106 3.9088 6.94103 4.6032 7.60381 4.6032C8.23464 4.6032 9.21843 3.8672 10.4194 3.8672C10.8746 3.8672 12.5099 3.9088 13.5864 5.4544ZM9.84926 2.5504C10.3459 1.96 10.6973 1.1408 10.6973 0.3216C10.6973 0.208 10.6877 0.0928 10.667 0C9.85884 0.0304 8.89742 0.5392 8.31769 1.2128C7.86253 1.7312 7.43771 2.5504 7.43771 3.3808C7.43771 3.5056 7.45848 3.6304 7.46806 3.6704C7.51916 3.68 7.60221 3.6912 7.68526 3.6912C8.41032 3.6912 9.32224 3.2048 9.84926 2.5504Z" fill="black" />
                            </svg>
                            <span>UAE-Based · Est. 2020</span>
                        </div>

                        {/* H1 */}
                        <div>
                            <h1
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontWeight: 500,
                                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                    lineHeight: 1.08,
                                    letterSpacing: "-0.03em",
                                    color: "#000",
                                    marginBottom: "1.25rem",
                                }}
                            >
                                Man<ItalicSpan>a</ItalicSpan>ge. Del<ItalicSpan>i</ItalicSpan>ver. G<ItalicSpan>r</ItalicSpan>ow. F<ItalicSpan>i</ItalicSpan>nally, all in o<ItalicSpan>n</ItalicSpan>e place.
                            </h1>
                            <p
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "1.0625rem",
                                    fontWeight: 400,
                                    color: "rgba(0,0,0,0.55)",
                                    lineHeight: 1.6,
                                    maxWidth: "36rem",
                                }}
                            >
                                Instantly connect, collaborate, and scale your business with verified project management and e-commerce expertise — all in one seamless space.
                            </p>
                        </div>

                        {/* Form */}
                        <div>
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                style={{
                                    display: "flex",
                                    gap: "0.5rem",
                                    flexWrap: "wrap",
                                }}
                            >
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    style={{
                                        flex: 1,
                                        minWidth: "14rem",
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "0.9375rem",
                                        padding: "0.75rem 1rem",
                                        border: "1px solid rgba(0,0,0,0.15)",
                                        borderRadius: "0.5rem",
                                        outline: "none",
                                        background: "#fff",
                                        color: "#000",
                                    }}
                                />
                                <button
                                    type="submit"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        background: "#000",
                                        color: "#fff",
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "0.9375rem",
                                        fontWeight: 500,
                                        padding: "0.75rem 1.375rem",
                                        borderRadius: "0.5rem",
                                        border: "none",
                                        cursor: "pointer",
                                        whiteSpace: "nowrap",
                                        transition: "opacity 0.2s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                                >
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                        <path d="M9.76121 13.7769C9.47557 14.0743 9.01244 14.0744 8.72688 13.7769C8.4412 13.4793 8.44125 12.9959 8.72688 12.6981L12.4862 8.7794L1.73146 8.7794C1.3275 8.77938 0.999999 8.43809 0.999999 8.01709C1.00008 7.59617 1.32756 7.25481 1.73146 7.25479L12.5197 7.25479L8.72688 3.30117C8.44133 3.0035 8.44138 2.5209 8.72688 2.22322C9.01252 1.92558 9.47557 1.92561 9.76121 2.22322L14.7867 7.46068C15.0037 7.68686 15.0546 8.01957 14.9418 8.297C14.8926 8.42691 14.8108 8.53933 14.7059 8.62286L9.76121 13.7769Z" fill="white" />
                                    </svg>
                                    Get in Touch
                                </button>
                            </form>

                            {/* Social proof */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginTop: "1rem",
                                }}
                            >
                                <img
                                    src="/isomeet/690126cccb69ed9dab42341b_confirm_users_image.avif"
                                    alt="Clients"
                                    width={96}
                                    height={60}
                                    style={{ borderRadius: "0.375rem" }}
                                />
                                <div
                                    style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontSize: "0.875rem",
                                        color: "#000",
                                        fontWeight: 500,
                                    }}
                                >
                                    50+ projects{" "}
                                    <span style={{ color: "rgba(0,0,0,0.4)", fontWeight: 400 }}>
                                        delivered across the UAE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN — Dual Slider */}
                    <div
                        style={{
                            position: "relative",
                            display: "grid",
                            gridTemplateColumns: "1fr 0.55fr",
                            gap: "0.75rem",
                            height: "min(600px, 70vh)",
                        }}
                    >
                        {/* Main slider (left of right col) */}
                        <div
                            style={{
                                position: "relative",
                                borderRadius: "1.25rem",
                                overflow: "hidden",
                                background: "#f5f5f5",
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                if (intervalRef.current) clearInterval(intervalRef.current);
                                const next = (currentSlide.current + 1) % heroSlides.length;
                                goTo(next);
                                intervalRef.current = setInterval(() => {
                                    const n = (currentSlide.current + 1) % heroSlides.length;
                                    goTo(n);
                                }, 2500);
                            }}
                        >
                            {heroSlides.map((slide, i) => (
                                <img
                                    key={i}
                                    ref={(el) => { if (el) mainImgsRef.current[i] = el; }}
                                    src={slide.main}
                                    alt={`Slide ${i + 1}`}
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        opacity: 0,
                                        zIndex: 0,
                                        transition: "opacity 0.6s ease",
                                    }}
                                />
                            ))}

                            {/* Pagination dots */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "1rem",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    display: "flex",
                                    gap: "0.375rem",
                                    zIndex: 10,
                                }}
                            >
                                {heroSlides.map((_, i) => (
                                    <div
                                        key={i}
                                        ref={(el) => { if (el) dotsRef.current[i] = el; }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            if (intervalRef.current) clearInterval(intervalRef.current);
                                            goTo(i);
                                            intervalRef.current = setInterval(() => {
                                                const n = (currentSlide.current + 1) % heroSlides.length;
                                                goTo(n);
                                            }, 2500);
                                        }}
                                        style={{
                                            width: "0.5rem",
                                            height: "0.5rem",
                                            borderRadius: "9999px",
                                            background: "rgba(0,0,0,0.1)",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Secondary slider (right of right col) */}
                        <div
                            style={{
                                position: "relative",
                                borderRadius: "1.25rem",
                                overflow: "hidden",
                                background: "#f0f0f0",
                            }}
                        >
                            {heroSlides.map((slide, i) => (
                                <img
                                    key={i}
                                    ref={(el) => { if (el) secImgsRef.current[i] = el; }}
                                    src={slide.secondary}
                                    alt=""
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        opacity: 0,
                                        zIndex: 0,
                                        transition: "opacity 0.5s ease",
                                    }}
                                />
                            ))}
                        </div>

                        {/* Background gradient */}
                        <img
                            src="/isomeet/6901e53513dcf1ea037d2e38_bg-gradient.avif"
                            alt=""
                            style={{
                                position: "absolute",
                                bottom: "-2rem",
                                right: "-2rem",
                                width: "60%",
                                pointerEvents: "none",
                                zIndex: 0,
                                opacity: 0.6,
                            }}
                        />
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
