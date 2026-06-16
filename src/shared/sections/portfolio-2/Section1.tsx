import PortfolioCard2 from "@/shared/cards/PortfolioCard2";
import PortfolioFilterSort, { type FilterValue } from "@/shared/sections/portfolio-1/PortfolioFilterSort";

type PortfolioItem = {
    classList: string;
    category: FilterValue;
    link: string;
    linkCase: string;
    img: string;
    headline: string;
    description: string;
    title: string;
    featuredHtml?: React.ReactNode;
};

const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-50.jpg",
        title: "Ads AI Show Reel",
        description: "A cinematic showcase of AdsAI’s AI-powered advertising films, social media videos, and brand storytelling work.",
        tags: [
            { label: "show reel", href: "#" },
            { label: "ai video", href: "#" },
            { label: "ad films", href: "#" },
            { label: "brand storytelling", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-51.jpg",
        title: "Pillsbury Cake",
        description: "AI-powered ad film created to highlight product appeal, emotion, and strong brand recall.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "food brand", href: "#" },
            { label: "product campaign", href: "#" },
            { label: "ai production", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-52.jpg",
        title: "Aultra Paints",
        description: "Cinematic AI ad film crafted to communicate colour, quality, and visual product impact.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "paint brand", href: "#" },
            { label: "cinematic visuals", href: "#" },
            { label: "brand recall", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-53.jpg",
        title: "Lipton Tea",
        description: "Refreshing AI ad film concept designed to build product desire and everyday brand connection.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "beverage", href: "#" },
            { label: "fmcg", href: "#" },
            { label: "ai visuals", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-54.jpg",
        title: "Gulab Jamun",
        description: "Food-focused AI ad film created with rich visuals, product emotion, and appetizing storytelling.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "food", href: "#" },
            { label: "product visuals", href: "#" },
            { label: "fmcg", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-55.jpg",
        title: "India Gate Biryani Rice",
        description: "A cinematic AI ad film designed to communicate premium quality and cultural food emotion.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "fmcg", href: "#" },
            { label: "cinematic visuals", href: "#" },
            { label: "brand recall", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-56.jpg",
        title: "Heritage Fashion Film",
        description: "A stylish AI-powered fashion film created to express heritage, elegance, and visual identity.",
        tags: [
            { label: "fashion film", href: "#" },
            { label: "ad film", href: "#" },
            { label: "brand storytelling", href: "#" },
            { label: "ai production", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "social-media",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-57.jpg",
        title: "Bissell Vacuum Cleaner",
        description: "Product-focused social media video ad created to communicate cleaning performance and convenience.",
        tags: [
            { label: "social media", href: "#" },
            { label: "product ad", href: "#" },
            { label: "home appliance", href: "#" },
            { label: "performance video", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "social-media",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-58.jpg",
        title: "Dubai Real Estate",
        description: "Social media video ad concept crafted for luxury real estate promotion and digital engagement.",
        tags: [
            { label: "social media ad", href: "#" },
            { label: "real estate", href: "#" },
            { label: "digital campaign", href: "#" },
            { label: "ai visuals", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "social-media",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-59.jpg",
        title: "Order on Noon - Fast Delivery",
        description: "Fast-paced AI ad concept designed to promote quick delivery and platform convenience.",
        tags: [
            { label: "social media", href: "#" },
            { label: "delivery ad", href: "#" },
            { label: "ecommerce", href: "#" },
            { label: "short-form video", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-60.jpg",
        title: "Wild Bee Honey",
        description: "Natural product ad film created to highlight purity, taste, and brand trust.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "food product", href: "#" },
            { label: "natural brand", href: "#" },
            { label: "ai visuals", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-61.jpg",
        title: "Perfume",
        description: "Luxury perfume ad film designed with cinematic visuals, elegance, and emotional product appeal.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "perfume", href: "#" },
            { label: "luxury", href: "#" },
            { label: "cinematic", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "corporate",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-62.jpg",
        title: "Net Zero Vision",
        description: "Corporate video content created to communicate sustainability, infrastructure, and future vision.",
        tags: [
            { label: "corporate film", href: "#" },
            { label: "sustainability", href: "#" },
            { label: "infrastructure", href: "#" },
            { label: "visual storytelling", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-63.jpg",
        title: "Coke AI",
        description: "AI-powered beverage ad film concept created with bold visuals and high brand energy.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "beverage", href: "#" },
            { label: "ai campaign", href: "#" },
            { label: "brand recall", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "corporate",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-64.jpg",
        title: "Falcon",
        description: "Corporate video crafted to communicate strength, innovation, and brand identity with cinematic clarity.",
        tags: [
            { label: "corporate", href: "#" },
            { label: "brand film", href: "#" },
            { label: "visual identity", href: "#" },
            { label: "ai production", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-65.jpg",
        title: "Jewellery AI",
        description: "Premium jewellery ad film created with elegant AI visuals and luxury storytelling.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "jewellery", href: "#" },
            { label: "luxury", href: "#" },
            { label: "cinematic visuals", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "social-media",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-66.jpg",
        title: "Fashion AI",
        description: "Fashion-focused social media video created to capture attention with style-led AI visuals.",
        tags: [
            { label: "social media", href: "#" },
            { label: "fashion", href: "#" },
            { label: "ai visuals", href: "#" },
            { label: "short-form ad", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-67.jpg",
        title: "When Gold Breathes",
        description: "Jewellery showreel created with cinematic gold visuals, luxury emotion, and premium storytelling.",
        tags: [
            { label: "jewellery", href: "#" },
            { label: "showreel", href: "#" },
            { label: "ad film", href: "#" },
            { label: "luxury", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-68.jpg",
        title: "Gold Jewels",
        description: "AI jewellery ad film designed to highlight craftsmanship, shine, and premium product appeal.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "gold", href: "#" },
            { label: "jewellery", href: "#" },
            { label: "luxury brand", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-69.jpg",
        title: "Orika Masalas",
        description: "Food brand ad film created to communicate flavour, tradition, and product freshness.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "masala", href: "#" },
            { label: "food brand", href: "#" },
            { label: "fmcg", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "social-media",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-70.jpg",
        title: "Dry Fruits",
        description: "Short-form social media product video designed to promote freshness, health, and premium quality.",
        tags: [
            { label: "social media", href: "#" },
            { label: "food product", href: "#" },
            { label: "short-form", href: "#" },
            { label: "product ad", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "social-media",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-71.jpg",
        title: "Lays",
        description: "Snack-focused social media video created with bold product visuals and fast attention hooks.",
        tags: [
            { label: "social media", href: "#" },
            { label: "snack brand", href: "#" },
            { label: "short-form ad", href: "#" },
            { label: "fmcg", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ad-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-72.jpg",
        title: "Lays Ad Film",
        description: "Cinematic AI ad film created to build product desire, energy, and brand recall.",
        tags: [
            { label: "ad film", href: "#" },
            { label: "snack brand", href: "#" },
            { label: "fmcg", href: "#" },
            { label: "ai production", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "ai-films",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-73.jpg",
        title: "Tenali Ramakrishna",
        description: "AI film project developed with rich visual storytelling, character-driven scenes, and cinematic treatment.",
        tags: [
            { label: "ai film", href: "#" },
            { label: "storytelling", href: "#" },
            { label: "cinematic film", href: "#" },
            { label: "ai production", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "promotional",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-74.jpg",
        title: "Interiors",
        description: "Promotional video created to showcase interior spaces with style, clarity, and visual appeal.",
        tags: [
            { label: "promotional", href: "#" },
            { label: "interiors", href: "#" },
            { label: "visual showcase", href: "#" },
            { label: "ai video", href: "#" },
        ],
    },
    {
        classList: "col-xxl-6 col-lg-7",
        category: "architecture",
        link: "/portfolio-details-1",
        img: "/assets/imgs/images/img-75.jpg",
        title: "Doors",
        description: "Architectural video content designed to showcase product design, materials, and spatial impact.",
        tags: [
            { label: "architecture", href: "#" },
            { label: "product showcase", href: "#" },
            { label: "visualization", href: "#" },
            { label: "ai video", href: "#" },
        ],
    },
];

const ARROW_SVG = (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z"
            fill="currentColor"
        />
    </svg>
);

export default function Section1() {
    return (
        <section className="sec-1-portfolio-2 overflow-hidden pt-150 pb-110 border-bottom-100">
            <div className="container pb-60">
                <div className="row align-items-end">
                    <div className="col-xxl-8 mx-auto text-center">
                        <h1 className="fz-ds-1 fw-500">Selected Work</h1>
                        <p className="fz-font-lg neutral-900">
                            A thoughtful selection of work shaped by simplicity and meaningful outcomes.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <PortfolioFilterSort
                    items={PORTFOLIO_DATA}
                    filterColumnClassName="col-lg-8 mx-auto"
                    filterFlexClassName="justify-content-center"
                    leadingColumnClassName="col-2"
                >
                    {(visibleItems, { hasMore, onLoadMore }) => (
                        <div className="row">
                            {visibleItems.map((item, idx) => (
                                <PortfolioCard2
                                    key={`${item.title}-${idx}`}
                                    classList={item.classList}
                                    category={item.category}
                                    link={item.link}
                                    linkCase={item.linkCase}
                                    img={item.img}
                                    headline={item.headline}
                                    description={item.description}
                                    title={item.title}
                                    featuredHtml={item.featuredHtml}
                                />
                            ))}
                            {hasMore && (
                                <div className="col-12 text-center">
                                    <button type="button" className="at-btn" onClick={onLoadMore}>
                                        <span>
                                            <span className="text-1">LOAD MORE PROJECTS</span>
                                            <span className="text-2">LOAD MORE PROJECTS</span>
                                        </span>
                                        <i>
                                            {ARROW_SVG}
                                            {ARROW_SVG}
                                        </i>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </PortfolioFilterSort>
            </div>
        </section>
    );
}
