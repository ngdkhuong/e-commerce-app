'use client';

import './footer.css';
import { Avatar, Col, Layout, Row } from 'antd';
import { AiFillFacebook, AiFillGithub, AiFillYoutube, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import CustomButton from '../custom/CustomButton';
import CustomInput from '../custom/CustomInput';
const { Footer } = Layout;

export default function CustomFooter() {
    return (
        <Footer className="footer bg-white">
            <Row>
                <Col span={6}>
                    <div className="footer-logo d-flex flex-column gap-3">
                        <div>
                            <Avatar src="" />
                            <h3 className="footer-heading-color">Ryan Nguyen</h3>
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
                        <CustomButton title="Marketplace" className="fit-content ps-0" type="link" />
                        <CustomButton title="kindergarten" className="fit-content ps-0" type="link" />
                        <CustomButton title="University" className="fit-content ps-0" type="link" />
                        <CustomButton title="FAQ" className="fit-content ps-0" type="link" />
                        <CustomButton title="About Us" className="fit-content ps-0" type="link" />
                        <CustomButton title="Privacy policy" className="fit-content ps-0" type="link" />
                    </div>
                </Col>
                <Col span={4}>
                    <h3>Our Company</h3>
                    <div className="mt-3 d-flex flex-column">
                        <CustomButton title="Contact Us" className="fit-content ps-0" type="link" />
                        <CustomButton title="Become Teacher" className="fit-content ps-0" type="link" />
                        <CustomButton title="Blog" className="fit-content ps-0" type="link" />
                        <CustomButton title="Instructor" className="fit-content ps-0" type="link" />
                        <CustomButton title="Events" className="fit-content ps-0" type="link" />
                        <CustomButton title="Course" className="fit-content ps-0" type="link" />
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
                    <CustomInput placeholder="Enter Your Email Here"  />
                </Col>
            </Row>
        </Footer>
    );
}
