import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link
                to="/"
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.25rem",
                    padding: "0 1rem",
                }}
            >
                Home
            </Link>
            <Link
                to="about"
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.25rem",
                    padding: "0 1rem",
                }}
            >
                About
            </Link>
            <Link
                to="projects"
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.25rem",
                    padding: "0 1rem",
                }}
            >
                Projects
            </Link>
            <Link
                to="contact"
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.25rem",
                    padding: "0 1rem",
                }}
            >
                Contact
            </Link>
        </div>
    );
};

export default Navbar;
