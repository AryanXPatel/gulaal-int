"use client";
import { motion } from "motion/react";
import { TestimonialsColumn } from "./ui/TestimonialsColumn";

const testimonials = [
    // Column 1
    {
        text: "Gulaal International transformed our e-commerce presence completely. Within 8 months, our online revenue grew by 340%. They don't just execute — they think like owners.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Sarah Al-Mansoori",
        role: "CEO, Bloom Fashion · Dubai",
    },
    {
        text: "We had a complex ERP implementation that was going nowhere. Gulaal's PM team stepped in, restructured the entire project, and delivered on time. Exceptional professionalism.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Khalid Al-Rashidi",
        role: "COO, TechBridge Solutions · Abu Dhabi",
    },
    {
        text: "From Shopify setup to Amazon UAE integration — they handled everything. Our F&B brand is now selling across 4 platforms with zero operational headaches on our end.",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        name: "Priya Nair",
        role: "Founder, Spice Route Foods · Sharjah",
    },
    // Column 2
    {
        text: "Their project management methodology is world-class. They brought structure and clarity to a chaotic product launch. We hit our go-live date for the first time in company history.",
        image: "https://randomuser.me/api/portraits/men/54.jpg",
        name: "Tariq Al-Farsi",
        role: "VP Operations, NovaTech · Dubai",
    },
    {
        text: "Gulaal set up our entire Noon and Amazon seller accounts, handled cataloguing, and ran our first campaign. Sales in month one exceeded our quarterly target.",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        name: "Meera Pillai",
        role: "E-commerce Lead, Zest Organics · Ajman",
    },
    {
        text: "I was skeptical about outsourcing project management, but Gulaal proved me wrong. Their team embedded with ours seamlessly and delivered a complex migration on schedule.",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
        name: "Faisal Al-Hamdan",
        role: "CTO, Meridian Logistics · Abu Dhabi",
    },
    // Column 3
    {
        text: "The team understood our brand instantly. They built our Shopify store, wrote the copy, set up the payment gateway — all in three weeks. Absolutely remarkable speed.",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        name: "Nadia Osman",
        role: "Founder, Saffron & Co · Dubai",
    },
    {
        text: "Gulaal's e-commerce audit revealed gaps we didn't even know existed. After implementing their recommendations, our conversion rate doubled within 60 days.",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        name: "Rajan Mehta",
        role: "Head of Digital, Gulf Retail Group · Ras Al Khaimah",
    },
    {
        text: "Professional, responsive, and genuinely invested in our success. They treated our startup like it was their own. That's rare to find in any market, let alone the UAE.",
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        name: "Layla Hassan",
        role: "Co-founder, Luma Skincare · Sharjah",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
    return (
        <section
            style={{
                background: "#fff",
                paddingTop: "8.25rem",
                paddingBottom: "8.25rem",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "83rem",
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: "3.5rem",
                    paddingRight: "3.5rem",
                    position: "relative",
                    zIndex: 10,
                }}
            >
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "34rem",
                        marginLeft: "auto",
                        marginRight: "auto",
                        textAlign: "center",
                        marginBottom: "4rem",
                    }}
                >
                    {/* Pill label */}
                    <div
                        style={{
                            display: "inline-flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                border: "1px solid rgba(0,0,0,0.1)",
                                borderRadius: "0.5rem",
                                padding: "0.25rem 1rem",
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                fontFamily: "Inter, sans-serif",
                                color: "rgba(0,0,0,0.6)",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Client Stories
                        </div>
                    </div>

                    {/* Heading */}
                    <h2
                        style={{
                            margin: "1.25rem 0 0",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 400,
                            lineHeight: 1.12,
                            letterSpacing: "-0.02em",
                            fontFamily: "Inter, sans-serif",
                            color: "#000",
                        }}
                    >
                        Don&apos;t take our{" "}
                        <span
                            style={{
                                fontFamily: "Cormorant Garamond, Georgia, serif",
                                fontStyle: "italic",
                                fontWeight: 400,
                            }}
                        >
                            word
                        </span>{" "}
                        for it.
                    </h2>

                    {/* Subheader */}
                    <p
                        style={{
                            margin: "1.25rem 0 0",
                            fontSize: "1.125rem",
                            fontWeight: 400,
                            lineHeight: 1.5,
                            color: "rgba(0,0,0,0.4)",
                            letterSpacing: "-0.02em",
                            fontFamily: "Inter, sans-serif",
                        }}
                    >
                        Hear from the UAE businesses that trusted us with their most important initiatives.
                    </p>
                </motion.div>

                {/* 3-column scrolling testimonials */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "1.5rem",
                        maxHeight: "740px",
                        overflow: "hidden",
                        maskImage:
                            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
                    }}
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn
                        testimonials={secondColumn}
                        duration={19}
                        className="hidden-mobile-md"
                    />
                    <TestimonialsColumn
                        testimonials={thirdColumn}
                        duration={17}
                        className="hidden-mobile-lg"
                    />
                </div>
            </div>

            <style>{`
        @media (max-width: 767px) {
          .hidden-mobile-md, .hidden-mobile-lg { display: none !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .hidden-mobile-lg { display: none !important; }
        }
      `}</style>
        </section>
    );
}
