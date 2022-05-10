import React from "react";
import { Link } from "gatsby";
import navLinks from "./content";

const Header = () => {
  return (
    <div className="flex justify-between pt-10 px-20">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Lucas.</h1>
      </div>
      <nav className="flex-1 font-medium">
        <ul className="flex justify-around">
          {navLinks.map(link => (
            <li key={link.label}>
              <Link to="/">{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
