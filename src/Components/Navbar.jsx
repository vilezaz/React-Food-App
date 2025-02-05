import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { LuShoppingCart, LuUserRoundPlus } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Store/Slices/Auth";

const Navbar = () => {
  const favourites = useSelector((state) => state.favourites.favourites);
  const cart = useSelector((state) => state.cart.cart);
  const { user } = useSelector((state) => state.auth);
  const [logoutBtn, setLogoutBtn] = useState(false);
  const dispatch = useDispatch();

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

  const showLogoutBtn = () => {
    setLogoutBtn(!logoutBtn);
  };

  const handleLogoutBtn = () => {
    dispatch(logoutUser());
    setLogoutBtn(false);
  };

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
                  isActive
                    ? "text-[#ed3f36] font-semibold"
                    : "hover:text-[#ed3f36] transition-colors"
                }>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-7 items-center">
        {iconsLinks.map((iconLink, index) => (
          <NavLink
            key={index}
            to={iconLink.path}
            className={({ isActive }) =>
              isActive
                ? "text-[#ed3f36] font-semibold"
                : "hover:text-[#ed3f36] transition-colors"
            }>
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

        <div className="relative">
          {user ? (
            <span
              className="font-semibold select-none cursor-pointer text-lg text-[#ed3f36]"
              onClick={showLogoutBtn}>
              {user.username}
            </span>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-[#ed3f36] font-semibold"
                  : "hover:text-[#ed3f36] transition-colors"
              }>
              <LuUserRoundPlus className="text-xl" />
            </NavLink>
          )}
          {logoutBtn && (
            <div className="absolute top-8 right-[-8px]">
              <button
                onClick={handleLogoutBtn}
                className="border-2 text-[#ed3f36] border-[#ed3f36] cursor-pointer font-bold py-1 px-4 rounded animate-pulse hover:bg-[#ed3f36] hover:text-white hover:shadow-xl">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
