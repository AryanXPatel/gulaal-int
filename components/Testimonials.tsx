"use client";

import { useEffect, useRef } from "react";
import { Star, Quotes } from "@phosphor-icons/react";

const testimonials = [
    {
        name: "Sarah Al-Mansoori",
        role: "CEO, Bloom Fashion",
        location: "Dubai, UAE",
        quote:
            "Gulaal International transformed our e-commerce presence completely. Within 8 months, our online revenue grew by 340%. They don't just execute — they think like owners.",
        rating: 5,
        initials: "SM",
    },
    {
        name: "Khalid Al-Rashidi",
        role: "COO, TechBridge Solutions",
        location: "Abu Dhabi, UAE",
        quote:
            "We had a complex ERP implementation that was going nowhere. Gulaal's PM team stepped in, restructured the entire project, and delivered on time. Exceptional professionalism.",
        rating: 5,
        initials: "KR",
    },
    {
        name: "Priya Nair",
        role: "Founder, Spice Route Foods",
        location: "Sharjah, UAE",
        quote:
            "From Shopify setup to Amazon UAE integration — they handled everything. Our F&B brand is now selling across 4 platforms with zero operational headaches on our end.",
        rating: 5,
        initials: "PN",
    },
];

export default function Testimonials() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add("visible");
                });
            },
            { threshold: 0.1 }
        );
        ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section-padding" ref={ref}>
            <div className="container-gi">
                {/* Header */}
                <div className="reveal mb-14 max-w-2xl">
                    <p
                        className="text-xs font-medium uppercase tracking-widest mb-4"
                        style={{ color: "var(--color-accent)" }}
                    >
                        Client Stories
                    </p>
                    <h2
                        className="text-display mb-4"
                        style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
                    >
                        Don&apos;t take our word{" "}
                        <span className="text-display-italic">for it.</span>
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
                        Hear from the UAE businesses that trusted us with their most
                        important initiatives.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map(({ name, role, location, quote, rating, initials }, i) => (
                        <div
                            key={name}
                            className={`reveal reveal-delay-${i + 1} card-base card-hover rounded-2xl p-7 flex flex-col gap-6`}
                        >
                            {/* Quote icon */}
                            <Quotes
                                size={28}
                                weight="fill"
                                style={{ color: "var(--color-accent)", opacity: 0.4 }}
                            />

                            {/* Stars */}
                            <div className="flex gap-1">
                                {Array.from({ length: rating }).map((_, j) => (
                                    <Star
                                        key={j}
                                        size={14}
                                        weight="fill"
                                        style={{ color: "var(--color-accent)" }}
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p
                                className="text-sm leading-relaxed flex-1"
                                style={{ color: "var(--color-foreground)" }}
                            >
                                &ldquo;{quote}&rdquo;
                            </p>

                            {/* Author */}
                            <div
                                className="flex items-center gap-3 pt-4 border-t"
                                style={{ borderColor: "var(--color-border)" }}
                            >
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                                    style={{
                                        background: "var(--color-foreground)",
                                        color: "var(--color-background)",
                                        fontFamily: "var(--font-display)",
                                    }}
                                >
                                    {initials}
                                </div>
                                <div>
                                    <p
                                        className="text-sm font-medium"
                                        style={{ color: "var(--color-foreground)" }}
                                    >
                                        {name}
                                    </p>
                                    <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                                        {role} · {location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
