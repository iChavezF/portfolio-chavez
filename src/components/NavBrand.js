import React from 'react'
import logo from '../assets/svg/rayo.svg';
import './NavBrand.css';

export const NavBrand = () => {
    return (
        <div className="nav-brand">
            <img className="brand-logo" src={logo} alt="rayo logo"></img>
            <h1>jeckefe</h1>
        </div>
    )
}
