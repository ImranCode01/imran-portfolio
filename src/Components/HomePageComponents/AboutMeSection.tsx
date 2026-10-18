import { AboutMeSvg } from "./AboutMeSvg";
import { Degree } from "./Degree";

export function AboutMeSection() {
  return (
    <section className="bg-base-200/60 px-5 py-16 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
        <div className="hidden justify-center lg:flex"><AboutMeSvg /></div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-primary">A little about me</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">Imran Yaqobi</h2>
          <p className="mt-5 text-base leading-7 text-base-content/75 sm:text-lg sm:leading-8">
            I specialize in Full-Stack Development, React Development, and Modern UI Design. I focus on building responsive, visually appealing, and user-friendly websites that combine clean code with exceptional user experiences. My goal is to transform creative ideas into functional digital experiences using modern web technologies, with a strong passion for continuous learning, innovation, and creating impactful web solutions.
          </p>
          <div className="mt-8"><Degree /></div>
        </div>
      </div>
    </section>
  );
}
