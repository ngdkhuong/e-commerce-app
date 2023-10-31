'use client';

import './footer.css';
import { Avatar, Col, Layout, Row } from 'antd';
import { AiFillFacebook, AiFillGithub, AiFillYoutube, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import CustomButton from '../custom/CustomButton';
import CustomInput from '../custom/CustomInput';
import Link from 'next/link';
const { Footer } = Layout;

export default function CustomFooter() {
    return (
        <Footer className="footer bg-white container-fluid">
            <Row>
                <Col span={6}>
                    <div className="footer-logo d-flex flex-column gap-3">
                        <div>
                            <Avatar src="" />
                            <h3 className="footer-heading-color">IT-EDU</h3>
                        </div>
                        <p>
                            We’re always in search for talented and motivated people. Don’t be shy introduce yourself!
                        </p>
                        <div className="social-icons d-flex gap-3">
                            <a href="https://ant.design">
                                <Avatar
                                    style={{
                                        backgroundColor: '#f66477',
                                    }}
                                    icon={<AiFillYoutube />}
                                ></Avatar>
                            </a>
                            <a href="https://ant.design">
                                <Avatar
                                    style={{
                                        backgroundColor: '#abb7e7',
                                    }}
                                    icon={<AiFillFacebook />}
                                ></Avatar>
                            </a>
                            <a href="https://ant.design">
                                <Avatar
                                    style={{
                                        backgroundColor: '#192335',
                                    }}
                                    icon={<AiFillGithub />}
                                ></Avatar>
                            </a>
                            <a href="https://ant.design">
                                <Avatar
                                    style={{
                                        backgroundColor: '#82b440',
                                    }}
                                    icon={<AiOutlineWhatsApp />}
                                ></Avatar>
                            </a>
                            <a href="https://ant.design">
                                <Avatar
                                    style={{
                                        backgroundColor: '#f56a00',
                                    }}
                                    icon={<AiOutlineInstagram />}
                                ></Avatar>
                            </a>
                        </div>
                        <CustomButton title="Contact Us" className="fit-content fw-bold mt-3 bg-" type="primary" />
                    </div>
                </Col>
                <Col span={4}>
                    <h3>Useful Links</h3>
                    <div className="mt-3 d-flex flex-column">
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            Marketplace
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            kindergarten
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            University
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            GYM Coaching
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            FAQ
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            About Us
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            Privacy policy
                        </Link>
                    </div>
                </Col>
                <Col span={4}>
                    <h3>Our Company</h3>
                    <div className="mt-3 d-flex flex-column">
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            Contact Us
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            Become Teacher
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            Blog
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            Instructor
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            Events
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            Course
                        </Link>
                        <Link className="text-decoration-none text-dark" href={'#'}>
                            Contact
                        </Link>
                    </div>
                </Col>
                <Col span={10}>
                    <div className="mt-3 flex-column">
                        <h3>Get Contact</h3>
                        <CustomButton type="link" title="Phone: 0971234810" />
                        <CustomButton type="link" title="Email: ngkhuong310702@gmail.com" />
                    </div>

                    <div className="mt-3">
                        <h4>Newsletter</h4>
                        <p>2000+ Our students are subscribe Around the World. Don’t be shy introduce yourself!</p>
                    </div>
                    <div className="mt-3 d-flex">
                        <CustomInput />
                        <CustomButton title="Subscribe" className="fit-content ps-0 rounded rounded-0" type="primary" />
                    </div>
                </Col>
            </Row>
        </Footer>
    );
}
