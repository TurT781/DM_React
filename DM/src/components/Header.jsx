import { NavLink } from "react-router-dom";

const getActiveLink = ({ isActive }) => {
    if (isActive) return { color: "#00abf0" };
  };
  
const Header = () => {
    return(

    <header className="header">
        <nav className="navLinkHeader">
            <NavLink style={getActiveLink} to="/">Homepage</NavLink>
            <NavLink style={getActiveLink} to="/launch">SpaceX</NavLink>
            <NavLink style={getActiveLink} to="/contact">Contact</NavLink>
        </nav>
    </header>
    );
};

export default Header;