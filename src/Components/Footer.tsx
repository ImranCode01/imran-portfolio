import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from "react-router";

export function Footer({ theme }: { theme: string }) {
  return (
    <footer className="border-t border-base-300 bg-base-200/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] md:py-14">
        <div className="space-y-4">
          <Link to="/" aria-label="Imran Yaqobi home"><img src={theme === "dark" ? "/white logo.png" : "/dark logo.png"} alt="Imran Yaqobi" className="w-40" /></Link>
          <p className="max-w-sm text-sm leading-6 text-base-content/70">Full-stack developer focused on thoughtful, responsive web experiences.</p>
          <div className="flex gap-3 text-lg" aria-label="Social links">
            <a className="btn btn-ghost btn-circle btn-sm" href="https://github.com/ImranCode01" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a className="btn btn-ghost btn-circle btn-sm" href="https://www.linkedin.com/in/imran-undefined-53296232a/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a className="btn btn-ghost btn-circle btn-sm" href="https://instagram.com/imranyaq0bi?rpxt=aDN4a2QwNjNxcm05" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a className="btn btn-ghost btn-circle btn-sm" href="https://www.facebook.com/iyaqobi" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>
        <nav className="flex flex-col items-start gap-3" aria-label="Footer navigation">
          <h2 className="mb-1 text-sm font-bold uppercase tracking-wider text-primary">Explore</h2>
          <NavLink className="link link-hover text-sm" to="/">Home</NavLink>
          <NavLink className="link link-hover text-sm" to="/about">About</NavLink>
          <NavLink className="link link-hover text-sm" to="/contact">Contact</NavLink>
        </nav>
        <div className="flex flex-col items-start gap-3">
          <h2 className="mb-1 text-sm font-bold uppercase tracking-wider text-primary">Get in touch</h2>
          <Link className="link link-hover text-sm" to="/contact">Let’s talk about your next project</Link>
          <span className="mt-3 text-xs text-base-content/55">© {new Date().getFullYear()} Imran Yaqobi</span>
        </div>
      </div>
    </footer>
  );
}
