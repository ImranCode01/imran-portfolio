export function Hero() {
    return (
        <div className="hero py-15">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between flex w-full">
            <img
            alt="Tailwind CSS hero component"
            src="../../../public/me.png" 
            className="max-w-xl  "/><div>

            <h1 className="text-5xl font-bold">Front-End Developer</h1>
            <p className="py-6 w-[550px]">
                Passionate Front-End Developer specializing in React, TypeScript, and Tailwind CSS. Focused on building modern, responsive, and user-friendly web experiences with clean code and creative design. Constantly learning and exploring new technologies to turn ideas into functional, visually appealing digital products.</p>
            <button className="btn bg-[#2C86FE] text-white rounded-full w-[200px]">Read More</button>
            </div>
        </div>
        </div>
)}