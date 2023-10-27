'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import { Button, message } from 'antd';
import CustomFooter from '@/components/Footer/CustomFooter';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    const [messageApi, contextHolder] = message.useMessage();
    const info = () => {
        messageApi.info('Hello, Ant Design!');
    };

    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <CustomFooter />
                {contextHolder}
                <Button type="primary" onClick={info}>
                    Display normal message
                </Button>
            </body>
        </html>
    );
}
