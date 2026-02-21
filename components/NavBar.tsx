"use client";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/#contact" },
    ];

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: "#ffffffd9",
                backdropFilter: "blur(56px)",
                WebkitBackdropFilter: "blur(56px)",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
        >
            <div
                className="nav-container"
                style={{
                    maxWidth: "83rem",
                    margin: "0 auto",
                    padding: "0 3.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "4.5rem",
                }}
            >
                {/* Left: Logo + Divider + Nav Links */}
                <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    {/* Logo */}
                    <Link
                        href="/"
                        aria-label="Gulaal International"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#000",
                            textDecoration: "none",
                            width: "auto",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 600,
                                fontSize: "1rem",
                                letterSpacing: "-0.02em",
                                color: "#000",
                            }}
                        >
                            Gulaal International
                        </span>
                    </Link>

                    {/* Divider */}
                    <div
                        style={{
                            width: 1,
                            height: "1.5rem",
                            background: "rgba(0,0,0,0.1)",
                            flexShrink: 0,
                        }}
                    />

                    {/* Desktop Nav Links */}
                    <nav className="hidden-mobile" style={{ display: "flex", gap: "2rem" }}>
                        {links.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "1rem",
                                    fontWeight: 400,
                                    color: "rgba(0,0,0,0.4)",
                                    padding: "0.25rem 0",
                                    borderBottom: "1px solid transparent",
                                    textDecoration: "none",
                                    transition: "color 0.15s ease",
                                    lineHeight: 1.5,
                                    cursor: "pointer",
                                    display: "inline-block",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.4)")}
                            >
                                {l.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right: CTA + Hamburger */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    {/* Outline pill CTA — desktop */}
                    <Link
                        href="/#contact"
                        className="hidden-mobile"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            letterSpacing: "-0.01em",
                            color: "#000",
                            lineHeight: 1.2,
                            padding: "0.625rem 1rem",
                            borderRadius: "10rem",
                            border: "1px solid rgba(0,0,0,0.1)",
                            background: "transparent",
                            textDecoration: "none",
                            cursor: "pointer",
                            transition: "background 0.15s ease, border-color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(0,0,0,0.04)";
                            e.currentTarget.style.borderColor = "rgba(0,0,0,0.2)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)";
                        }}
                    >
                        Get in Touch
                    </Link>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="show-mobile"
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "0.5rem",
                        }}
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
                    className="nav-mobile-menu"
                    style={{
                        background: "#fffffff5",
                        backdropFilter: "blur(56px)",
                        WebkitBackdropFilter: "blur(56px)",
                        borderTop: "1px solid rgba(0,0,0,0.08)",
                        padding: "1rem 3.5rem 1.5rem",
                    }}
                >
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: "block",
                                fontFamily: "Inter, sans-serif",
                                fontSize: "1rem",
                                fontWeight: 400,
                                color: "rgba(0,0,0,0.6)",
                                padding: "0.75rem 0",
                                borderBottom: "1px solid rgba(0,0,0,0.06)",
                            }}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        onClick={() => setMenuOpen(false)}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "Inter, sans-serif",
                            fontSize: "0.9375rem",
                            fontWeight: 500,
                            color: "#000",
                            padding: "0.625rem 1.25rem",
                            borderRadius: "10rem",
                            border: "1px solid rgba(0,0,0,0.15)",
                            marginTop: "1rem",
                            textDecoration: "none",
                        }}
                    >
                        Get in Touch
                    </Link>
                </div>
            )}

            <style>{`
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .nav-container { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          .nav-mobile-menu { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </div>
    );
}
