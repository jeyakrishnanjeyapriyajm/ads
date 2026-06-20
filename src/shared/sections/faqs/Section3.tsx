import RevealText from "@/shared/effects/RevealText";

// FAQs section 3 - Scroll sections with accordions by topic

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

type FaqItem = {
    id: string;
    num: string;
    question: string;
    answer: string;
    open: boolean;
};

type FaqSection = {
    number: string;
    title: React.ReactNode;
    description: string;
    accordionId: string;
    items: FaqItem[];
};

const FAQ_SECTIONS: FaqSection[] = [
    {
        number: "01",
        title: "AI Ad Films",
        description:
            "Essential questions about ADS AI, AI ad films, and how our video content helps brands grow.",
        accordionId: "accordionFaq1",
        items: [
            {
                id: "collapseFaq1-1",
                num: "1",
                question: "What does ADS AI do?",
                answer:
                    "ADS AI creates AI-powered ad films, promotional videos, voice overs, product explainers, corporate films, and social media video ads for brands.",
                open: true,
            },
            {
                id: "collapseFaq1-2",
                num: "2",
                question: "What is an AI ad film?",
                answer:
                    "An AI ad film is a high-quality video created using AI tools, creative strategy, storytelling, visuals, voice over, editing, and sound design.",
                open: false,
            },
            {
                id: "collapseFaq1-3",
                num: "3",
                question: "Who can use ADS AI services?",
                answer:
                    "Our services are suitable for startups, businesses, brands, agencies, product companies, and anyone who needs powerful video content for marketing.",
                open: false,
            },
            {
                id: "collapseFaq1-4",
                num: "4",
                question: "Do you create videos for digital ads?",
                answer:
                    "Yes, we create videos optimized for Meta, YouTube, Instagram, reels, shorts, and performance advertising campaigns.",
                open: false,
            },
        ],
    },
    {
        number: "02",
        title: (
            <>
                Services <br />
                and Videos
            </>
        ),
        description:
            "Questions about our AI video services, creative production, and campaign-ready deliverables.",
        accordionId: "accordionFaq2",
        items: [
            {
                id: "collapseFaq2-1",
                num: "1",
                question: "What video services do you offer?",
                answer:
                    "We offer AI ad films, AI films, AI voice overs, promotional videos, corporate films, product explainers, documentary videos, and social media video ads.",
                open: true,
            },
            {
                id: "collapseFaq2-2",
                num: "2",
                question: "Do you provide voice overs?",
                answer:
                    "Yes, we provide AI-powered voice overs with suitable tone, pacing, and language style based on the brand and campaign.",
                open: false,
            },
            {
                id: "collapseFaq2-3",
                num: "3",
                question: "Can you create product explainer videos?",
                answer:
                    "Yes, we create product explainer videos that clearly explain product benefits, features, and value in a simple visual format.",
                open: false,
            },
            {
                id: "collapseFaq2-4",
                num: "4",
                question: "Can you make videos for social media?",
                answer:
                    "Yes, we deliver videos in platform-ready sizes and formats for Instagram, Facebook, YouTube, reels, shorts, and paid ads.",
                open: false,
            },
        ],
    },
    {
        number: "03",
        title: "Process & Delivery",
        description:
            "How we plan, create, edit, and deliver AI-powered video content for your brand.",
        accordionId: "accordionFaq3",
        items: [
            {
                id: "collapseFaq3-1",
                num: "1",
                question: "How does the project start?",
                answer:
                    "We start with a discovery call to understand your brand, target audience, campaign goals, creative direction, and expected outcome.",
                open: true,
            },
            {
                id: "collapseFaq3-2",
                num: "2",
                question: "What is your production process?",
                answer:
                    "Our process includes discovery, strategy, creative concept, pre-production, AI production, post-production, and final delivery.",
                open: false,
            },
            {
                id: "collapseFaq3-3",
                num: "3",
                question: "How long does a video project take?",
                answer:
                    "Timeline depends on the project scope, but most AI ad film projects can be completed within a short production cycle after content approval.",
                open: false,
            },
            {
                id: "collapseFaq3-4",
                num: "4",
                question: "Do you provide revisions?",
                answer:
                    "Yes, revisions can be included based on the selected project scope and agreed creative direction.",
                open: false,
            },
        ],
    },
    {
        number: "04",
        title: (
            <>
                Pricing <br />
                and Support
            </>
        ),
        description:
            "Questions about pricing, project support, final files, and campaign-ready video formats.",
        accordionId: "accordionFaq4",
        items: [
            {
                id: "collapseFaq4-1",
                num: "1",
                question: "How do you price your services?",
                answer:
                    "Pricing depends on video type, duration, complexity, number of deliverables, voice over, editing requirements, and campaign formats.",
                open: true,
            },
            {
                id: "collapseFaq4-2",
                num: "2",
                question: "Do you provide final files for different platforms?",
                answer:
                    "Yes, we can deliver final videos in different aspect ratios and formats for Meta, YouTube, Instagram, and digital campaigns.",
                open: false,
            },
            {
                id: "collapseFaq4-3",
                num: "3",
                question: "Can you support urgent campaigns?",
                answer:
                    "Yes, urgent campaign support is possible depending on the project requirement and production schedule.",
                open: false,
            },
            {
                id: "collapseFaq4-4",
                num: "4",
                question: "How can we start with ADS AI?",
                answer:
                    "You can contact ADS AI through business@adsai.ai or call +91 91331 87000 / +91 90522 04000 to discuss your project.",
                open: false,
            },
        ],
    },
];

export default function Section3() {
    return (
        <section className="sec-3-faqs p-relative z-n1 pb-100">
            <div className="scroll-section">
                <div className="wrapper">
                    {FAQ_SECTIONS.map((section) => (
                        <div
                            key={section.accordionId}
                            className="item bg-neutral-0 d-block"
                        >
                            <div className="pt-100 border-top-100">
                                <div className="container">
                                    <div className="row g-4">
                                        <div className="col-lg-4 h-100">
                                            <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                                                <span className="text-uppercase">
                                                    <span className="text-1">
                                                        [ {section.number} ]
                                                    </span>
                                                    <span className="text-2">
                                                        [ {section.number} ]
                                                    </span>
                                                </span>
                                                <i>
                                                    {ARROW_SVG}
                                                    {ARROW_SVG}
                                                </i>
                                            </span>
                                            <h3 className="reveal-text">
                                                <RevealText>{section.title}</RevealText>
                                            </h3>
                                            <h6 className="fw-500 mb-0 fz-font-lg">
                                                {section.description}
                                            </h6>
                                            <div className="section-title-pin"></div>
                                        </div>
                                        <div className="col-lg-7 offset-lg-1 p-relative">
                                            <div
                                                className="accordion p-relative z-index-3"
                                                id={section.accordionId}
                                            >
                                                {section.items.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="at-faq-item bg-neutral-0 border-100 rounded-4"
                                                    >
                                                        <div className="at-faq-header d-flex gap-2">
                                                            <div className="box-number">
                                                                <span className="at-faq-number">
                                                                    {item.num}
                                                                </span>
                                                            </div>
                                                            <button
                                                                className={`at-faq-button${item.open ? "" : " collapsed"}`}
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#${item.id}`}
                                                                aria-expanded={item.open}
                                                                aria-controls={item.id}
                                                            >
                                                                {item.question}
                                                            </button>
                                                        </div>
                                                        <div
                                                            id={item.id}
                                                            className={`at-faq-collapse collapse${item.open ? " show" : ""}`}
                                                            data-bs-parent={`#${section.accordionId}`}
                                                        >
                                                            <div className="at-faq-body">
                                                                <p>{item.answer}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
