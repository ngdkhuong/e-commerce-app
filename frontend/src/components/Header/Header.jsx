'use client';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { Avatar } from 'antd';
import CustomButton from '../custom/CustomButton';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container fluid>
                <Navbar.Brand className="d-flex align-items-center">
                    <Avatar src="" className="me-3" />
                    <Link href={'/'} className="footer-heading-color fs-bold fs-3">
                        IT-EDU
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="fs-6 text-dark text-decoration-none me-4" href="/">
                            Home
                        </Link>
                        <Link className="fs-6 text-dark text-decoration-none me-4" href="/courses">
                            Courses
                        </Link>
                        <Link className="fs-6 text-dark text-decoration-none me-4" href="/tutorials">
                            Tutorials
                        </Link>
                        <Link className="fs-6 text-dark text-decoration-none me-4" href="/dashboard">
                            Dashboard
                        </Link>
                        {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Link className="fs-6 text-dark text-decoration-none me-4" href="/signup">
                            Sign up
                        </Link>
                        <Link className="fs-6 text-dark text-decoration-none me-4" href="/login">
                            Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
