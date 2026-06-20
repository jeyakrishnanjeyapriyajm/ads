import Marquee from "react-fast-marquee";

// About 2 Section 4 - Moving gallery (carousel ticker left)

const GALLERY_IMGS = [
    { src: "/assets/imgs/images/img-35.jpg", alt: "adsai" },
    { src: "/assets/imgs/images/img-36.jpg", alt: "adsai" },
    { src: "/assets/imgs/images/img-37.jpg", alt: "adsai" },
    { src: "/assets/imgs/images/img-38.jpg", alt: "adsai" },
    { src: "/assets/imgs/images/img-39.jpg", alt: "adsai" },
    { src: "/assets/imgs/images/img-40.jpg", alt: "adsai" },
    { src: "/assets/imgs/images/img-41.jpg", alt: "adsai" },
];

export default function Section4() {
    return (
        <section className="sec-4-about pt-120">
            <div
                className="moving-gallery at_fade_anim carouselTicker carouselTicker-left"
                data-delay=".5"
                data-fade-from="bottom"
                data-ease="bounce"
            >
                <Marquee
                    speed={40}
                    direction="left"
                    pauseOnHover={false}
                    gradient={false}
                    className="carouselTicker__marquee"
                >
                    <ul
                        className="wrapper-gallery carouselTicker__list scroll-move-left"
                        style={{
                            display: "flex",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                            overflow: "visible",
                            gap: "0 1.5rem",
                        }}
                    >
                        {GALLERY_IMGS.map((item, i) => (
                            <li key={i} style={{ margin: 0, float: "none" }}>
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={300}
                                    style={{ display: "block", objectFit: "cover" }} loading="lazy" />
                            </li>
                        ))}
                    </ul>
                </Marquee>
            </div>
        </section>
    );
}
