import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-zinc-200 px-20 py-4 flex justify-between items-center">
      <b className="font-bold text-2xl">Food App</b>
      <div className="flex px-2">
        <ul className="flex items-center space-x-10 text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/categories"}>Categories</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/favourites"}><FiHeart className="text-xl" /></Link>
          </li>
        </ul>
      </div>
        <div className="flex">
        <input className="outline-none border border-blue-200 box-border focus:ring-1 focus:ring-blue-400 rounded-l-md px-2 py-1.5" type="text" placeholder="Search ..." />
        <button className="px-4 py-1.5 rounded-r-md outline-none bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">Search</button>
        </div>
    </nav>
  );
};

export default Navbar;
