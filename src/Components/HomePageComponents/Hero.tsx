import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaTiktok, FaTwitter, FaEnvelope } from "react-icons/fa";
export function Hero() {
    return (
        <div className="hero py-15 h-[80vh] ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between flex w-full ">
            <img
            data-aos="fade-left"
            alt="Tailwind CSS hero component"
            src="../../../public/me.png" 
            className="max-w-[600px]"/><div>

            <h1 data-aos="fade-right" className="text-5xl font-bold">Front-End Developer</h1>
            <p data-aos="fade-right" className="py-6 ">
                Passionate Front-End Developer specializing in React, TypeScript, and Tailwind CSS. Focused on building modern, responsive, and user-friendly web experiences with clean code and creative design. Constantly learning and exploring new technologies to turn ideas into functional, visually appealing digital products.</p>
                <div data-aos="fade-right" className="flex gap-5 text-[20px]"> 
                    <a className="hover:text-[#2C86FE]" target="_blank" href="https://github.com/ImranCode01"><FaGithub /></a>
                    <a className="hover:text-[#2C86FE]" target="_blank" href="https://www.linkedin.com/in/imran-undefined-53296232a/"><FaLinkedinIn/></a>
                    <a className="hover:text-[#2C86FE]" target="_blank" href="https://instagram.com/imranyaq0bi?rpxt=aDN4a2QwNjNxcm05"><FaInstagram/></a>
                    <a className="hover:text-[#2C86FE]" target="_blank" href="https://www.facebook.com/iyaqobi"><FaFacebookF/></a>
                    <a className="hover:text-[#2C86FE]" target="_blank" href="#"><FaTiktok/></a>
                    <a className="hover:text-[#2C86FE]" target="_blank" href="#"><FaEnvelope/></a>
                    </div>
            <button data-aos="fade-right" className="mt-8 btn bg-[#2C86FE] text-white rounded-full w-[200px]">Get Started</button>
            </div>
        </div>
        </div>

        
)}