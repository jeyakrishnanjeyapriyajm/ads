import { useState, useMemo, useEffect, useRef } from "react";
import ArticleCard1 from "@/shared/cards/ArticleCard1";
import Sidebar from "@/shared/elements/Sidebar";

// archive-2 section 1 – The Journal with filter, blog grid (ArticleCard1), load more, sidebar
// GSAP ScrollTrigger: sticky pin for .sidebar_right when viewport >= 992px

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const INITIAL_VISIBLE = 6;
const LOAD_MORE_STEP = 6;

type CategoryFilter = "" | "films" | "voice" | "ads";

const BLOG_POSTS: Array<{
    category: CategoryFilter;
    classList: string;
    linkPost: string;
    linkAuthor: string;
    img: string;
    title: string;
    author: string;
    date: string;
}> = [
    {
        category: "films",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-70.jpg",
        title: "How AI Ad Films Help Brands Capture Attention Faster",
        author: "ADS AI",
        date: "July 3, 2026",
    },
    {
        category: "films",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-72.jpg",
        title: "Why AI Video Content Is Changing Digital Advertising",
        author: "ADS AI",
        date: "July 8, 2026",
    },
    {
        category: "ads",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-54.jpg",
        title: "Creating High-Converting Social Media Video Ads With AI",
        author: "ADS AI",
        date: "July 12, 2026",
    },
    {
        category: "voice",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-76.jpg",
        title: "How AI Voice Overs Improve Video Storytelling",
        author: "ADS AI",
        date: "July 17, 2026",
    },
    {
        category: "films",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-78.jpg",
        title: "From Strategy to Screen: The AI Ad Film Production Process",
        author: "ADS AI",
        date: "July 21, 2026",
    },
    {
        category: "ads",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-51.jpg",
        title: "Why Short Video Ads Work Better for Digital Campaigns",
        author: "ADS AI",
        date: "July 25, 2026",
    },
    {
        category: "voice",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-90.jpg",
        title: "Choosing the Right Voice Tone for AI Brand Videos",
        author: "ADS AI",
        date: "July 29, 2026",
    },
    {
        category: "ads",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-91.jpg",
        title: "How Campaign-Ready Videos Save Time for Marketing Teams",
        author: "ADS AI",
        date: "August 2, 2026",
    },
    {
        category: "films",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-93.jpg",
        title: "AI Product Explainer Videos That Make Messages Clear",
        author: "ADS AI",
        date: "August 6, 2026",
    },
    {
        category: "films",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-95.jpg",
        title: "How Corporate AI Films Build Brand Trust",
        author: "ADS AI",
        date: "August 10, 2026",
    },
    {
        category: "ads",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-60.jpg",
        title: "Optimizing Video Formats for Meta, YouTube, and Instagram",
        author: "ADS AI",
        date: "August 14, 2026",
    },
    {
        category: "voice",
        classList: "col-lg-6 col-md-6 col-12",
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-56.jpg",
        title: "The Role of Sound Design in AI-Powered Ad Films",
        author: "ADS AI",
        date: "August 18, 2026",
    },
];

type MatchMediaContext = { revert: () => void };

export default function Section1() {
    const [activeFilter, setActiveFilter] = useState<CategoryFilter>("");
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
    const sectionRef = useRef<HTMLElement | null>(null);
    const matchMediaRef = useRef<MatchMediaContext | null>(null);

    useEffect(() => {
        let mounted = true;
        let rafId: number | null = null;

        const init = async () => {
            const gsap = (await import("gsap")).default;
            const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
            gsap.registerPlugin(ScrollTrigger);
            if (!mounted) return;

            const archiveSection = sectionRef.current;
            if (!archiveSection) return;

            const archiveSidebar = archiveSection.querySelector<HTMLElement>(".sidebar_right");
            const archiveContentCol = archiveSection.querySelector<HTMLElement>(".row.pt-80 .col-lg-8");
            if (!archiveSidebar || !archiveContentCol) return;

            const mm = gsap.matchMedia();
            matchMediaRef.current = mm;

            mm.add("(min-width: 992px)", () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: archiveContentCol,
                        start: "top 50px",
                        end: "bottom bottom",
                        scrub: 1,
                        pin: archiveSidebar,
                        pinSpacing: false,
                        invalidateOnRefresh: true,
                    },
                });
                return () => tl.kill();
            });
        };

        rafId = requestAnimationFrame(() => {
            rafId = null;
            init();
        });

        return () => {
            mounted = false;
            if (rafId !== null) cancelAnimationFrame(rafId);
            matchMediaRef.current?.revert();
            matchMediaRef.current = null;
        };
    }, []);

    useEffect(() => {
        import("gsap/ScrollTrigger").then((mod) => {
            if (typeof mod.default?.refresh === "function") mod.default.refresh();
        });
    }, [visibleCount, activeFilter]);

    const filteredPosts = useMemo(() => {
        if (!activeFilter) return BLOG_POSTS;
        return BLOG_POSTS.filter((post) => post.category === activeFilter);
    }, [activeFilter]);

    const displayedPosts = useMemo(
        () => filteredPosts.slice(0, visibleCount),
        [filteredPosts, visibleCount]
    );

    const hasMore = visibleCount < filteredPosts.length;

    const handleFilter = (filter: CategoryFilter) => {
        setActiveFilter(filter);
        setVisibleCount(INITIAL_VISIBLE);
    };

    const handleLoadMore = () => {
        setVisibleCount((prev) => Math.min(prev + LOAD_MORE_STEP, filteredPosts.length));
    };

    return (
        <section ref={sectionRef} className="sec-1-archive-2 pt-150 pb-100">
            <div className="container">
                <div className="row g-3 align-items-center">
                    <div className="col-12">
                        <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                            <span className="text-uppercase">
                                <span className="text-1">ADS AI Insights</span>
                                <span className="text-2">ADS AI Insights</span>
                            </span>
                            <i>
                                {ARROW_SVG}
                                {ARROW_SVG}
                            </i>
                        </span>
                    </div>
                    <div className="col-xxl-8 col-xl-7 col-12">
                        <h1 className="fz-ds-1 lh-1 fw-500 mb-lg-0 mb-4">
                            AI Video & Advertising Blog
                        </h1>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-12 ms-auto text-lg-end">
                        <div className="filter-portfolio d-flex flex-wrap align-items-center justify-content-lg-end gap-2">
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm${activeFilter === "films" ? " active" : ""}`}
                                data-filter="films"
                                onClick={() => handleFilter(activeFilter === "films" ? "" : "films")}
                            >
                                AI Ad Films
                            </button>
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm${activeFilter === "voice" ? " active" : ""}`}
                                data-filter="voice"
                                onClick={() =>
                                    handleFilter(activeFilter === "voice" ? "" : "voice")
                                }
                            >
                                AI Voice Overs
                            </button>
                            <button
                                type="button"
                                className={`at-btn filter-btn btn-sm${activeFilter === "ads" ? " active" : ""}`}
                                data-filter="ads"
                                onClick={() =>
                                    handleFilter(activeFilter === "ads" ? "" : "ads")
                                }
                            >
                                Social Media Ads
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row pt-80">
                    <div className="col-lg-8 pb-lg-0 pb-80">
                        <div className="row">
                            {displayedPosts.map((post, i) => (
                                <ArticleCard1
                                    key={`${post.category}-${post.img}-${i}`}
                                    classList={post.classList}
                                    category={post.category}
                                    linkPost={post.linkPost}
                                    linkAuthor={post.linkAuthor}
                                    img={post.img}
                                    title={post.title}
                                    author={post.author}
                                    date={post.date}
                                />
                            ))}

                            {hasMore && (
                                <div className="col-12 mt-40">
                                    <button
                                        type="button"
                                        className="at-btn"
                                        onClick={handleLoadMore}
                                    >
                                        <span>
                                            <span className="text-1">LOAD MORE INSIGHTS</span>
                                            <span className="text-2">LOAD MORE INSIGHTS</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-4 ps-lg-5">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    );
}