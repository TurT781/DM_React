import React from "react";
import { NavLink } from "react-router-dom";

const getActiveLink = ({ isActive }) => {
    if (isActive) return { color: "#00abf0" };
  };
  
const Header = () => {
    return(

    <header className="header">
        <nav className="navLinkHeader">
            <ul className="ulHeader">
                <li>
                    <NavLink style={getActiveLink} to="/">Homepage</NavLink>
                </li>
                <li>
                    <NavLink style={getActiveLink} to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink style={getActiveLink} to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;