import SwiperDynamic from "@/shared/components/SwiperDynamic";

// Services details Section 2 - Image slider (about-me-slider-active)

const SLIDES = [
    { src: "/assets/imgs/v/v-36.webm", alt: "adsai" },
    { src: "/assets/imgs/v/v-37.webm", alt: "adsai" },
    { src: "/assets/imgs/v/v-38.webm", alt: "adsai" },
    { src: "/assets/imgs/v/v-39.webm", alt: "adsai" },
    { src: "/assets/imgs/v/v-43.webm", alt: "adsai" },
];

export default function Section2() {
    return (
        <section className="sec-2-services-details at-item-anime-area pt-100 pb-120">
            <SwiperDynamic
                className="swiper about-me-slider-active"
                slidesPerView={2}
                spaceBetween={24}
                loop
                breakpoints={{
                    576: { slidesPerView: 1, spaceBetween: 24 },
                    768: { slidesPerView: 1, spaceBetween: 24 },
                    992: { slidesPerView: 2, spaceBetween: 30 },
                }}
            >
                {SLIDES.map((slide, index) => (
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
        </section>
    );
}
