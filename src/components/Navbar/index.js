import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

function Navbar() {
    return (
        <div>

            <ul className="nav" id="navbar">
                <Link to="/">
                    <li className="nav-item">
                        <a className="nav-link" href="#" name="About"> About Me</a>
                    </li>
                </Link>
                <Link to="/projects">
                    <li className="nav-item">
                        <a className="nav-link" href="#" name="Projects">Projects</a>
                    </li>
                </Link>
                <Link to="/skills-awards">
                    <li className="nav-item">
                        <a className="nav-link" href="#" name="Skills/Awards">Skills/Awards</a>
                    </li>
                </Link>

            </ul>
        </div >
    )
}
export default Navbar;