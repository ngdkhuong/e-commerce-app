'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import { Button, message } from 'antd';
import Footer from '@/components/Footer/Footer';
import { usePathname } from 'next/navigation';
import AdminFooter from '@/components/AdminFooter/AdminFooter';
import AdminHeader from '@/components/AdminHeader/AdminHeader';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    const pathname = usePathname();

    const [messageApi, contextHolder] = message.useMessage();
    const info = () => {
        messageApi.info('Hello, Ant Design!');
    };

    console.log(pathname);

    return (
        <html lang="en">
            <body>
                {pathname !== '/admin/dashboard' ? <Header /> : <AdminHeader />}
                {children}
                {pathname !== '/admin/dashboard' ? <Footer /> : <AdminFooter />}
                {contextHolder}
            </body>
        </html>
    );
}
