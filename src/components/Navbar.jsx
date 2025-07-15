import { useState } from "react";
import Menu_Logo from './../assets/burger-bar.png'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#e6e6e6]/90  opacity-75 backdrop-blur-md shadow-lg p-4">
            <div className="flex justify-between items-center text-lg mx-6 md:mx-12">
                {/* <img src={NameLogo} className='w-10' alt="Srikari"></img> */}
                <h1 className='bg-clip-text font-bold text-transparent bg-linear-to-bl from-violet-500 to-fuchsia-500 md:text-2xl'><a href="#home">SRIKARI</a></h1>
                {/* desktop menu */}
                <ul className="hidden lg:flex  gap-10">
                    <li className="hover:text-fuchsia-500"><a href="#home">Home</a></li>
                    <li className="hover:text-fuchsia-500"><a href="#about">About Me</a></li>
                    <li className="hover:text-fuchsia-500"><a href="#experience">Experience</a></li>
                    <li className="hover:text-fuchsia-500"><a href="#projects">Projects</a></li>
                    <li className="hover:text-fuchsia-500"><a href="#contact">Contact</a></li>
                </ul>
                {/* Mobile Menu Toggle */}
                <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <div className="w-6 h-6">X</div> : <img className="w-6 h-6" src={Menu_Logo} />}
                </button>
            </div>
            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <ul className="lg:hidden px-6 pt-4 pb-2 space-y-3 text-base">
                    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
                    <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
                    <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                </ul>
            )}
        </nav>


    )
}
export default Navbar;