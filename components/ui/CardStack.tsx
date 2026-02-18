"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

// ── Types ──────────────────────────────────────────────────────────────────
type Card = {
    id: number;
    name: string;
    designation: string;
    content: React.ReactNode;
};

// ── CardStack ──────────────────────────────────────────────────────────────
let interval: ReturnType<typeof setInterval>;

export const CardStack = ({
    items,
    offset = 10,
    scaleFactor = 0.06,
}: {
    items: Card[];
    offset?: number;
    scaleFactor?: number;
}) => {
    const [cards, setCards] = useState<Card[]>(items);

    useEffect(() => {
        interval = setInterval(() => {
            setCards((prev) => {
                const next = [...prev];
                next.unshift(next.pop()!);
                return next;
            });
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "11rem",
            }}
        >
            {cards.map((card, index) => (
                <motion.div
                    key={card.id}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "11rem",
                        borderRadius: "1.25rem",
                        padding: "1.5rem",
                        background: "#fff",
                        border: "1px solid rgba(0,0,0,0.08)",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transformOrigin: "top center",
                        fontFamily: "Inter, sans-serif",
                    }}
                    animate={{
                        top: index * -offset,
                        scale: 1 - index * scaleFactor,
                        zIndex: cards.length - index,
                    }}
                >
                    <p
                        style={{
                            fontSize: "0.9375rem",
                            lineHeight: 1.6,
                            color: "rgba(0,0,0,0.7)",
                            letterSpacing: "-0.01em",
                            margin: 0,
                        }}
                    >
                        &ldquo;{card.content}&rdquo;
                    </p>
                    <div style={{ marginTop: "0.75rem" }}>
                        <p
                            style={{
                                fontSize: "0.875rem",
                                fontWeight: 500,
                                color: "#000",
                                margin: 0,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {card.name}
                        </p>
                        <p
                            style={{
                                fontSize: "0.8125rem",
                                color: "rgba(0,0,0,0.4)",
                                margin: 0,
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {card.designation}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export type { Card };
