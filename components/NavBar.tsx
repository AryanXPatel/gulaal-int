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
                            gap: "0.5rem",
                            color: "#000",
                            textDecoration: "none",
                            width: "8.125rem",
                        }}
                    >
                        <svg width="32" height="32" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M28.1206 12C32.3863 12.0001 36.4776 13.6946 39.4939 16.7109C42.3605 19.5777 44.0321 23.4154 44.191 27.451H56.2435V28.7174H44.1887C44.0298 32.753 42.3577 36.5907 39.491 39.4575C36.4746 42.4737 32.3834 44.1683 28.1177 44.1684C23.852 44.1683 19.7608 42.4737 16.7444 39.4575C13.8777 36.5907 12.2056 32.753 12.0468 28.7174H0V27.451H12.0496C12.2085 23.4153 13.8805 19.5777 16.7473 16.7109C19.7637 13.6946 23.8549 12 28.1206 12ZM15.0357 28.7174C15.1891 32.2642 16.627 35.6336 19.0801 38.1548C21.6786 40.8255 25.2032 42.3257 28.878 42.3257C32.5528 42.3256 36.0776 40.8255 38.676 38.1548C41.1289 35.6336 42.5664 32.2642 42.7198 28.7174H15.0357ZM27.3603 13.8427C23.6856 13.8428 20.1613 15.343 17.5629 18.0136C15.1099 20.5347 13.6714 23.9042 13.5179 27.451H41.202C41.0486 23.9043 39.6111 20.5347 37.1582 18.0136C34.5598 15.3429 31.035 13.8428 27.3603 13.8427Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span
                            style={{
                                fontFamily: "Inter, sans-serif",
                                fontWeight: 600,
                                fontSize: "1rem",
                                letterSpacing: "-0.02em",
                                color: "#000",
                            }}
                        >
                            Gulaal Int
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
        }
        @media (min-width: 768px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </div>
    );
}
