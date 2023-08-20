import { useState } from "react";
import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
  FaSignOutAlt,
  FaAngleDown,
} from "react-icons/fa";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const totalQuantity = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoutHandler = () => {
    console.log("logout");
  };
  return (
    <header className="bg-white-800 text-white">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <img src={Logo} alt="TkgShop Logo" className="h-12 w-auto" />
        <button
          className="md:hidden text-blue-900 text-xl text-black-500"
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
            <span className="inline-block bg-red-500 text-white w-6 h-6 px-2 py-1 flex justify-center items-center rounded-full ml-2 ">
              {totalQuantity}
            </span>
          </Link>
          {userInfo ? (
            <div className="relative group flex flex-col items-center">
              <div className="flex items-center">
                <span className="text-gray-600">{userInfo.name}</span>
                <FaAngleDown className="text-gray-600 mr-1" />
              </div>
              <div className="absolute hidden group-hover:block bg-white w-40 right-0 mt-6 py-2 rounded shadow-lg transform origin-top">
                <button
                  className="block flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={logoutHandler}
                >
                  <FaUser className="text-gray-600 mr-1" />
                  <span> Profile</span>
                </button>
                <button
                  className="block flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={logoutHandler}
                >
                  <FaSignOutAlt className="text-gray-600 mr-1" />
                  <span> Logout</span>
                </button>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center text-white hover:text-gray-300"
            >
              <FaUser className="mr-1 text-gray-600" />
              <span className="text-gray-600">Sign in</span>
            </Link>
          )}
        </div>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden fixed top-0 right-0 h-full w-64 bg-slate-900 z-10 transition-all duration-300`}
        >
          <button
            className="text-white absolute top-4 right-4 "
            onClick={toggleMobileMenu}
          >
            <FaTimes className="text-xl text-red-500" />
          </button>
          {userInfo ? (
            <div className="flex flex-col h-full py-4 px-8 text-white">
              <Link
                to="/profile"
                className="py-2 text-gray-300 hover:text-white mt-4"
                onClick={toggleMobileMenu}
              >
                <FaUser className="mr-2 inline text-gray-300" />
                Profile
              </Link>
              <Link
                to="/cart"
                className="py-2 text-gray-300 hover:text-white"
                onClick={toggleMobileMenu}
              >
                <FaShoppingCart className="mr-2 inline text-gray-300" />
                Cart
              </Link>
              <div className="mt-auto">
                <Link
                  to="/logout"
                  className="py-2 text-gray-300 hover:text-white"
                  onClick={(e) => {
                    toggleMobileMenu();
                    logoutHandler(e);
                  }}
                >
                  <FaSignOutAlt className="mr-2 inline text-gray-300" />
                  Log out
                </Link>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
