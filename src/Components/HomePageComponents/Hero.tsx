import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
export function Hero() {
    return (
        <div className="hero py-15 h-[80vh] ">
        <div className="hero-content flex-col md:flex-row-reverse justify-between flex w-full xl:text-left lg:text-left md:text-left text-center    ">
            <img
            data-aos="fade-left"
            alt="Tailwind CSS hero component"
            src="/myImage.png"
            className="xl:max-w-[600px] lg:max-w-[600px] md:max-w-[500px] sm:max-w-[500px] max-w-full"/><div>

            <h1 data-aos="fade-right" className="text-4xl font-bold xl:text-5xl lg:text-4xl md:text-4xl  xl:text-left lg:text-left md:text-left sm:text-center text-center">Front-End Developer</h1>
            <p data-aos="fade-right" className="py-6 xl:text-left lg:text-left md:text-left text-center">
                Passionate Front-End Developer specializing in React, TypeScript, and Tailwind CSS. Focused on building modern, responsive, and user-friendly web experiences with clean code and creative design. Constantly learning and exploring new technologies to turn ideas into functional, visually appealing digital products.</p>
                <div data-aos="fade-right" className="flex gap-5 text-[20px] xl:justify-start lg:justify-start md:justify-start justify-center"> 
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