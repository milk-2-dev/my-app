import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './index.css';


class Header extends Component {
    render(){
        return(
            <header>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">LOGO</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href="/">
                                Home
                            </NavItem>
                            <NavItem eventKey={2} href="/about">
                                About
                            </NavItem>
                            <NavItem eventKey={3} href="/dashboard">
                                Dashboard
                            </NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/login">
                                log in
                            </NavItem>
                            <NavItem eventKey={2} href="/signup">
                                sign up
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default Header