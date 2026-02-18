"use client";

function ItalicSpan({ children }: { children: string }) {
    return (
        <span style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
            {children}
        </span>
    );
}

const ctaImages = [
    { src: "/isomeet/690126cc4fcd080f98700019_cta-img-1.avif", pos: { top: "5%", left: "2%", width: "11rem" }, shape: "tall" },
    { src: "/isomeet/690126d2fac9aad553d6f1e2_cta-img-4.avif", pos: { top: "5%", right: "2%", width: "11rem" }, shape: "tall" },
    { src: "/isomeet/690126cc2850cf7b5970f339_cta-img-2.avif", pos: { bottom: "8%", left: "5%", width: "9rem" }, shape: "square" },
    { src: "/isomeet/690126d2694e10354d8a9e77_cta-img-5.avif", pos: { bottom: "8%", right: "5%", width: "9rem" }, shape: "square" },
    { src: "/isomeet/690126d2215127aac0893ec6_cta-img-3.avif", pos: { top: "50%", left: "0%", transform: "translateY(-50%)", width: "14rem" }, shape: "tall" },
    { src: "/isomeet/690126d2ddd66c11b3773f24_cta-img-6.avif", pos: { top: "50%", right: "0%", transform: "translateY(-50%)", width: "14rem" }, shape: "tall" },
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
                        }}
                    />
                </div>
            ))}

            {/* Center content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "0 2.5rem",
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

                <div>
                    <h2
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 500,
                            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                            lineHeight: 1.08,
                            letterSpacing: "-0.03em",
                            color: "#000",
                            marginBottom: "1rem",
                            maxWidth: "36rem",
                        }}
                    >
                        Re<ItalicSpan>a</ItalicSpan>dy to j<ItalicSpan>o</ItalicSpan>in the n<ItalicSpan>e</ItalicSpan>xt era of UA<ItalicSpan>E</ItalicSpan> busin<ItalicSpan>e</ItalicSpan>ss gr<ItalicSpan>o</ItalicSpan>wth?
                    </h2>
                    <p
                        style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: "1.0625rem",
                            color: "rgba(0,0,0,0.55)",
                            lineHeight: 1.6,
                            maxWidth: "28rem",
                            margin: "0 auto",
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
                        gap: "0.5rem",
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
                            fontSize: "0.9375rem",
                            padding: "0.75rem 1rem",
                            border: "1px solid rgba(0,0,0,0.15)",
                            borderRadius: "0.5rem",
                            outline: "none",
                            background: "#fff",
                            color: "#000",
                            width: "18rem",
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
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
        </section>
    );
}
