import { AboutSvg } from "../Components/AboutSvg";
import { Degree } from "../Components/HomePageComponents/Degree";

export function About() {
  return <main className="bg-base-100 px-5 py-14 sm:px-8 md:py-20">
    <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className="mx-auto w-full max-w-xl"><AboutSvg /></div>
      <section>
        <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">About me</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">Imran Yaqobi</h1>
        <p className="mt-6 text-base leading-7 text-base-content/75 sm:text-lg sm:leading-8">I specialize in Full-Stack Development, React Development, and Modern UI Design. I focus on building responsive, visually appealing, and user-friendly websites that combine clean code with exceptional user experiences. My goal is to transform creative ideas into functional digital experiences using modern web technologies, with a strong passion for continuous learning, innovation, and creating impactful web solutions.</p>
        <div className="mt-8"><Degree /></div>
      </section>
    </div>
  </main>;
}
