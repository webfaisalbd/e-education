// import files 
import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="fw-bold">E-education</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Stack direction="horizontal" gap={5}>
                                <NavLink
                                    to="/home"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/allservices"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}
                                >
                                    All Services
                                </NavLink>
                                <NavLink
                                    to="/livesession"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}
                                >
                                    Live Session
                                </NavLink>

                                <NavLink
                                    to="/about"
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "blue"
                                    }}
                                >
                                    About us
                                </NavLink>
                            </Stack>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;