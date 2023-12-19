'use client';

import { Layout } from 'antd';

const { Footer } = Layout;

export default function AdminFooter() {
    return (
        <Footer
            style={{
                textAlign: 'center',
                position: 'fixed',
                bottom: '0',
                right: '0',
            }}
        >
            IT-EDU ©{new Date().getFullYear()} Created by Khuong Nguyen
        </Footer>
    );
}
