import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 text-xl bg-[#3c464f]">
      <div className="text-gray-400 flex  items-center gap-3">
        <NavLink
          className="text-black flex font-semibold items-center gap-3"
          to="/home"
          style={({ isActive }) => ({
            color: isActive && "#D10B0B",
          })}
        >
          RECIPE
        </NavLink>
      </div>
      <div className="flex gap-5 text-black">
        <NavLink
          className="hover:black transition font-semibold ease-in-out delay-100 hover:scale-125"
          to="/about"
          style={({ isActive }) => ({
            color: isActive && "red",
          })}
        >
          ABOUT
        </NavLink>
        <Link
          className="hover:text-black transition font-bold ease-in-out delay-100 hover:scale-125"
          to="https://github.com/ibrahim-sert" target="_blank"        >
          GITHUB
        </Link>
        <Link
          className="hover:text-black transition font-bold ease-in-out delay-100 hover:scale-125"
          to="https://www.linkedin.com/in/sert-ibrahim/" target="_blank"        >
          LINKEDIN
        </Link>
        <NavLink className="hover:text-black transition font-bold ease-in-out delay-100 hover:scale-125" to="/">LOG OUT</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
