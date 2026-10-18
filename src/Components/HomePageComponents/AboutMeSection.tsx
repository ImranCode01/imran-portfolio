import { AboutMeSvg } from "./AboutMeSvg";
import { Degree } from "./Degree";

export function AboutMeSection() {
    return (
    <div data-aos="zoom-in" className="hero w-full xl:mt-[-70px] lg:mt-20 md:mt-20 sm:mt-50 mt-60">
        <div className="hero-content xl:flex-row lg:flex-col py-0 xl:gap-10 lg:gap-5 ">
            <AboutMeSvg />
            <div className="xl:max-w-full">
            <h1 className="xl:text-5xl font-bold text-black text lg:text-4xl md:text-4xl sm:text-4xl text-4xl xl:text-left lg:text-left md:text-left sm:text-left text-center ">Imran Yaqobi</h1>
            <p className="py-7 xl:w-full xl:text-left lg:text-left md:text-left sm:text-left text-justify">
                I specialize in Front-End Development, React Development, and Modern UI Design. I focus on building responsive, visually appealing, and user-friendly websites that combine clean code with exceptional user experiences. My goal is to transform creative ideas into functional digital experiences using modern web technologies, with a strong passion for continuous learning, innovation, and creating impactful web solutions.
            </p>
                <Degree />
            </div>
        </div>
    </div>
    )
}