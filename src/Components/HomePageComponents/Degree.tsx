import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";

const stats = [
  { label: "Completed projects", value: "+1", icon: <FaLaptopCode /> },
  { label: "Years experience", value: "2+", icon: <FaBriefcase /> },
  { label: "Qualification", value: "Full-Stack Developer", icon: <FaGraduationCap /> },
];

export function Degree() {
  return <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
    {stats.map(({ label, value, icon }) => <div key={label} className="rounded-2xl border border-base-300 bg-base-100 p-4 text-center shadow-sm sm:p-5">
      <div className="mb-3 flex justify-center text-2xl text-primary" aria-hidden="true">{icon}</div>
      <div className="text-xs font-semibold uppercase tracking-wide text-base-content/60">{label}</div>
      <div className="mt-2 text-lg font-bold leading-snug text-base-content">{value}</div>
    </div>)}
  </div>;
}
