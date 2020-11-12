import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css"
function Nav() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-info sticky-top">
            <h1 className="navbar-brand name text-white">Gerardo Solis</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav justify-content-end" id="navbarSupportedContent">

                <ul className="nav justify-content-end">

                    <li>
                        <NavLink exact to="/contact" className="nav-link text-light" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portfolio" className="nav-link text-light" activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/about" className="nav-link text-light" activeClassName="active">
                            About
                        </NavLink>
                        
                    </li>

                </ul>

            </div>


        </nav>
    )
};

export default Nav;