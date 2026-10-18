import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ContactSvg } from "../Components/ContactSvg";

const profiles = [
  { label: "GitHub", href: "https://github.com/ImranCode01", icon: <FaGithub /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/imran-undefined-53296232a/", icon: <FaLinkedinIn /> },
  { label: "Instagram", href: "https://instagram.com/imranyaq0bi?rpxt=aDN4a2QwNjNxcm05", icon: <FaInstagram /> },
  { label: "Facebook", href: "https://www.facebook.com/iyaqobi", icon: <FaFacebookF /> },
];

export function Contact() {
  return <main className="bg-base-100 px-5 py-14 sm:px-8 md:py-20">
    <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <section>
        <p className="text-sm font-bold uppercase tracking-[.18em] text-primary">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-base-content sm:text-5xl">Let’s connect</h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-base-content/75 sm:text-lg sm:leading-8">You can find me on these social platforms. Feel free to reach out and say hello.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          {profiles.map(({ label, href, icon }) => <a key={label} className="btn btn-outline rounded-full" href={href} target="_blank" rel="noreferrer"><span aria-hidden="true">{icon}</span>{label}</a>)}
        </div>
      </section>
      <div className="mx-auto w-full max-w-xl"><ContactSvg /></div>
    </div>
  </main>;
}
