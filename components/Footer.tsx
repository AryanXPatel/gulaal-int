"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer
            style={{
                background: "#fff",
                borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
        >
            {/* Top */}
            <div
                className="footer-top"
                style={{
                    maxWidth: "83rem",
                    margin: "0 auto",
                    padding: "3.5rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "3rem",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Logo + tagline */}
                    <div style={{ maxWidth: "22rem" }}>
                        <Link href="/" style={{ display: "flex", alignItems: "center", marginBottom: "0.875rem" }}>
                            <span style={{ fontWeight: 600, fontSize: "1rem", letterSpacing: "-0.02em" }}>
                                Gulaal International
                            </span>
                        </Link>
                        <p
                            style={{
                                fontSize: "0.875rem",
                                color: "rgba(0,0,0,0.5)",
                                lineHeight: 1.6,
                            }}
                        >
                            Online retail and project management, based in the UAE.
                        </p>
                    </div>

                    {/* Links */}
                    <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
                        <div>
                            <div
                                style={{
                                    fontSize: "0.8125rem",
                                    fontWeight: 500,
                                    color: "rgba(0,0,0,0.4)",
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase",
                                    marginBottom: "1rem",
                                }}
                            >
                                Sitemap
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "About", href: "/about" },
                                    { label: "Services", href: "/services" },
                                    { label: "Contact", href: "/#contact" },
                                ].map((l) => (
                                    <Link
                                        key={l.href}
                                        href={l.href}
                                        style={{
                                            fontSize: "0.9375rem",
                                            color: "rgba(0,0,0,0.7)",
                                            transition: "color 0.2s",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.7)")}
                                    >
                                        {l.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div
                                style={{
                                    fontSize: "0.8125rem",
                                    fontWeight: 500,
                                    color: "rgba(0,0,0,0.4)",
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase",
                                    marginBottom: "1rem",
                                }}
                            >
                                Email
                            </div>
                            <a
                                href="mailto:contact@gulaal-international.ae"
                                style={{
                                    fontSize: "0.9375rem",
                                    color: "rgba(0,0,0,0.7)",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.7)")}
                            >
                                contact@gulaal-international.ae
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div
                className="footer-bottom"
                style={{
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                    maxWidth: "83rem",
                    margin: "0 auto",
                    padding: "1.5rem 3.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                }}
            >
                <div
                    style={{
                        fontSize: "0.875rem",
                        color: "rgba(0,0,0,0.4)",
                    }}
                >
                    &copy; 2026 Gulaal International.
                </div>

                {/* Social */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.4)" }}>
                        Follow us:
                    </span>
                    <a
                        href="https://www.instagram.com/gulaalinternational"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "9999px",
                            border: "1px solid rgba(0,0,0,0.12)",
                            color: "rgba(0,0,0,0.6)",
                            transition: "color 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "#000";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.4)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.color = "rgba(0,0,0,0.6)";
                            (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)";
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7.00391 4.66992C8.29244 4.66992 9.33712 5.71438 9.33724 7.00244C9.33724 8.2906 8.29252 9.33594 7.00391 9.33594C5.7153 9.33594 4.67058 8.2906 4.67058 7.00244C4.6707 5.71438 5.71537 4.66992 7.00391 4.66992Z" fill="currentColor" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.00391 0C8.90536 0 9.14358 0.00840019 9.89322 0.0439545C10.6373 0.0767868 11.1465 0.196932 11.5924 0.369218C12.0519 0.546977 12.443 0.787761 12.8314 1.17603C13.2226 1.56435 13.4602 1.95554 13.6326 2.42043C13.805 2.86349 13.9261 3.37512 13.959 4.11903C13.9918 4.8655 14 5.10379 14 7.0044C14 8.90501 13.9918 9.14315 13.959 9.88977C13.9261 10.6336 13.805 11.1426 13.6326 11.5884C13.4548 12.0476 13.2139 12.4387 12.8255 12.8269C12.4371 13.2152 12.0461 13.456 11.5865 13.6337C11.1433 13.806 10.6315 13.9262 9.88735 13.959C9.1406 13.9918 8.90227 14 7.00098 14C5.0997 14 4.86148 13.9918 4.1146 13.959C3.37055 13.9261 2.86132 13.806 2.41541 13.6337C1.95593 13.456 1.56484 13.2152 1.17644 12.8269C0.785233 12.4386 0.54698 12.0476 0.366415 11.5854C0.194054 11.1424 0.0738694 10.6307 0.0410385 9.88683C0.00820773 9.14019 0 8.90225 0 7.00147C1.37301e-09 5.10068 0.0082077 4.86254 0.0410385 4.11317C0.0738818 3.36937 0.194069 2.86033 0.366415 2.41457C0.546972 1.95521 0.785281 1.56431 1.17644 1.17603C1.56491 0.784959 1.95602 0.546789 2.41834 0.366288C2.86156 0.193986 3.37337 0.0738436 4.11753 0.0410242C4.86443 0.00820484 5.10246 2.97371e-09 7.00391 0ZM7.00391 3.40599C5.01772 3.40599 3.40632 5.01697 3.4062 7.00244C3.4062 8.98801 5.01764 10.5989 7.00391 10.5989C8.99017 10.5989 10.6016 8.98801 10.6016 7.00244C10.6015 5.01697 8.9901 3.40599 7.00391 3.40599ZM10.7443 2.42434C10.2819 2.42434 9.90396 2.79941 9.90396 3.26436C9.90418 3.72638 10.2793 4.1034 10.7443 4.1034C11.2063 4.10319 11.5834 3.72899 11.5836 3.26436C11.5836 2.80228 11.2065 2.42455 10.7443 2.42434Z" fill="currentColor" />
                        </svg>
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 767px) {
                    .footer-top { padding: 2rem 1.25rem !important; }
                    .footer-bottom { padding: 1.25rem !important; }
                }
            `}</style>
        </footer>
    );
}
