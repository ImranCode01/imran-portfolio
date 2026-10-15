import { FaBriefcase, FaGraduationCap, FaLaptopCode  } from "react-icons/fa";

export function Degree() {
    return (
<div className="stats shadow">
    <div className="stat flex flex-col text-center">
        <div className="stat-figure text-[#2C86FE]">
            <FaLaptopCode className="text-4xl"/>    
        </div>
        <div className="stat-title font-bold text-[17px]">Completed Projects</div>
        <div className="stat-value text-[22px]">+1</div>
    </div>

    <div className="stat flex flex-col text-center">
        <div className="stat-figure text-[#2C86FE]">
            <FaBriefcase className="text-4xl"/>    
        </div>
        <div className="stat-title font-bold text-[17px]">Years Experince</div>
        <div className="stat-value text-[22px]">2+</div>
    </div>

    <div className="stat flex flex-col text-center">
        <div className="stat-figure text-[#2C86FE]">
            <FaGraduationCap className="text-4xl"/>    
        </div>
        <div className="stat-title font-bold text-[17px]">Qualification</div>
        <div className="stat-value text-[22px]">Front-End Developer</div>
    </div>
</div>
    )
}