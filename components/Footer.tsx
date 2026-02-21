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
                        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.875rem" }}>
                            <svg width="28" height="28" viewBox="0 0 56 56" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M28.1206 12C32.3863 12.0001 36.4776 13.6946 39.4939 16.7109C42.3605 19.5777 44.0321 23.4154 44.191 27.451H56.2435V28.7174H44.1887C44.0298 32.753 42.3577 36.5907 39.491 39.4575C36.4746 42.4737 32.3834 44.1683 28.1177 44.1684C23.852 44.1683 19.7608 42.4737 16.7444 39.4575C13.8777 36.5907 12.2056 32.753 12.0468 28.7174H0V27.451H12.0496C12.2085 23.4153 13.8805 19.5777 16.7473 16.7109C19.7637 13.6946 23.8549 12 28.1206 12ZM15.0357 28.7174C15.1891 32.2642 16.627 35.6336 19.0801 38.1548C21.6786 40.8255 25.2032 42.3257 28.878 42.3257C32.5528 42.3256 36.0776 40.8255 38.676 38.1548C41.1289 35.6336 42.5664 32.2642 42.7198 28.7174H15.0357ZM27.3603 13.8427C23.6856 13.8428 20.1613 15.343 17.5629 18.0136C15.1099 20.5347 13.6714 23.9042 13.5179 27.451H41.202C41.0486 23.9043 39.6111 20.5347 37.1582 18.0136C34.5598 15.3429 31.035 13.8428 27.3603 13.8427Z" fill="black" />
                            </svg>
                            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "1rem", letterSpacing: "-0.02em" }}>
                                Gulaal Int
                            </span>
                        </Link>
                        <p
                            style={{
                                fontFamily: "Inter, sans-serif",
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
                                    fontFamily: "Inter, sans-serif",
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
                                            fontFamily: "Inter, sans-serif",
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
                                    fontFamily: "Inter, sans-serif",
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
                                href="mailto:hello@gulaalinternational.com"
                                style={{
                                    fontFamily: "Inter, sans-serif",
                                    fontSize: "0.9375rem",
                                    color: "rgba(0,0,0,0.7)",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.7)")}
                            >
                                hello@gulaalinternational.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div
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
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(0,0,0,0.4)",
                    }}
                >
                    <span>@2026 Gulaal International. Made with</span>
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                        <path d="M7.00073 12L1.06161 6.13549C0.587864 5.6677 0.272035 5.12384 0.114121 4.50392C-0.0399422 3.884 -0.0380164 3.26789 0.119898 2.65557C0.277812 2.03946 0.591716 1.50321 1.06161 1.04683C1.54305 0.579035 2.0919 0.269075 2.70815 0.116948C3.32826 -0.0389827 3.94643 -0.0389827 4.56269 0.116948C5.18279 0.272878 5.73356 0.582838 6.21501 1.04683L7.00073 1.79986L7.78645 1.04683C8.27175 0.582838 8.82252 0.272878 9.43878 0.116948C10.055 -0.0389827 10.6713 -0.0389827 11.2875 0.116948C11.9076 0.269075 12.4584 0.579035 12.9399 1.04683C13.4097 1.50321 13.7236 2.03946 13.8816 2.65557C14.0395 3.26789 14.0395 3.884 13.8816 4.50392C13.7275 5.12384 13.4136 5.6677 12.9399 6.13549L7.00073 12Z" fill="black" fillOpacity="0.4" />
                    </svg>
                    <span>in Dubai</span>
                </div>

                {/* Social */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.875rem", color: "rgba(0,0,0,0.4)" }}>
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
        </footer>
    );
}
