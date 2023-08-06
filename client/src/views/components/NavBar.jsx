import { useState } from "react";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-white-800 text-white">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <img src={Logo} alt="TkgShop Logo" className="h-12 w-auto" />
        <button
          className="md:hidden text-white text-xl text-black"
          aria-label="Toggle mobile menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex space-x-4">
          <Link
            to="/cart"
            className="flex items-center text-white hover:text-gray-300"
          >
            <FaShoppingCart className="mr-1 text-gray-600" />
            <span className="text-gray-600">Cart</span>
          </Link>
          <Link
            to="/login"
            className="flex items-center text-white hover:text-gray-300"
          >
            <FaUser className="mr-1 text-gray-600" />
            <span className="text-gray-600">Sign in</span>
          </Link>
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden fixed top-0 right-0 h-full w-64 bg-indigo-800 z-10 transition-all duration-300`}
        >
          <button
            className="text-white absolute top-4 right-4 "
            onClick={toggleMobileMenu}
          >
            <FaTimes className="text-xl text-red-500" />
          </button>
          <div className="flex flex-col h-full py-4 px-8 text-white">
            <Link
              to="/cart"
              className="py-2 text-gray-300 hover:text-white"
              onClick={toggleMobileMenu}
            >
              <FaShoppingCart className="mr-2 inline text-gray-300" />
              Cart
            </Link>
            <Link
              to="/login"
              className="py-2 text-gray-300 hover:text-white"
              onClick={toggleMobileMenu}
            >
              <FaUser className="mr-2 inline text-gray-300" />
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
