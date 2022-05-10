import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import navLinks from "./content";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white z-50 flex justify-between pt-10 pb-5 px-20">
      <div className="flex-1">
        <h1 className="text-2xl font-bold">Lucas.</h1>
      </div>
      <nav className="flex-1 font-medium">
        <ul className="flex justify-around">
          {navLinks.map(link => (
            <li key={link.label}>
              <AnchorLink className="hover:opacity-75" to={link.anchor}>
                {link.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
