import { FaBriefcase, FaGraduationCap, FaLaptopCode  } from "react-icons/fa";

export function Degree() {
    return (
<div className="stats flex shadow w-full xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col">
    <div className="stat flex flex-col text-center">
        <div className="stat-figure text-[#2C86FE]">
            <FaLaptopCode className="xl:text-4xl lg:text-4xl"/>    
        </div>
        <div className="stat-title font-bold text-[16px] " >Completed Projects</div>
        <div className="stat-value xl:text-[22px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[14px]">+1</div>
    </div>

    <div className="stat flex flex-col text-center">
        <div className="stat-figure text-[#2C86FE]">
            <FaBriefcase className="xl:text-4xl lg:text-4xl"/>    
        </div>
        <div className="stat-title font-bold text-[16px] " >Years Experince</div>
        <div className="stat-value xl:text-[22px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[14px]">2+</div>
    </div>

    <div className="stat flex flex-col text-center">
        <div className="stat-figure text-[#2C86FE]">
            <FaGraduationCap className="xl:text-4xl lg:text-4xl"/>    
        </div>
        <div className="stat-title font-bold text-[16px] " >Qualification</div>
        <div className="stat-value xl:text-[22px] lg:text-[18px] md:text-[18px] sm:text-[18px] text-[14px]">Front-End Developer</div>
    </div>
</div>
    )
}