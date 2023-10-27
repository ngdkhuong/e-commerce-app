'use client';

import './footer.css';
import { Avatar, Col, Layout, Row } from 'antd';
const { Footer } = Layout;

export default function CustomFooter() {
    return (
        <Footer className="footer">
            <Row>
                <Col span={6}>
                    <div className="footer-logo d-flex gap-3">
                        <Avatar src="" />
                        <h3 className="comp-name">Ryan Nguyen</h3>
                        <p>
                            We’re always in search for talented and motivated people. Don’t be shy introduce yourself!
                        </p>
                        <div className="so"></div>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="d-flex gap-3">
                        <h3>Useful Links</h3>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="d-flex gap-3">
                        <h3>Our Company</h3>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="d-flex gap-3">
                        <h3>Get Contact</h3>
                    </div>
                </Col>
            </Row>
        </Footer>
    );
}
