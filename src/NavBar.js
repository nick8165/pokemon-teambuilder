import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    
    return (
        <div id="nav">
            <nav className="nav">
                <NavLink  to="/" className="link">Pokemon</NavLink>
                <NavLink to="/roster" className="link">Roster</NavLink>
                <NavLink to="/team" className="link">Team</NavLink>
            </nav>
        </div>
    );
}

export default NavBar;