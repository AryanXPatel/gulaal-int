"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

// Main slider — local Gulaal assets (square images, match 625×611 slot perfectly)
const mainSlides = [
    "/gulaal/gulaal_boardroom_team_1771393356431.png",
    "/gulaal/gulaal_project_site_dubai_1771393234972.png",
    "/gulaal/gulaal_ecommerce_warehouse_1771393255646.png",
    "/gulaal/gulaal_construction_site_1771392960399.png",
    "/gulaal/gulaal_pm_office_1771392911229.png",
];

// Secondary slider — different Gulaal assets, cropped landscape via object-fit
const secondarySlides = [
    "/gulaal/gulaal_ecommerce_ops_1771393005370.png",
    "/gulaal/gulaal_boardroom_team_1771393476158.png",
    "/gulaal/gulaal_construction_site_1771393420757.png",
    "/gulaal/gulaal_pm_site_meeting_1771393042210.png",
    "/gulaal/gulaal_ecommerce_ops_1771393316385.png",
];

export default function Hero() {
    return (
        <section
            style={{
                paddingTop: "4.5rem",
                minHeight: "100vh",
                background: "#fff",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
            }}
        >
            {/* Container */}
            <div
                className="hero-container"
                style={{
                    boxSizing: "border-box",
                    width: "100%",
                    maxWidth: "83rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: "3.5rem",
                    paddingRight: "3.5rem",
                    paddingTop: "3rem",
                    paddingBottom: "3rem",
                }}
            >
                {/* 2-col grid */}
                <div
                    className="hero-grid"
                    style={{
                        display: "grid",
                        gridAutoFlow: "column",
                        gridAutoColumns: "1fr",
                        gridTemplateRows: "auto",
                        alignContent: "center",
                        placeItems: "center stretch",
                        gap: "3rem",
                    }}
                >
                    {/* ── LEFT COLUMN ── */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            gridAutoColumns: "1fr",
                            gridTemplateRows: "auto",
                            placeContent: "center start",
                            placeItems: "center start",
                            gap: "3rem",
                            zIndex: 10,
                            position: "relative",
                        }}
                    >
                        {/* Badge + Heading block */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gap: "2.25rem",
                                placeContent: "start",
                                placeItems: "start",
                            }}
                        >
                            {/* Badge */}
                            <div
                                style={{
                                    display: "grid",
                                    gridAutoFlow: "column",
                                    gridAutoColumns: "auto",
                                    gridTemplateRows: "auto",
                                    placeContent: "center start",
                                    placeItems: "center start",
                                    gap: "0.5rem",
                                    borderRadius: "3rem",
                                    padding: "0.625rem 1rem",
                                    backgroundColor: "#f2f2f2",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    lineHeight: 1.2,
                                    overflow: "clip",
                                }}
                            >
                                {/* UAE flag emoji as badge icon */}
                                <span style={{ fontSize: "1rem", lineHeight: 1 }}>🇦🇪</span>
                                <div>UAE-Based · Est. 2020</div>
                            </div>

                            {/* H1 + subheader */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr",
                                    gap: "1.25rem",
                                    placeContent: "start",
                                    placeItems: "center start",
                                }}
                            >
                                <h1
                                    className="hero-heading"
                                    style={{
                                        margin: 0,
                                        letterSpacing: "-0.02em",
                                        fontSize: "3.75rem",
                                        fontWeight: 400,
                                        lineHeight: 1.12,
                                        fontFamily: "Inter, sans-serif",
                                    }}
                                >
                                    Building commerce and managing projects across the UAE.
                                </h1>
                                <div style={{ maxWidth: "23rem" }}>
                                    <p
                                        style={{
                                            margin: 0,
                                            color: "rgba(0,0,0,0.4)",
                                            letterSpacing: "-0.02em",
                                            fontSize: "1.125rem",
                                            fontWeight: 400,
                                            lineHeight: 1.5,
                                            fontFamily: "Inter, sans-serif",
                                        }}
                                    >
                                        A UAE-based company specializing in online retail and project management.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA button */}
                        <div style={{
                            display: "flex",
                            gap: "0.75rem",
                            justifyContent: "start",
                            flexWrap: "wrap",
                        }}>
                            <Link
                                href="/#contact"
                                style={{
                                    font: "inherit",
                                    border: "none",
                                    borderRadius: "5rem",
                                    padding: "1rem 1.5rem",
                                    backgroundColor: "#000",
                                    color: "#fff",
                                    cursor: "pointer",
                                    alignItems: "center",
                                    lineHeight: 1,
                                    display: "inline-flex",
                                    gap: "0.5rem",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    fontFamily: "Inter, sans-serif",
                                    whiteSpace: "nowrap",
                                    transition: "opacity 0.15s",
                                    textDecoration: "none",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>

                    {/* ── RIGHT COLUMN — Sliders ── */}
                    <div
                        className="hero-slider-wrapper"
                        style={{
                            zIndex: 1,
                            justifyContent: "flex-start",
                            alignItems: "center",
                            marginLeft: "-3rem",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr",
                                gridAutoColumns: "1fr",
                                gridTemplateRows: "auto",
                                gap: 0,
                                placeContent: "start center",
                                placeItems: "start center",
                                width: "100%",
                                maxWidth: "67rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                position: "relative",
                                zIndex: 10,
                            }}
                        >
                            {/* Main horizontal Swiper */}
                            <div
                                className="hero-slider-main"
                                style={{
                                    overflow: "hidden",
                                    width: "47.0625rem",
                                    marginRight: "-4rem",
                                    maskImage:
                                        "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(255,255,255) 8%, rgb(255,255,255) 92%, rgba(0,0,0,0) 100%)",
                                    WebkitMaskImage:
                                        "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(255,255,255) 8%, rgb(255,255,255) 92%, rgba(0,0,0,0) 100%)",
                                }}
                            >
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    loop
                                    centeredSlides
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    pagination={{ clickable: true }}
                                    style={{
                                        padding: "3rem 0",
                                        overflow: "visible",
                                        width: "100%",
                                    }}
                                >
                                    {mainSlides.map((src, i) => (
                                        <SwiperSlide
                                            key={i}
                                            style={{
                                                paddingLeft: "4rem",
                                                paddingRight: "4rem",
                                                overflow: "visible",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    borderRadius: "2rem",
                                                    overflow: "clip",
                                                    width: "100%",
                                                    height: "auto",
                                                    position: "relative",
                                                    boxShadow:
                                                        "rgba(0,0,0,0.1) 2px 7px 15px, rgba(0,0,0,0.09) 8px 27px 28px",
                                                }}
                                            >
                                                <img
                                                    src={src}
                                                    alt={`Slide ${i + 1}`}
                                                    width={625}
                                                    height={611}
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                        display: "block",
                                                        maxWidth: "none",
                                                    }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Secondary vertical creative Swiper */}
                            <div
                                className="hero-slider-secondary"
                                style={{
                                    position: "absolute",
                                    inset: "auto auto 3rem -5.8rem",
                                    overflow: "hidden",
                                    maskImage:
                                        "linear-gradient(rgba(0,0,0,0) 0%, rgb(255,255,255) 10%, rgb(255,255,255) 90%, rgba(0,0,0,0) 100%)",
                                    WebkitMaskImage:
                                        "linear-gradient(rgba(0,0,0,0) 0%, rgb(255,255,255) 10%, rgb(255,255,255) 90%, rgba(0,0,0,0) 100%)",
                                }}
                            >
                                <Swiper
                                    modules={[Autoplay, EffectCreative]}
                                    effect="creative"
                                    creativeEffect={{
                                        prev: {
                                            translate: [0, "-120%", -200],
                                            opacity: 0,
                                        },
                                        next: {
                                            translate: [0, "120%", -200],
                                            opacity: 0,
                                        },
                                    }}
                                    direction="vertical"
                                    loop
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    style={{
                                        padding: "3rem 5rem 0",
                                        overflow: "visible",
                                        width: "100%",
                                        maxWidth: "none",
                                        height: "18rem",
                                    }}
                                >
                                    {secondarySlides.map((src, i) => (
                                        <SwiperSlide
                                            key={i}
                                            style={{
                                                overflow: "hidden",
                                                alignItems: "flex-start",
                                                display: "flex",
                                                flexFlow: "column",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    borderRadius: "1rem",
                                                    overflow: "clip",
                                                    boxShadow: "rgba(13,32,47,0.04) 0px 0px 14px",
                                                    display: "flex",
                                                    flexFlow: "column",
                                                    placeItems: "start center",
                                                }}
                                            >
                                                <img
                                                    src={src}
                                                    alt={`Detail ${i + 1}`}
                                                    width={270}
                                                    height={111}
                                                    style={{
                                                        width: "16.875rem",
                                                        height: "6.9375rem",
                                                        display: "block",
                                                        objectFit: "cover",
                                                        objectPosition: "center 30%",
                                                        maxWidth: "100%",
                                                    }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile responsive */}
            <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-auto-flow: row !important;
            grid-auto-columns: 1fr !important;
          }
          .hero-container {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .hero-heading {
            font-size: 2.5rem !important;
          }
          .hero-slider-main {
            width: 100% !important;
            margin-right: 0 !important;
          }
          .hero-slider-secondary {
            display: none !important;
          }
          .hero-slider-wrapper {
            margin-left: 0 !important;
          }
        }
        @media (max-width: 600px) {
          .hero-heading {
            font-size: 2rem !important;
          }
          .hero-container {
            padding-top: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }
        }
      `}</style>
        </section>
    );
}
