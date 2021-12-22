import React from 'react';
import { NavLink } from "react-router-dom";
import { NavBrand } from './NavBrand';
import "./Navbar.css";

export const Navbar = () => {
    // const { active } = useState(true);
    // const activeClass = () => active ? 'active' : undefined
    return (
        <nav className="nav">
            <NavBrand />
            <div className="nav-items">
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>

        </nav>
    )
}
