import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// About 1 Section 3 - Awards

const ARROW_CIRCLE_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
            d="M5.00013 13.9999L5 5.00003L7 5L7.0001 11.9999L17.1719 12L13.2222 8.05027L14.6364 6.63606L21.0003 13L14.6364 19.364L13.2222 17.9497L17.1719 14L5.00013 13.9999Z"
            fill="currentColor"
        />
    </svg>
);

const CARD_AWARD_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path
            d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z"
            fill="currentColor"
        />
    </svg>
);

const DIAMOND_ICON = (
    <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.5 0H0L41.5 41.5H0L41.5 83H83L41.5 41.5H83L41.5 0Z"
            fill="currentColor"
        />
    </svg>
);

const AWARDS = [
    {
        date: "[ Creative Recognition ]",
        imgAward: "/assets/imgs/images/img-53.jpg",
        img: "/assets/imgs/images/img-53.jpg",
        title: "AI-Powered Advertising Film Production",
        webExcellence: "Creative Video Excellence",
        url: "adsai.ai",
        href: "https://adsai.ai",
    },
    {
        date: "[ Brand Growth ]",
        imgAward: "/assets/imgs/images/img-57.jpg",
        img: "/assets/imgs/images/img-57.jpg",
        title: "Performance-Focused Video Campaigns",
        webExcellence: "Digital Advertising Impact",
        url: "adsai.ai",
        href: "https://adsai.ai",
    },
    {
        date: "[ Innovation ]",
        imgAward: "/assets/imgs/images/img-62.jpg",
        img: "/assets/imgs/images/img-62.jpg",
        title: "AI-Enabled Creative Production Workflow",
        webExcellence: "Creative Technology Innovation",
        url: "adsai.ai",
        href: "https://adsai.ai",
    },
    {
        date: "[ Storytelling ]",
        imgAward: "/assets/imgs/images/img-67.jpg",
        img: "/assets/imgs/images/img-67.jpg",
        title: "Cinematic Brand Storytelling",
        webExcellence: "Advertising & Brand Communication",
        url: "adsai.ai",
        href: "https://adsai.ai",
    },
    {
        date: "[ Client Success ]",
        imgAward: "/assets/imgs/images/img-71.jpg",
        img: "/assets/imgs/images/img-71.jpg",
        title: "Campaign-Ready Content Delivery",
        webExcellence: "Social Media & Performance Ads",
        url: "adsai.ai",
        href: "https://adsai.ai",
    },
];

export default function Section3() {
    return (
        <div className="bg-neutral-50">
            <section className="sec-3-about bg-neutral-50 pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-3 col-md-6">
                            <h1 className="fw-500 fz-ds-1 mb-0">Highlights.</h1>
                        </div>
                        <div className="col-lg-3 col-md-4 ms-auto mb-lg-4 d-flex justify-content-lg-end">
                            <div
                                className="at-btn-group at-btn-group-transparent at_fade_anim"
                                data-delay=".5"
                                data-fade-from="bottom"
                                data-ease="bounce"
                            >
                                <Link className="at-btn-circle" to="/portfolio">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                                <Link className="at-btn z-index-1" to="/portfolio">
                                    View Our Work
                                </Link>
                                <Link className="at-btn-circle" to="/portfolio">
                                    {ARROW_CIRCLE_SVG}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-120">
                        <div className="col-12">
                            {AWARDS.map((award, i) => (
                                <div
                                    key={i}
                                    className="card-award scroll-move-up"
                                    data-img-award={award.imgAward}
                                >
                                    <a
                                        href={award.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card-award-link"
                                    >
                                        <span className="card-award-date">{award.date}</span>
                                        <div className="card-award-content">
                                            <div className="card-award-image">
                                                <img
                                                    src={award.img}
                                                    alt="AdsAI creative highlight"
                                                    width={120}
                                                    height={90}
                                                    className="w-100 h-100"
                                                    style={{ objectFit: "contain" }}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <h6 className="card-award-title mb-0">{award.title}</h6>
                                        </div>
                                        <h6 className="card-award-web-excellence mb-0">{award.webExcellence}</h6>
                                        <div className="card-award-meta">
                                            <span className="card-award-url fz-font-lg">{award.url}</span>
                                        </div>
                                        <div className="card-award-icon ms-auto">{CARD_AWARD_ICON}</div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7 col-12 ms-auto pt-80">
                            <div className="award-description d-flex gap-5">
                                <div className="icon">{DIAMOND_ICON}</div>
                                <div className="content">
                                    <h5 className="revert-text mb-0 reveal-text">
                                        <RevealText>
                                            AdsAI combines creative strategy, AI-powered production, cinematic storytelling,
                                            and performance-focused delivery to help brands create video content that attracts,
                                            engages, and converts.
                                        </RevealText>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}