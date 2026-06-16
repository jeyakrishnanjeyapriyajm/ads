import PortfolioCard1, { type PortfolioCard1Tag } from "@/shared/cards/PortfolioCard1";
import PortfolioFilterSort, { type FilterValue } from "./PortfolioFilterSort";

type PortfolioItem = {
    classList: string;
    category: FilterValue;
    link: string;
    img: string;
    title: string;
    description: string;
    tags: PortfolioCard1Tag[];
};

const PORTFOLIO_IMAGES = [
    "/assets/imgs/images/img-11.jpg",
    "/assets/imgs/images/img-12.jpg",
    "/assets/imgs/images/img-13.jpg",
    "/assets/imgs/images/img-14.jpg",
    "/assets/imgs/images/img-17.jpg",
    "/assets/imgs/images/img-18.jpg",
    "/assets/imgs/images/img-20.jpg",
    "/assets/imgs/images/img-22.jpg",
    "/assets/imgs/images/img-23.jpg",
    "/assets/imgs/images/img-25.jpg",
    "/assets/imgs/images/img-30.jpg",
    "/assets/imgs/images/img-40.jpg",
    "/assets/imgs/images/img-50.jpg",
    "/assets/imgs/images/img-41.jpg",
    "/assets/imgs/images/img-42.jpg",
    "/assets/imgs/images/img-43.jpg",
    "/assets/imgs/images/img-44.jpg",
];

const PORTFOLIO_DATA: PortfolioItem[] = [
    {
        title: "Ads AI Show Reel",
        category: "ad-films" as FilterValue,
        description: "A cinematic showcase of AdsAI’s AI-powered advertising films, social media videos, and brand storytelling work.",
        tags: ["show reel", "ai video", "ad films", "brand storytelling"],
    },
    {
        title: "Pillsbury Cake",
        category: "ad-films" as FilterValue,
        description: "AI-powered ad film created to highlight product appeal, emotion, and strong brand recall.",
        tags: ["ad film", "food brand", "product campaign", "ai production"],
    },
    {
        title: "Aultra Paints",
        category: "ad-films" as FilterValue,
        description: "Cinematic AI ad film crafted to communicate colour, quality, and visual product impact.",
        tags: ["ad film", "paint brand", "cinematic visuals", "brand recall"],
    },
    {
        title: "Lipton Tea",
        category: "ad-films" as FilterValue,
        description: "Refreshing AI ad film concept designed to build product desire and everyday brand connection.",
        tags: ["ad film", "beverage", "fmcg", "ai visuals"],
    },
    {
        title: "Gulab Jamun",
        category: "ad-films" as FilterValue,
        description: "Food-focused AI ad film created with rich visuals, product emotion, and appetizing storytelling.",
        tags: ["ad film", "food", "product visuals", "fmcg"],
    },
    {
        title: "India Gate Biryani Rice",
        category: "ad-films" as FilterValue,
        description: "A cinematic AI ad film designed to communicate premium quality and cultural food emotion.",
        tags: ["ad film", "fmcg", "cinematic visuals", "brand recall"],
    },
    {
        title: "Heritage Fashion Film",
        category: "ad-films" as FilterValue,
        description: "A stylish AI-powered fashion film created to express heritage, elegance, and visual identity.",
        tags: ["fashion film", "ad film", "brand storytelling", "ai production"],
    },
    {
        title: "Bissell Vacuum Cleaner",
        category: "social-media" as FilterValue,
        description: "Product-focused social media video ad created to communicate cleaning performance and convenience.",
        tags: ["social media", "product ad", "home appliance", "performance video"],
    },
    {
        title: "Dubai Real Estate",
        category: "social-media" as FilterValue,
        description: "Social media video ad concept crafted for luxury real estate promotion and digital engagement.",
        tags: ["social media ad", "real estate", "digital campaign", "ai visuals"],
    },
    {
        title: "Order on Noon - Fast Delivery",
        category: "social-media" as FilterValue,
        description: "Fast-paced AI ad concept designed to promote quick delivery and platform convenience.",
        tags: ["social media", "delivery ad", "ecommerce", "short-form video"],
    },
    {
        title: "Wild Bee Honey",
        category: "ad-films" as FilterValue,
        description: "Natural product ad film created to highlight purity, taste, and brand trust.",
        tags: ["ad film", "food product", "natural brand", "ai visuals"],
    },
    {
        title: "Perfume",
        category: "ad-films" as FilterValue,
        description: "Luxury perfume ad film designed with cinematic visuals, elegance, and emotional product appeal.",
        tags: ["ad film", "perfume", "luxury", "cinematic"],
    },
    {
        title: "Net Zero Vision",
        category: "corporate" as FilterValue,
        description: "Corporate video content created to communicate sustainability, infrastructure, and future vision.",
        tags: ["corporate film", "sustainability", "infrastructure", "visual storytelling"],
    },
    {
        title: "Coke AI",
        category: "ad-films" as FilterValue,
        description: "AI-powered beverage ad film concept created with bold visuals and high brand energy.",
        tags: ["ad film", "beverage", "ai campaign", "brand recall"],
    },
    {
        title: "Falcon",
        category: "corporate" as FilterValue,
        description: "Corporate video crafted to communicate strength, innovation, and brand identity with cinematic clarity.",
        tags: ["corporate", "brand film", "visual identity", "ai production"],
    },
    {
        title: "Jewellery AI",
        category: "ad-films" as FilterValue,
        description: "Premium jewellery ad film created with elegant AI visuals and luxury storytelling.",
        tags: ["ad film", "jewellery", "luxury", "cinematic visuals"],
    },
    {
        title: "Fashion AI",
        category: "social-media" as FilterValue,
        description: "Fashion-focused social media video created to capture attention with style-led AI visuals.",
        tags: ["social media", "fashion", "ai visuals", "short-form ad"],
    },
    {
        title: "When Gold Breathes",
        category: "ad-films" as FilterValue,
        description: "Jewellery showreel created with cinematic gold visuals, luxury emotion, and premium storytelling.",
        tags: ["jewellery", "showreel", "ad film", "luxury"],
    },
    {
        title: "Gold Jewels",
        category: "ad-films" as FilterValue,
        description: "AI jewellery ad film designed to highlight craftsmanship, shine, and premium product appeal.",
        tags: ["ad film", "gold", "jewellery", "luxury brand"],
    },
    {
        title: "Orika Masalas",
        category: "ad-films" as FilterValue,
        description: "Food brand ad film created to communicate flavour, tradition, and product freshness.",
        tags: ["ad film", "masala", "food brand", "fmcg"],
    },
    {
        title: "Dry Fruits",
        category: "social-media" as FilterValue,
        description: "Short-form social media product video designed to promote freshness, health, and premium quality.",
        tags: ["social media", "food product", "short-form", "product ad"],
    },
    {
        title: "Lays",
        category: "social-media" as FilterValue,
        description: "Snack-focused social media video created with bold product visuals and fast attention hooks.",
        tags: ["social media", "snack brand", "short-form ad", "fmcg"],
    },
    {
        title: "Lays Ad Film",
        category: "ad-films" as FilterValue,
        description: "Cinematic AI ad film created to build product desire, energy, and brand recall.",
        tags: ["ad film", "snack brand", "fmcg", "ai production"],
    },
    {
        title: "Tenali Ramakrishna",
        category: "ai-films" as FilterValue,
        description: "AI film project developed with rich visual storytelling, character-driven scenes, and cinematic treatment.",
        tags: ["ai film", "storytelling", "cinematic film", "ai production"],
    },
    {
        title: "Interiors",
        category: "promotional" as FilterValue,
        description: "Promotional video created to showcase interior spaces with style, clarity, and visual appeal.",
        tags: ["promotional", "interiors", "visual showcase", "ai video"],
    },
    {
        title: "Doors",
        category: "architecture" as FilterValue,
        description: "Architectural video content designed to showcase product design, materials, and spatial impact.",
        tags: ["architecture", "product showcase", "visualization", "ai video"],
    },
    {
        title: "Miralam Tank",
        category: "infrastructure" as FilterValue,
        description: "Infrastructure video created to present development vision, public space, and urban transformation.",
        tags: ["infrastructure", "urban development", "public project", "visual storytelling"],
    },
    {
        title: "Musi Rejuvenation",
        category: "documentaries" as FilterValue,
        description: "Documentary-style video created to communicate river restoration, civic vision, and long-term impact.",
        tags: ["documentary", "public project", "environment", "urban development"],
    },
    {
        title: "Britannia AI",
        category: "ad-films" as FilterValue,
        description: "AI-powered ad film concept created for an FMCG brand with strong product and lifestyle appeal.",
        tags: ["ad film", "fmcg", "food brand", "ai production"],
    },
    {
        title: "Defender",
        category: "ad-films" as FilterValue,
        description: "Bold automotive ad film crafted with cinematic visuals, strength, and adventure-led storytelling.",
        tags: ["ad film", "automotive", "cinematic", "ai visuals"],
    },
    {
        title: "iPhone Concept",
        category: "ad-films" as FilterValue,
        description: "Premium AI ad concept designed to present technology, lifestyle, and modern product appeal.",
        tags: ["ad film", "technology", "product concept", "premium visuals"],
    },
    {
        title: "Pepsi",
        category: "ad-films" as FilterValue,
        description: "Energetic beverage ad film concept created with bold visuals and youth-focused storytelling.",
        tags: ["ad film", "beverage", "fmcg", "brand energy"],
    },
    {
        title: "Deeponde Serum",
        category: "ad-films" as FilterValue,
        description: "Beauty product ad film created to highlight skincare benefits, elegance, and product trust.",
        tags: ["ad film", "beauty", "skincare", "product visuals"],
    },
    {
        title: "Pizza New",
        category: "ad-films" as FilterValue,
        description: "Food ad film created with appetizing visuals, fast pacing, and strong product appeal.",
        tags: ["ad film", "food", "pizza", "fmcg"],
    },
    {
        title: "Ponds",
        category: "ad-films" as FilterValue,
        description: "Beauty brand ad film designed to communicate freshness, confidence, and product emotion.",
        tags: ["ad film", "beauty", "skincare", "brand recall"],
    },
    {
        title: "Hypnotic",
        category: "ad-films" as FilterValue,
        description: "Stylized AI ad film created with strong mood, visual rhythm, and cinematic treatment.",
        tags: ["ad film", "cinematic", "ai visuals", "creative concept"],
    },
    {
        title: "Burberry Perfume",
        category: "ad-films" as FilterValue,
        description: "Luxury perfume ad film crafted with premium visuals, elegance, and emotional brand appeal.",
        tags: ["ad film", "perfume", "luxury", "fashion"],
    },
    {
        title: "Perfume Dubai",
        category: "ad-films" as FilterValue,
        description: "Luxury fragrance ad film created with Dubai-inspired visuals and premium cinematic storytelling.",
        tags: ["ad film", "perfume", "luxury", "dubai"],
    },
    {
        title: "Ballantine",
        category: "ad-films" as FilterValue,
        description: "Premium lifestyle ad film concept designed with rich visuals and refined brand mood.",
        tags: ["ad film", "premium", "lifestyle", "cinematic"],
    },
    {
        title: "Baskin Robbins",
        category: "ad-films" as FilterValue,
        description: "Colourful food ad film created to highlight flavour, joy, and product excitement.",
        tags: ["ad film", "ice cream", "food brand", "fmcg"],
    },
    {
        title: "Pizza Special",
        category: "ad-films" as FilterValue,
        description: "Appetizing pizza ad film crafted with strong product visuals and conversion-focused appeal.",
        tags: ["ad film", "food", "pizza", "product campaign"],
    },
    {
        title: "Ladybird",
        category: "ad-films" as FilterValue,
        description: "Creative AI ad film concept built with visual charm, brand personality, and memorable storytelling.",
        tags: ["ad film", "creative concept", "ai visuals", "brand story"],
    },
    {
        title: "Prathi Sarees",
        category: "ad-films" as FilterValue,
        description: "Fashion ad film created to showcase saree elegance, tradition, and premium visual styling.",
        tags: ["ad film", "fashion", "sarees", "brand storytelling"],
    },
    {
        title: "Baggit",
        category: "promotional" as FilterValue,
        description: "Fashion promotional video created to highlight product style, lifestyle appeal, and visual identity.",
        tags: ["fashion", "promotional", "product video", "brand campaign"],
    },
    {
        title: "T Square",
        category: "architecture" as FilterValue,
        description: "Architectural visualization created to present design, scale, and built-environment impact.",
        tags: ["architecture", "visualization", "real estate", "ai video"],
    },
    {
        title: "Sky Bridge",
        category: "architecture" as FilterValue,
        description: "Architectural project video designed to showcase structure, planning, and cinematic infrastructure visuals.",
        tags: ["architecture", "sky bridge", "visualization", "infrastructure"],
    },
    {
        title: "The Evolution of TGSRTC",
        category: "documentaries" as FilterValue,
        description: "Documentary video created to communicate institutional progress, public service, and transformation.",
        tags: ["documentary", "transport", "public sector", "corporate story"],
    },
    {
        title: "Sewage Treatment Plant",
        category: "corporate" as FilterValue,
        description: "Corporate video created to explain process, infrastructure, and public utility impact with clarity.",
        tags: ["corporate", "stp plant", "infrastructure", "explainer"],
    },
    {
        title: "Neopolis Development",
        category: "architecture" as FilterValue,
        description: "Architecture and urban development video created to showcase future-ready city planning.",
        tags: ["architecture", "urban development", "real estate", "visualization"],
    },
    {
        title: "TASK",
        category: "explainers" as FilterValue,
        description: "Explainer video created to simplify institutional purpose, services, and public communication.",
        tags: ["explainer", "institutional", "public communication", "ai video"],
    },
    {
        title: "EV Automotive",
        category: "ad-films" as FilterValue,
        description: "Automotive ad film created to showcase electric mobility, innovation, and future-focused design.",
        tags: ["ad film", "ev", "automotive", "innovation"],
    },
    {
        title: "ORR & RRR",
        category: "infrastructure" as FilterValue,
        description: "Infrastructure video created to present road connectivity, regional growth, and development vision.",
        tags: ["infrastructure", "roads", "urban planning", "visual storytelling"],
    },
    {
        title: "Life Sciences Hub",
        category: "corporate" as FilterValue,
        description: "Corporate video created to communicate innovation, industry growth, and life sciences development.",
        tags: ["corporate", "life sciences", "industry", "innovation"],
    },
    {
        title: "EODB Reforms",
        category: "explainers" as FilterValue,
        description: "Explainer video created to simplify policy reforms, business growth, and governance communication.",
        tags: ["explainer", "policy", "business", "public sector"],
    },
    {
        title: "Hyderabad Metro Phase 2",
        category: "infrastructure" as FilterValue,
        description: "Infrastructure video created to showcase transport expansion, connectivity, and city development.",
        tags: ["infrastructure", "metro", "transport", "urban growth"],
    },
    {
        title: "Food Processing",
        category: "corporate" as FilterValue,
        description: "Corporate video created to communicate industry opportunity, production value, and sector growth.",
        tags: ["corporate", "food processing", "industry", "economic growth"],
    },
    {
        title: "Logistic Sector",
        category: "corporate" as FilterValue,
        description: "Corporate video created to present logistics infrastructure, business potential, and operational scale.",
        tags: ["corporate", "logistics", "industry", "infrastructure"],
    },
    {
        title: "Sports Infrastructure",
        category: "promotional" as FilterValue,
        description: "Promotional video created to showcase sports facilities, public development, and future potential.",
        tags: ["promotional", "sports", "infrastructure", "public project"],
    },
    {
        title: "History of Musi River",
        category: "documentaries" as FilterValue,
        description: "Documentary video created to narrate the history, cultural value, and transformation of Musi River.",
        tags: ["documentary", "musi river", "history", "public storytelling"],
    },
    {
        title: "T-SAT",
        category: "explainers" as FilterValue,
        description: "Explainer video created to communicate platform purpose, education value, and audience benefit.",
        tags: ["explainer", "education", "platform", "public communication"],
    },
    {
        title: "Gandhi Sarovar",
        category: "architecture" as FilterValue,
        description: "Architectural video created to visualize public space, development planning, and cultural value.",
        tags: ["architecture", "public space", "visualization", "urban development"],
    },
    {
        title: "H Convention",
        category: "infrastructure" as FilterValue,
        description: "Infrastructure project video created to showcase venue scale, design, and development potential.",
        tags: ["infrastructure", "convention", "architecture", "visualization"],
    },
    {
        title: "Bharat Future City",
        category: "architecture" as FilterValue,
        description: "Future city visualization created to communicate smart planning, development vision, and infrastructure scale.",
        tags: ["architecture", "future city", "urban development", "visualization"],
    },
    {
        title: "Electronics & Semi-Conductors",
        category: "corporate" as FilterValue,
        description: "Corporate sector video created to present technology growth, manufacturing potential, and investment vision.",
        tags: ["corporate", "electronics", "semiconductors", "industry"],
    },
    {
        title: "Aerospace Defence",
        category: "corporate" as FilterValue,
        description: "Corporate video created to communicate industrial capability, innovation, and defence sector strength.",
        tags: ["corporate", "aerospace", "defence", "innovation"],
    },
    {
        title: "Telangana Police",
        category: "corporate" as FilterValue,
        description: "Institutional corporate video created to communicate service, safety, and public trust.",
        tags: ["corporate", "police", "public sector", "trust"],
    },
    {
        title: "Revolution - Agriculture",
        category: "documentaries" as FilterValue,
        description: "Documentary video created to showcase agricultural transformation, innovation, and social impact.",
        tags: ["documentary", "agriculture", "impact story", "public sector"],
    },
    {
        title: "East West Corridors",
        category: "infrastructure" as FilterValue,
        description: "Infrastructure video created to present corridor development, connectivity, and urban growth.",
        tags: ["infrastructure", "corridors", "transport", "urban planning"],
    },
    {
        title: "Sports University",
        category: "promotional" as FilterValue,
        description: "Promotional video created to present sports education, infrastructure, and institutional vision.",
        tags: ["promotional", "sports", "education", "infrastructure"],
    },
    {
        title: "Emergency Evacuation",
        category: "explainers" as FilterValue,
        description: "Explainer video created to communicate safety procedures, emergency response, and public awareness.",
        tags: ["explainer", "safety", "emergency", "training"],
    },
    {
        title: "Vision 2047",
        category: "documentaries" as FilterValue,
        description: "Documentary video created to communicate long-term vision, development goals, and future transformation.",
        tags: ["documentary", "vision 2047", "future", "public sector"],
    },
].map((item, index) => ({
    classList: "col-xxl-6 col-lg-7",
    category: item.category,
    link: "/portfolio-details-1",
    img: PORTFOLIO_IMAGES[index % PORTFOLIO_IMAGES.length],
    title: item.title,
    description: item.description,
    tags: item.tags.map((label) => ({
        label,
        href: "#",
    })),
}));
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
        <section className="sec-1-portfolio-1 overflow-hidden pt-150 pb-110 border-bottom-100">
            <div className="container pb-60">
                <div className="row align-items-end">
                    <div className="col-xxl-8 col-lg-7">
                        <h1 className="fz-ds-1 fw-500">Our Works</h1>
                    </div>
                    <div className="col-xxl-3 col-lg-5 ms-lg-auto">
                       <p className="fz-font-lg neutral-900 text-lg-end">
                            Explore AI-powered ad films, social media videos, corporate films, documentaries, explainers, and cinematic brand stories crafted by AdsAI.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <PortfolioFilterSort items={PORTFOLIO_DATA}>
                    {(visibleItems, { hasMore, onLoadMore }) => (
                        <div className="row g-4 justify-content-center">
                            {visibleItems.map((item, idx) => (
                                <PortfolioCard1
                                    key={`${item.title}-${idx}`}
                                    classList={item.classList}
                                    link={item.link}
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    tags={item.tags}
                                />
                            ))}
                            {hasMore && (
                                <div className="col-12 text-center">
                                    <button type="button" className="at-btn" onClick={onLoadMore}>
                                        <span>
                                            <span className="text-1">LOAD MORE WORKS</span>
                                            <span className="text-2">LOAD MORE WORKS</span>
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
