import { Link } from "react-router"

export function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 s">
        <aside className="gap-0 flex flex-col">
            {/* <img className="w-[200px] p-0 m-0 h-auto" src="../../public/dark logo.png" alt="" /> */}
            <Link to="/">
            <img
                src="/dark logo.png"
                alt="Logo"
                className="w-[180px] m-0"
            />
            </Link>
            <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
            </p>
        </aside>
        <nav>
            <h6 className="footer-title text-[#2C86FE]">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
            <h6 className="footer-title text-[#2C86FE]">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
            <h6 className="footer-title text-[#2C86FE]">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        </footer>
    )
}