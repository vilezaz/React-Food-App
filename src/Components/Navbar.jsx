import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHeart, FiMenu, FiX } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Store/Slices/Auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const favourites = useSelector((state) => state.favourites.favourites);
  const cart = useSelector((state) => state.cart.cart);
  const { user } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const textLinks = [
    { name: "Home", path: "/" },
    { name: "Foods", path: "/foods" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const iconsLinks = [
    {
      name: <FiHeart className="text-xl" />,
      path: "/favourites",
      count: favourites.length,
    },
    {
      name: <LuShoppingCart className="text-xl" />,
      path: "/cart",
      count: cart.length,
    },
  ];

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        toast.success("Logout successful!");
        setIsMenuOpen(false);
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 md:py-8 bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <b onClick={() => navigate("/")} className="font-bold cursor-pointer text-xl md:text-2xl">CraveOn</b>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8 text-lg">
              {textLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ed3f36] font-semibold"
                        : "hover:text-[#ed3f36] transition-colors"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center space-x-6">
              {iconsLinks.map((iconLink, index) => (
                <NavLink
                  key={index}
                  to={iconLink.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#ed3f36] font-semibold"
                      : "hover:text-[#ed3f36] transition-colors"
                  }
                >
                  <div className="relative">
                    {iconLink.name}
                    {iconLink.count > 0 && (
                      <span className="absolute -top-2 -right-3 w-4 h-4 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                        {iconLink.count}
                      </span>
                    )}
                  </div>
                </NavLink>
              ))}
              
              {user?.username ? (
                <button
                  onClick={handleLogout}
                  className="border-2 text-[#ed3f36] border-[#ed3f36] font-bold py-1 px-4 rounded hover:bg-[#ed3f36] hover:text-white transition-colors"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="border-2 text-[#ed3f36] border-[#ed3f36] font-bold py-1 px-4 rounded hover:bg-[#ed3f36] hover:text-white transition-colors"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {iconsLinks.map((iconLink, index) => (
              <NavLink
                key={index}
                to={iconLink.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#ed3f36] font-semibold"
                    : "hover:text-[#ed3f36] transition-colors"
                }
              >
                <div className="relative">
                  {iconLink.name}
                  {iconLink.count > 0 && (
                    <span className="absolute -top-2 -right-3 w-4 h-4 bg-red-500 text-white text-xs font-medium rounded-full flex items-center justify-center">
                      {iconLink.count}
                    </span>
                  )}
                </div>
              </NavLink>
            ))}
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-[#ed3f36] focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {textLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-1 rounded-md text-base font-medium ${
                      isActive
                        ? "text-[#ed3f36] font-semibold"
                        : "text-gray-700 hover:text-[#ed3f36] transition-colors"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              {user?.username ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-base font-medium text-[#ed3f36] hover:bg-gray-50 rounded-md"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-1.5 text-base bg-white border-2 flex justify-center items-center border-[#ed3f36] font-medium text-[#ed3f36] hover:bg-gray-50 rounded-md"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;