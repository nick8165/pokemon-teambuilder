import React from "react";
import { NavLink } from "react-router-dom"
import { Card, Nav } from "react-bootstrap"

function NavBar() {
    
    return (
            <Card>
                <Card.Header>
                    <Nav className="justify-content-center" variant="pills">
                    <Nav.Item>
                        <Nav.Link href="/">Pokemon</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/roster">Roster</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/team">Team</Nav.Link>
                    </Nav.Item>
                    </Nav>
                </Card.Header>
            </Card>
    );
}

export default NavBar;