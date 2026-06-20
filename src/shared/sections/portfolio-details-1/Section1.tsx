import { Link } from "react-router-dom";
import SwiperDynamic from "@/shared/components/SwiperDynamic";

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

const SLIDER_IMAGES = [
    { src: "/assets/imgs/v/v-50.webm", alt: "adsai" },
    { src: "/assets/imgs/v/v-51.webm", alt: "adsai" },
    { src: "/assets/imgs/v/v-52.webm", alt: "adsai" },
    { src: "/assets/imgs/v/v-53.webm", alt: "adsai" },
    { src: "/assets/imgs/v/v-54.webm", alt: "adsai" },
];

function InfoRow({ label, value }: { label: string; value: string }) {
    return (
        <div className="d-flex justify-content-between border-bottom-100 py-4">
            <p className="fz-font-md neutral-900 mb-0">{label}</p>
            <p className="fz-font-lg fw-600 mb-0 neutral-900">{value}</p>
        </div>
    );
}

export default function Section1() {
    return (
        <section className="sec-1-portfolio-details-1 overflow-hidden pt-150 pb-100">
            <div className="container">
                <div className="row g-3 align-items-end">
                    <div className="col-md-9">
                        <h1 className="fz-ds-1 lh-1 fw-500 d-flex mb-0">
                            ADS AI<sup className="fz-80 fw-400 top-0">®</sup>
                        </h1>
                        <h5 className="fw-600 mb-0">AI Ad Film Production</h5>
                    </div>
                    <div className="col-md-3 ms-auto text-md-end">
                        <Link to="#" className="border-bottom-900 d-inline-block">
                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                <span className="text-uppercase">
                                    <span className="text-1">view project</span>
                                    <span className="text-2">view project</span>
                                </span>
                                <i>
                                    {ARROW_SVG}
                                    {ARROW_SVG}
                                </i>
                            </span>
                        </Link>
                    </div>
                    <div className="col-12">
                        <div className="border-bottom-100 pb-30" />
                    </div>
                </div>
                <div className="row mt-50">
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">Introduction</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <InfoRow label="Client" value="ADS AI Brand Partner" />
                        <InfoRow label="Release Date" value="2026" />
                        <InfoRow label="Role" value="AI Ad Film Production" />
                        <InfoRow label="Duration" value="2 Weeks" />
                        <p className="fz-font-2xl fw-400 neutral-900 mt-40">
                            This project showcases an AI-powered ad film created to help a brand communicate clearly,
                            capture attention, and convert audiences across digital platforms. ADS AI handled the complete
                            process from strategy and creative concept to AI production, editing, voice over, and final delivery.
                        </p>
                    </div>
                </div>
            </div>
            <SwiperDynamic
                className="swiper about-me-slider-active pt-60 mb-60 at-item-anime-area"
                slidesPerView={2}
                spaceBetween={24}
                loop
                breakpoints={{
                    576: { slidesPerView: 1, spaceBetween: 24 },
                    768: { slidesPerView: 1, spaceBetween: 24 },
                    992: { slidesPerView: 2, spaceBetween: 30 },
                }}
            >
                {SLIDER_IMAGES.map((slide, index) => (
                    <div key={index} className="about-me-slider-thumb at-item-anime marque">
                        <video
                            width={770}
                            height={560}
                            className="w-100 rounded-4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            style={{
                                height: "560px",
                                objectFit: "cover",
                                display: "block",
                            }}
                        >
                            <source src={slide.src} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </SwiperDynamic>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">Challenge & Approach</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="fz-font-xl neutral-900 mt-40">
                            The challenge was to create premium video content that could quickly communicate the brand message
                            while standing out in competitive digital advertising spaces. The film needed to feel cinematic,
                            clear, and performance-focused.
                        </p>
                        <p className="fz-font-xl neutral-900 mt-40">
                            Our approach focused on understanding the audience, building a strong creative direction,
                            generating AI-powered visuals, and shaping the final story for platforms like Meta, YouTube,
                            Instagram, and paid ad campaigns.
                        </p>
                        <ul className="ps-4">
                            <li className="neutral-950">Brand discovery and campaign goal analysis</li>
                            <li className="neutral-950">Creative concept, script, and visual direction</li>
                            <li className="neutral-950">AI-generated visuals, motion, and storytelling</li>
                            <li className="neutral-950">Final edits optimized for advertising platforms</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <video
                            width={1200}
                            height={700}
                            className="w-100"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            style={{
                                height: "700px",
                                objectFit: "cover",
                                display: "block",
                            }}
                        >
                            <source src="/assets/imgs/v/v-55.webm" type="video/webm" />
                        </video>
                    </div>
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">The Solution</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                       <p className="fz-font-xl neutral-900 mt-40">
                            The final output was a polished AI ad film with strong visuals, clear messaging, smooth editing,
                            AI voice over, sound design, and platform-ready video formats. The content was ready to launch
                            across paid and organic digital campaigns.
                        </p>
                        <h6 className="py-3">Key Features</h6>
                        <ul className="ps-4">
                            <li className="neutral-950">AI-generated cinematic visuals and motion sequences</li>
                            <li className="neutral-950">Campaign-focused script and storytelling structure</li>
                            <li className="neutral-950">AI voice over, sound polish, and editing</li>
                            <li className="neutral-950">Final video formats for Meta, YouTube, Instagram, and ads</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 py-5">
                        <video
                            width={600}
                            height={400}
                            className="w-100"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            style={{
                                height: "725px",
                                objectFit: "cover",
                                display: "block",
                            }}
                        >
                            <source src="/assets/imgs/v/v-56.webm" type="video/webm" />
                        </video>
                    </div>
                    <div className="col-md-6 py-5">
                        <video
                            width={600}
                            height={400}
                            className="w-100"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            style={{
                                height: "725px",
                                objectFit: "cover",
                                display: "block",
                            }}
                        >
                            <source src="/assets/imgs/v/v-51.webm" type="video/webm" />
                        </video>
                    </div>
                    <div className="col-lg-5">
                        <div className="sec-2-home-5__card sec-2-home-5__card--list d-flex align-items-center">
                            <ul className="sec-2-home-5__list list-unstyled mb-0">
                                <li className="sec-2-home-5__list-item">
                                    <h6 className="mb-0 fw-600">Outcome</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="fz-font-xl fw-500 neutral-900 mt-40">
                                The project delivered a premium AI ad film that helped the brand present its message with clarity,
                                emotion, and visual impact. The final assets were ready for fast campaign launch across multiple
                                digital advertising channels.
                        </p>
                        <div className="py-3 border-bottom-100" />
                        <div className="testimonial-author d-flex align-items-start mb-0 gap-4 pt-60 w-75">
                            <div>
                                <div className="testimonial-left-img size-50 rounded-3 overflow-hidden">
                                    <img
                                        src="/assets/imgs/images/img-60.jpg"
                                        alt="adsai"
                                        width={50}
                                        height={50}
                                        className="img-cover" loading="lazy" />
                                </div>
                            </div>
                            <div className="testimonial-content">
                                <p className="fz-3xl neutral-900 fw-400">
                                    &quot;ADS AI transformed our idea into a powerful AI ad film. The final video looked premium,
                                    communicated our message clearly, and was ready to use across our digital campaigns.&quot;
                                </p>
                                <h6 className="testimonial-content-author-name fw-600 mb-0 fz-font-md">
                                    ADS AI Client
                                </h6>
                                <p className="testimonial-content-author-position m-0 fz-font-label">
                                    Brand Partner
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
