import ArticleCard3 from "@/shared/cards/ArticleCard3";

const FLASH_NEWS = [
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-23.jpg",
        title: "How AI Ad Films Help Brands Capture Attention Faster",
        author: "ADS AI",
        date: "July 3, 2026",
    },
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-24.jpg",
        title: "Why AI Video Content Is Changing Digital Advertising",
        author: "ADS AI",
        date: "July 8, 2026",
    },
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-26.jpg",
        title: "Creating High-Converting Social Media Video Ads With AI",
        author: "ADS AI",
        date: "July 12, 2026",
    },
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-28.jpg",
        title: "How AI Voice Overs Improve Video Storytelling",
        author: "ADS AI",
        date: "July 17, 2026",
    },
    {
        linkPost: "/blog-details",
        linkAuthor: "/team-details",
        img: "/assets/imgs/images/img-29.jpg",
        title: "From Strategy to Screen: The AI Ad Film Production Process",
        author: "ADS AI",
        date: "July 21, 2026",
    },
];
export default function Sidebar() {
    return (
        <div className="sidebar_right">
            <span className="neutral-500 fw-600 fz-font-md text-uppercase">Flash news</span>
            <div className="blog-card-3-wrap">
                {FLASH_NEWS.map((item, i) => (
                    <ArticleCard3
                        key={`${item.img}-${i}`}
                        card={{
                            img: item.img,
                            linkPost: item.linkPost,
                            title: item.title,
                            date: item.date,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
