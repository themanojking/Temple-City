import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import { PiUserCircle } from "react-icons/pi";
import { FaFileAlt } from "react-icons/fa";
import { GiByzantinTemple } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <div className="ml-6 text-4xl font-bold">
            <GiByzantinTemple />
          </div>

          {/* Search (Tablet + Desktop) */}
          <div className="hidden md:block lg:block relative w-full max-w-xs lg:max-w-sm mx-4">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Desktop Menu (Only lg and above) */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="hover:text-gray-400 transition">Home</a>
            <a href="#" className="hover:text-gray-400 transition">All Temples</a>
            <a href="#" className="hover:text-gray-400 transition">About</a>
            <a href="#" className="hover:text-gray-400 transition">Contact</a>

            <PiUserCircle className="text-3xl cursor-pointer hover:text-gray-400 transition" />
            <FaFileAlt className="text-2xl cursor-pointer hover:text-gray-400 transition" />
          </div>

          {/* Hamburger (Mobile + Tablet) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl"
          >
            <TiThMenu />
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 px-4 py-4 space-y-4">

          {/* Search for small mobile only */}
          <div className="relative w-full md:hidden">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <a href="#" className="block hover:text-gray-400">Home</a>
          <a href="#" className="block hover:text-gray-400">All Temples</a>
          <a href="#" className="block hover:text-gray-400">About</a>
          <a href="#" className="block hover:text-gray-400">Contact</a>

          <div className="flex gap-6 pt-2">
            <PiUserCircle className="text-3xl cursor-pointer hover:text-gray-400 transition" />
            <FaFileAlt className="text-2xl cursor-pointer hover:text-gray-400 transition" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;