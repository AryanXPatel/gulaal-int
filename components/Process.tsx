"use client";

import { useEffect, useRef } from "react";
import { MagnifyingGlass, Compass, Lightning, Rocket } from "@phosphor-icons/react";

const steps = [
    {
        number: "01",
        icon: MagnifyingGlass,
        title: "Discover",
        description:
            "We start by deeply understanding your business, goals, challenges, and market context. No assumptions — just listening.",
    },
    {
        number: "02",
        icon: Compass,
        title: "Plan",
        description:
            "We craft a tailored strategy and roadmap with clear milestones, resource allocation, and measurable outcomes.",
    },
    {
        number: "03",
        icon: Lightning,
        title: "Execute",
        description:
            "Our team delivers with precision and speed — keeping you informed at every step with transparent reporting.",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Scale",
        description:
            "We optimize, iterate, and grow your results over time. The relationship doesn't end at delivery — it evolves.",
    },
];

export default function Process() {
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
        <section
            id="process"
            className="section-padding"
            style={{ background: "var(--color-surface)" }}
            ref={ref}
        >
            <div className="container-gi">
                {/* Header */}
                <div className="reveal mb-14 max-w-2xl">
                    <p
                        className="text-xs font-medium uppercase tracking-widest mb-4"
                        style={{ color: "var(--color-accent)" }}
                    >
                        How We Work
                    </p>
                    <h2
                        className="text-display mb-4"
                        style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)" }}
                    >
                        A process built for{" "}
                        <span className="text-display-italic">real results.</span>
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
                        Four stages. Zero guesswork. Every engagement follows a proven
                        framework designed to deliver outcomes, not just outputs.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map(({ number, icon: Icon, title, description }, i) => (
                        <div
                            key={title}
                            className={`reveal reveal-delay-${i + 1} relative flex flex-col gap-5 p-7 rounded-2xl`}
                            style={{
                                background: "var(--color-card)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            {/* Connector line (desktop) */}
                            {i < steps.length - 1 && (
                                <div
                                    className="hidden lg:block absolute top-10 -right-3 w-6 h-px z-10"
                                    style={{ background: "var(--color-accent)", opacity: 0.4 }}
                                />
                            )}

                            {/* Number */}
                            <span
                                className="text-display"
                                style={{
                                    fontSize: "3rem",
                                    color: "var(--color-border)",
                                    lineHeight: 1,
                                }}
                            >
                                {number}
                            </span>

                            {/* Icon */}
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center"
                                style={{ background: "var(--color-accent-light)" }}
                            >
                                <Icon size={18} weight="duotone" style={{ color: "var(--color-accent)" }} />
                            </div>

                            {/* Content */}
                            <div>
                                <h3
                                    className="text-display mb-2"
                                    style={{ fontSize: "1.3rem" }}
                                >
                                    {title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
