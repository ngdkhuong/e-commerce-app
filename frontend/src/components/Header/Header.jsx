'use client';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { Avatar } from 'antd';
import CustomButton from '../custom/CustomButton';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { resetState } from '@/features/User/userSlice';

export default function Header() {
    const userState = useSelector((state) => state?.user?.user);
    const router = useRouter();
    const dispatch = useDispatch();

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
                    </Nav>
                    <Nav>
                        {userState === null && (
                            <Link className="fs-6 text-dark text-decoration-none me-4" href="/signup">
                                Sign up
                            </Link>
                        )}
                        {userState !== null ? (
                            <CustomButton
                                title="Logout"
                                type="link"
                                className="text-dark"
                                onClick={() => {
                                    localStorage.clear();
                                    Cookies.remove('Bearer');
                                    dispatch(resetState())
                                    router.push("/login");
                                }}
                            />
                        ) : (
                            <Link className="fs-6 text-dark text-decoration-none me-4" href="/login">
                                Login
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
