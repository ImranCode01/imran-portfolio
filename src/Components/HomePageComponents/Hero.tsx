import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ImranCode01", icon: <FaGithub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/imran-undefined-53296232a/", icon: <FaLinkedinIn /> },
  { label: "Instagram", href: "https://instagram.com/imranyaq0bi?rpxt=aDN4a2QwNjNxcm05", icon: <FaInstagram /> },
  { label: "Facebook", href: "https://www.facebook.com/iyaqobi", icon: <FaFacebookF /> },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-base-100">
      <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.1fr_.9fr] md:py-20 lg:gap-16 lg:px-10">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Hello, I’m Imran Yaqobi</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-base-content sm:text-5xl lg:text-6xl">Full-Stack Developer</h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-base-content/70 sm:text-lg sm:leading-8 md:mx-0">
            Passionate Full-Stack Developer specializing in React, TypeScript, and Tailwind CSS. Focused on building modern, responsive, and user-friendly web experiences with clean code and creative design. Constantly learning and exploring new technologies to turn ideas into functional, visually appealing digital products.
          </p>
          <div className="mt-7 flex justify-center gap-3 md:justify-start" aria-label="Social profiles">
            {socialLinks.map(({ label, href, icon }) => <a key={label} className="btn btn-ghost btn-circle text-lg text-base-content/75 transition hover:bg-primary/10 hover:text-primary" href={href} target="_blank" rel="noreferrer" aria-label={label}>{icon}</a>)}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <Link to="/contact" className="btn btn-primary rounded-full px-8 text-white">Get in touch</Link>
            <Link to="/about" className="btn btn-outline rounded-full px-8">More about me</Link>
          </div>
        </div>
        <div className="order-1 mx-auto w-full max-w-[420px] md:order-2 md:max-w-none">
          <img src="/myImage.png" alt="Imran Yaqobi, full-stack developer" className="mx-auto block h-auto w-full max-w-[540px] object-contain" />
        </div>
      </div>
    </section>
  );
}
