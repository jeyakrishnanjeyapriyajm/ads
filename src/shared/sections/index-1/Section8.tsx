import OdometerCounter from "@/shared/elements/OdometerCounter";

const STATS = [
    { count: 50, suffix: "+", label: "AI Campaigns Delivered" },
    { count: 25, suffix: "+", label: "Brands Supported" },
    { count: 10, suffix: "K+", label: "Leads Generated" },
    { count: 5, suffix: "M+", label: "Ad Impressions Reached" },
    { count: 98, suffix: "%", label: "Client Satisfaction Rate" },
];

export default function Section8() {
    return (
        <div className="container-2200">
            <section className="at-sec8-area pt-90 pb-90 bg-[#04151e] text-white rounded-5 mx-lg-3 mx-2 mt-10">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex flex-wrap justify-content-lg-between justify-content-around align-items-center gap-4">
                                {STATS.map((stat) => (
                                    <div key={stat.label}>
                                        <h1>
                                            <OdometerCounter count={stat.count} suffix={stat.suffix} className="text-nowrap" />
                                        </h1>
                                        <p>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
