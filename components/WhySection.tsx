"use client";
import { useEffect, useRef } from "react";

const benefits = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.6002 3.22131C17.5639 3.22131 20.7773 6.43455 20.778 10.3981C20.7808 12.8908 19.4903 15.2066 17.3688 16.5153L17.3678 16.5162L10.6276 20.6637C10.3885 20.8106 10.0884 20.8172 9.84338 20.6803C9.59836 20.5434 9.44696 20.2842 9.4469 20.0035V16.3229C5.98001 16.1511 3.22145 13.2865 3.22131 9.77698C3.22131 6.15675 6.15675 3.22131 9.77698 3.22131H13.6002ZM4.77209 9.77698C4.77224 12.541 7.01288 14.7819 9.77698 14.7819H10.2213C10.6492 14.7819 10.9965 15.1285 10.9967 15.5563V18.6168L16.5563 15.1959C18.2191 14.1697 19.2304 12.3541 19.2281 10.4V10.399C19.228 7.29112 16.7082 4.77209 13.6002 4.77209H9.77698C7.01279 4.77209 4.77209 7.01279 4.77209 9.77698Z" fill="black" />
            </svg>
        ),
        title: "Streamlined Operations",
        desc: "Clear processes and structured workflows that keep everything moving forward without the usual friction.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.96411 12.4698C10.257 12.1771 10.7318 12.1772 11.0247 12.4698C11.3175 12.7627 11.3175 13.2375 11.0247 13.5304L10.304 14.2511H13.5061C14.1967 14.2509 14.7561 13.6908 14.7561 13.0001C14.756 12.3096 14.1967 11.7494 13.5061 11.7491H12.5051C12.091 11.7491 11.7551 11.4133 11.7551 10.9991C11.7553 10.5852 12.0911 10.2492 12.5051 10.2491H13.5061C15.0251 10.2494 16.256 11.4811 16.2561 13.0001C16.2561 14.5192 15.0252 15.7509 13.5061 15.7511H10.304L11.0247 16.4718C11.3176 16.7647 11.3176 17.2395 11.0247 17.5323C10.7318 17.8252 10.257 17.8252 9.96411 17.5323L7.96313 15.5314C7.67043 15.2385 7.67035 14.7637 7.96313 14.4708L9.96411 12.4698ZM15.7522 5.99719V5.24719H8.24829V5.99719C8.24829 6.41138 7.91247 6.74715 7.49829 6.74719C7.08408 6.74719 6.74829 6.41141 6.74829 5.99719V5.24719H5.99634C4.7537 5.24719 3.74634 6.25455 3.74634 7.49719V18.004L3.75806 18.2335C3.87317 19.3682 4.83128 20.254 5.99634 20.254H18.0042C19.2465 20.2539 20.254 19.2464 20.2542 18.004V7.49719C20.2542 6.25466 19.2466 5.24736 18.0042 5.24719H17.2522V5.99719C17.2522 6.41133 16.9163 6.74707 16.5022 6.74719C16.088 6.74719 15.7522 6.41141 15.7522 5.99719ZM21.7542 18.004C21.754 20.0748 20.075 21.7539 18.0042 21.754H5.99634C3.9899 21.754 2.35152 20.1779 2.25122 18.1964L2.24634 18.004V7.49719C2.24634 5.42613 3.92527 3.74719 5.99634 3.74719H6.74829V2.99622C6.74829 2.582 7.08408 2.24622 7.49829 2.24622C7.91247 2.24626 8.24829 2.58203 8.24829 2.99622V3.74719H15.7522V2.99622C15.7522 2.582 16.088 2.24622 16.5022 2.24622C16.9163 2.24634 17.2522 2.58208 17.2522 2.99622V3.74719H18.0042C20.0751 3.74736 21.7542 5.42623 21.7542 7.49719V18.004Z" fill="black" />
            </svg>
        ),
        title: "Clear Communication",
        desc: "Transparent updates and straightforward reporting, so you always know where things stand.",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.22461 11.2417V6.91163C3.22479 6.01265 3.90606 5.22122 4.83887 5.14796C7.12851 4.96732 9.21269 4.0558 10.8584 2.64503L10.9844 2.5464C11.5884 2.11813 12.4118 2.11884 13.0156 2.5464L13.1406 2.64406L13.1416 2.64503C14.7871 4.05661 16.8712 4.9673 19.1611 5.14796H19.1602C20.0938 5.2209 20.7752 6.01289 20.7754 6.91261V11.2427C20.7754 15.9691 17.3764 20.3573 12.7344 21.6724C12.2573 21.8075 11.7437 21.8075 11.2666 21.6724C6.62338 20.3583 3.22461 15.9678 3.22461 11.2417ZM14.7705 9.79445C15.0732 9.49179 15.5645 9.49179 15.8672 9.79445C16.1695 10.0971 16.1697 10.5876 15.8672 10.8901L11.7188 15.0376C11.4161 15.3403 10.9257 15.3403 10.623 15.0376L8.13379 12.5493C7.83113 12.2467 7.83113 11.7553 8.13379 11.4526C8.43645 11.15 8.92784 11.15 9.23047 11.4526L11.1709 13.3931L14.7705 9.79445ZM4.77539 11.2417C4.77539 15.2494 7.6889 19.0491 11.6895 20.1812C11.8902 20.238 12.1107 20.238 12.3115 20.1812C16.3114 19.0481 19.2246 15.2502 19.2246 11.2427V6.91261C19.2244 6.7849 19.13 6.70113 19.04 6.69386H19.0391C16.4111 6.48653 14.0193 5.43916 12.1328 3.82081C12.0606 3.7594 11.9382 3.76086 11.8682 3.82081L11.8672 3.82179C9.981 5.43871 7.589 6.48652 4.96094 6.69386H4.95996C4.86948 6.70116 4.77557 6.78541 4.77539 6.91163V11.2417Z" fill="black" />
            </svg>
        ),
        title: "Local Expertise",
        desc: "Deep understanding of the UAE market, regulations, and business landscape. Built from experience on the ground.",
    },
];

export default function WhySection() {
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        (entry.target as HTMLElement).style.opacity = "1";
                        (entry.target as HTMLElement).style.transform = "translateY(0)";
                    }
                });
            },
            { threshold: 0.1 }
        );
        cardsRef.current.forEach((el) => { if (el) observer.observe(el); });
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="why"
            style={{
                paddingBlock: "8.25rem",
                background: "#fff",
            }}
        >
            <div className="section-container" style={{ maxWidth: "83rem", margin: "0 auto", padding: "0 3.5rem" }}>
                {/* ── Header: full-width ── */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.75rem",
                        marginBottom: "5rem",
                    }}
                >
                    <h2
                        className="section-heading"
                        style={{
                            margin: 0,
                            fontWeight: 400,
                            fontSize: "3.75rem",
                            lineHeight: 1.12,
                            letterSpacing: "-0.02em",
                            color: "#000",
                        }}
                    >
                        Why businesses choose us?
                    </h2>
                </div>

                {/* ── 3-col benefit cards ── */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "1.5rem",
                    }}
                    className="why-cards-grid"
                >
                    {benefits.map((b, i) => (
                        <div
                            key={i}
                            ref={(el) => { if (el) cardsRef.current[i] = el; }}
                            style={{
                                background: "#fff",
                                border: "1px solid rgba(0,0,0,0.08)",
                                borderRadius: "1.25rem",
                                padding: "2rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.25rem",
                                opacity: 0,
                                transform: "translateY(5rem)",
                                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                            }}
                        >
                            <div
                                style={{
                                    width: "2.75rem",
                                    height: "2.75rem",
                                    background: "#f5f5f5",
                                    borderRadius: "0.75rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {b.icon}
                            </div>
                            <div>
                                <h3
                                    style={{
                                                    fontWeight: 500,
                                        fontSize: "1.0625rem",
                                        letterSpacing: "-0.01em",
                                        color: "#000",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {b.title}
                                </h3>
                                <p
                                    style={{
                                                    fontSize: "0.9375rem",
                                        fontWeight: 400,
                                        color: "rgba(0,0,0,0.55)",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {b.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        @media (max-width: 767px) {
          .why-cards-grid { grid-template-columns: 1fr !important; }
          .section-container { padding-left: 1.25rem !important; padding-right: 1.25rem !important; }
          .section-heading { font-size: 2.25rem !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .why-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
        </section>
    );
}
