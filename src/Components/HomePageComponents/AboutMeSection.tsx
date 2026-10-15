import { AboutMeSvg } from "./AboutMeSvg";
import { Degree } from "./Degree";

export function AboutMeSection() {
    return (
    <div data-aos="zoom-in" className="hero">
        <div className="hero-content flex-col lg:flex-row py-0 gap-15">
            <AboutMeSvg />
            <div className="max-w-[50%]">
            <h1 className="text-5xl font-bold text-black text">Imran Yaqobi</h1>
            <p className="py-6">
                I specialize in Front-End Development, React Development, and Modern UI Design. I focus on building responsive, visually appealing, and user-friendly websites that combine clean code with exceptional user experiences. My goal is to transform creative ideas into functional digital experiences using modern web technologies, with a strong passion for continuous learning, innovation, and creating impactful web solutions.
            </p>
                <Degree />
            </div>
        </div>
    </div>
    )
}