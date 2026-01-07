import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-18">

          {/* Logo */}
          <div className="text-xl font-bold">
            MyLogo
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 gap-14">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <TiThMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-3">
          <a href="#" className="block hover:text-gray-400">Home</a>
          <a href="#" className="block hover:text-gray-400">About</a>
          <a href="#" className="block hover:text-gray-400">Services</a>
          <a href="#" className="block hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
