import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <ul className="navbar-container">
                <li>
                    <NavLink to="/" className="navlink">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="about" className="navlink">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="projects" className="navlink">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="contact" className="navlink">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
