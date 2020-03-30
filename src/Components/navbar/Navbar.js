import React from "react";
import "./Navbar.scss";
import logo from "../../data/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="tours logo" />
            <ul className="nav-links">
                <li>
                    <Link to="/tours" className="nav-link">
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/tours" className="nav-link">
                        about
                    </Link>
                </li>
                <li>
                    <Link to="/tours" className="nav-link active">
                        tours
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
