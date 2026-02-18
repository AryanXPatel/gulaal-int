"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
    text: string;
    image: string;
    name: string;
    role: string;
};

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className} style={{ overflow: "hidden" }}>
            <motion.div
                animate={{ translateY: "-50%" }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingBottom: "1.5rem" }}
            >
                {[...new Array(2).fill(0).map((_, index) => (
                    <React.Fragment key={index}>
                        {props.testimonials.map(({ text, image, name, role }, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: "1.75rem",
                                    borderRadius: "1.25rem",
                                    border: "1px solid rgba(0,0,0,0.08)",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
                                    maxWidth: "20rem",
                                    width: "100%",
                                    background: "#fff",
                                    fontFamily: "Inter, sans-serif",
                                }}
                            >
                                {/* Quote text */}
                                <p
                                    style={{
                                        margin: 0,
                                        fontSize: "0.9375rem",
                                        lineHeight: 1.6,
                                        color: "rgba(0,0,0,0.75)",
                                        letterSpacing: "-0.01em",
                                        fontWeight: 400,
                                    }}
                                >
                                    &ldquo;{text}&rdquo;
                                </p>

                                {/* Author */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.625rem",
                                        marginTop: "1.25rem",
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={name}
                                        width={40}
                                        height={40}
                                        style={{
                                            width: "2.5rem",
                                            height: "2.5rem",
                                            borderRadius: "9999px",
                                            objectFit: "cover",
                                            flexShrink: 0,
                                        }}
                                    />
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                                        <span
                                            style={{
                                                fontSize: "0.875rem",
                                                fontWeight: 500,
                                                letterSpacing: "-0.02em",
                                                lineHeight: 1.2,
                                                color: "#000",
                                            }}
                                        >
                                            {name}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: "0.8125rem",
                                                lineHeight: 1.2,
                                                color: "rgba(0,0,0,0.4)",
                                                letterSpacing: "-0.01em",
                                            }}
                                        >
                                            {role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))]}
            </motion.div>
        </div>
    );
};
