import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Counter.css";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleDoubleClick = (route) => {
        console.log(`Double clicked ${route}`);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="nav-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
                <ul>
                    <li>
                        <NavLink to="/" onClick={() => handleDoubleClick("/")} style={{ textDecoration: 'none' }} activeClassName="active-nav">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/calculator" onClick={() => handleDoubleClick("/calculator")} style={{ textDecoration: 'none' }} activeClassName="active-nav">
                            Calculator
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;