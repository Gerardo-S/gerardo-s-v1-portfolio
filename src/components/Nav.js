import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import "../styles/Nav.css"
function Nav() {
    return (

        <NavBar collapseOnSelect expand="lg" className="navbar-light bg-info sticky-top text">

            <h1 className="navbar-brand name text-white">Gerardo Solis</h1>
            <NavBar.Toggle aria-controls="responsive-navbar-nav" />
            <NavBar.Collapse id="responsive-navbar-nav" >
                <div className="navbar-collapse nav justify-content-end" id="navbarSupportedContent">

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

            </NavBar.Collapse>

        </NavBar>




    )
};

export default Nav;