import { FaMoon } from "react-icons/fa";
import { Link, NavLink } from "react-router";

export function Header() {
    return (
    <div className="navbar bg-base-100 shadow-sm h-[70px] px-10">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li>
            <a>Pirtfolio</a>
            <ul className="p-2">
                <li><a>Front-end Development</a></li>
                <li><a>Back-end Development</a></li>
            </ul>
            </li>
            <li><a>Blog</a></li>
            <li><a>Contact</a></li>
        </ul>
        </div>
        <Link to="/" className=" bg-transparent border-0 shadow-none p-0 hover:bg-transparent">
        <img
            className="w-[180px]"
            src="/dark logo.png"
            alt="Logo"
        />
        </Link>
    </div>
    <div className="navbar-center hidden lg:flex font-bold">
        <ul className="menu menu-horizontal px-1">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li>
            <details>
            <summary>Portfilio</summary>
            <ul className="p-2 bg-base-100 w-50 z-1">
                <li><a>Front-end Development</a></li>
                <li><a>Back-end Development</a></li>
            </ul>
            </details>
        </li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
        </ul>
    </div>
    <div className="navbar-end gap-3">
        <a className="border border-gray-400 p-2 rounded-full border-3xl " href=""><FaMoon/> </a>
        <a className="btn bg-[#2C86FE] text-white rounded-full w-[150px] xl:flex lg:flex md:flex hidden ">Contact Us</a>
    </div>
    </div>
)}