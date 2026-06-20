import { Link } from "react-router-dom";
import RevealText from "@/shared/effects/RevealText";

// Home 3 Section 11 - Insights & Inspiration / Latest journal

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const POSTS = [
    {
        category: "AI Advertising",
        title: "How AI Video Ads Help Brands Capture Attention Faster",
        author: "AdsAI Team",
        date: "June 12, 2026",
        img: "/assets/imgs/v/v-50.webm",
    },
    {
        category: "Strategy",
        title: "Why Every High-Performing Ad Film Starts with a Clear Brand Message",
        author: "Creative Team",
        date: "June 08, 2026",
        img: "/assets/imgs/v/v-51.webm",
    },
    {
        category: "Creative",
        title: "The Role of Storytelling in Building Stronger Brand Recall",
        author: "Strategy Team",
        date: "June 03, 2026",
        img: "/assets/imgs/v/v-52.webm",
    },
    {
        category: "Production",
        title: "From Script to Screen: How AI Speeds Up Video Production",
        author: "Production Team",
        date: "May 28, 2026",
        img: "/assets/imgs/v/v-53.webm",
    },
    {
        category: "Social Media Ads",
        title: "Creating Short-Form Video Ads That Drive Clicks, Leads, and Sales",
        author: "AdsAI Team",
        date: "May 20, 2026",
        img: "/assets/imgs/v/v-54.webm",
    },
    {
        category: "Brand Growth",
        title: "How Campaign-Ready Video Content Helps Brands Grow Faster Online",
        author: "Creative Team",
        date: "May 15, 2026",
        img: "/assets/imgs/v/v-55.webm",
    },
];

export default function Section11() {
    return (
        <div className="home-3-section-11 overflow-hidden pb-100">
            <div className="container section-fix pt-100">
                <div className="row g-4 section-title-pin">
                    <div className="col-xxl-6 col-lg-5 h-100">
                        <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">AI Video Insights</span>
                                    <span className="text-2">AI Video Insights</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                            <h3 className="reveal-text fz-ds-1 mb-30 fw-500 lh-1">
                               <RevealText>Explore the Latest in AI Advertising</RevealText>
                            </h3>
                            <Link className="at-btn" to="/archive-2">
                                <span className="text-1">VIEW INSIGHTS</span>
                                <span className="text-2">VIEW INSIGHTS</span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </Link>
                    </div>

                    <div className="col-xxl-6 col-lg-7 p-relative">
                        <div className="scroll-section vertical-section section">
                            <div className="wrapper">
                                <div role="list" className="list">
                                    {POSTS.map((post, i) => (
                                        <div key={i} className="item">
                                            <article
                                                className="blog-card-2 p-4 rounded-4"
                                                style={{
                                                    backgroundColor: "#04151e",
                                                    border: "1px solid rgba(255,255,255,0.15)",
                                                }}
                                            >
                                                <div className="blog-card-2__left flex-grow-1">
                                                    <span className="blog-card-2__category text-white">{post.category}</span>
                                                    <h6 className="blog-card-2__title">
                                                        <Link to="/blog-details" className="blog-card-2__title-link text-white">
                                                            {post.title}
                                                        </Link>
                                                    </h6>
                                                    <p className="blog-card-2__meta text-white">
                                                        <span className="blog-card-2__meta-text">By </span>
                                                        <Link to="/team-details" className="blog-card-2__author text-white">
                                                            {post.author}
                                                        </Link>
                                                        <span className="blog-card-2__meta-text"> – {post.date}</span>
                                                    </p>
                                                </div>
                                                <div className="blog-card-2__thumb hover-effect-1">
                                                    <Link to="/blog-details" className="blog-card-2__img-link">
                                                        <video
                                                            width={400}
                                                            height={280}
                                                            className="blog-card-2__img"
                                                            autoPlay
                                                            muted
                                                            loop
                                                            playsInline
                                                            preload="metadata"
                                                            style={{
                                                                width: "100%",
                                                                height: "280px",
                                                                objectFit: "cover",
                                                                display: "block",
                                                            }}
                                                        >
                                                            <source src={post.img} type="video/webm" />
                                                        </video>
                                                    </Link>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
