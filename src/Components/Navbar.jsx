import React from "react";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { LuShoppingCart, LuUserRoundPlus } from "react-icons/lu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const favourites = useSelector((state) => state.favourites.favourites);
  const cart = useSelector((state) => state.cart.cart);

  const textLinks = [
    { name: "Home", path: "/" },
    { name: "Foods", path: "/foods" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const iconsLinks = [
    { name: <FiHeart className="text-xl" />, path: "/favourites", count: favourites.length },
    { name: <LuShoppingCart className="text-xl" />, path: "/cart", count: cart.length },
    { name: <LuUserRoundPlus className="text-xl" />, path: "/login" },
  ];

  return (
    <nav className="py-8 flex bg-white justify-between items-center fixed w-full md:px-28 z-50">
      <b className="font-bold text-2xl">Food App</b>
      <div className="flex px-2">
        <ul className="flex items-center space-x-10 text-lg">
          {textLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-[#ed3f36] font-semibold" : "hover:text-[#ed3f36] transition-colors"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-7">
        {iconsLinks.map((iconLink, index) => (
          <NavLink
            key={index}
            to={iconLink.path}
            className={({ isActive }) =>
              isActive ? "text-[#ed3f36] font-semibold" : "hover:text-[#ed3f36] transition-colors"
            }
          >
            <div className="flex relative">
              {iconLink.name}
              {iconLink.count > 0 && (
                <sup className="inline-flex items-center justify-center absolute -top-2 -right-3 w-4 h-4 rounded-full bg-red-500 text-white text-xs font-medium shadow-sm">
                  {iconLink.count}
                </sup>
              )}
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
