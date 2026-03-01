"use client";

import { useEffect } from "react";

/**
 * Null-rendering client component that activates scroll-reveal
 * on all elements with the `.fade-in-up` class.
 * Drop into any page (including server components) to enable animations.
 */
export default function PageAnimations() {
    useEffect(() => {
        const elements = document.querySelectorAll(".fade-in-up");
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return null;
}
