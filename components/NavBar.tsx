"use client";
import { useState, useEffect } from "react";

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: "Why Gulaal", href: "#why" },
        { label: "Who We Serve", href: "#who" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: "background 0.3s, box-shadow 0.3s",
                background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
                boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08)" : "none",
            }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "0 2.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "4.5rem",
                }}
            >
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <svg width="32" height="32" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M28.1206 12C32.3863 12.0001 36.4776 13.6946 39.4939 16.7109C42.3605 19.5777 44.0321 23.4154 44.191 27.451H56.2435V28.7174H44.1887C44.0298 32.753 42.3577 36.5907 39.491 39.4575C36.4746 42.4737 32.3834 44.1683 28.1177 44.1684C23.852 44.1683 19.7608 42.4737 16.7444 39.4575C13.8777 36.5907 12.2056 32.753 12.0468 28.7174H0V27.451H12.0496C12.2085 23.4153 13.8805 19.5777 16.7473 16.7109C19.7637 13.6946 23.8549 12 28.1206 12ZM15.0357 28.7174C15.1891 32.2642 16.627 35.6336 19.0801 38.1548C21.6786 40.8255 25.2032 42.3257 28.878 42.3257C32.5528 42.3256 36.0776 40.8255 38.676 38.1548C41.1289 35.6336 42.5664 32.2642 42.7198 28.7174H15.0357ZM27.3603 13.8427C23.6856 13.8428 20.1613 15.343 17.5629 18.0136C15.1099 20.5347 13.6714 23.9042 13.5179 27.451H41.202C41.0486 23.9043 39.6111 20.5347 37.1582 18.0136C34.5598 15.3429 31.035 13.8428 27.3603 13.8427Z" fill="currentColor" />
                        </svg>
                        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "1rem", letterSpacing: "-0.02em" }}>
                            Gulaal Int
                        </span>
                    </a>

                    {/* Divider */}
                    <div style={{ width: 1, height: "1.25rem", background: "rgba(0,0,0,0.15)" }} />

                    {/* Desktop Nav Links */}
                    <nav style={{ display: "flex", gap: "0.25rem" }} className="hidden-mobile">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "0.875rem",
                                    fontWeight: 400,
                                    color: "rgba(0,0,0,0.7)",
                                    padding: "0.4rem 0.75rem",
                                    borderRadius: "0.375rem",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.7)")}
                            >
                                {l.label}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* CTA Button */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <a
                        href="#contact"
                        className="hidden-mobile"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "#000",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            padding: "0.6rem 1.25rem",
                            borderRadius: "0.5rem",
                            transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                        <span>Get in Touch</span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                            <path d="M9.76121 13.7769C9.47557 14.0743 9.01244 14.0744 8.72688 13.7769C8.4412 13.4793 8.44125 12.9959 8.72688 12.6981L12.4862 8.7794L1.73146 8.7794C1.3275 8.77938 0.999999 8.43809 0.999999 8.01709C1.00008 7.59617 1.32756 7.25481 1.73146 7.25479L12.5197 7.25479L8.72688 3.30117C8.44133 3.0035 8.44138 2.5209 8.72688 2.22322C9.01252 1.92558 9.47557 1.92561 9.76121 2.22322L14.7867 7.46068C15.0037 7.68686 15.0546 8.01957 14.9418 8.297C14.8926 8.42691 14.8108 8.53933 14.7059 8.62286L9.76121 13.7769Z" fill="white" />
                        </svg>
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "0.5rem",
                        }}
                        className="show-mobile"
                        aria-label="Menu"
                    >
                        {menuOpen ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4 4L16 16M16 4L4 16" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M3 6h14M3 10h14M3 14h14" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    style={{
                        background: "#fff",
                        borderTop: "1px solid rgba(0,0,0,0.08)",
                        padding: "1rem 2.5rem 1.5rem",
                    }}
                >
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: "block",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "1rem",
                                fontWeight: 400,
                                color: "#000",
                                padding: "0.75rem 0",
                                borderBottom: "1px solid rgba(0,0,0,0.06)",
                            }}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "#000",
                            color: "#fff",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            padding: "0.75rem 1.25rem",
                            borderRadius: "0.5rem",
                            marginTop: "1rem",
                            width: "fit-content",
                        }}
                    >
                        Get in Touch
                    </a>
                </div>
            )}

            <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </div>
    );
}
