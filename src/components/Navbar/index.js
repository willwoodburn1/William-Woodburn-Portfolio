import React from "react";
import "./style.css"

function Navbar() {
    return (
        <div>

            <ul className="nav" id="navbar">
                <li className="nav-item">
                    <a className="nav-link" href="#"> About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>

            </ul>
        </div>
    )
}
export default Navbar;