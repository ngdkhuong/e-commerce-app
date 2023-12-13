'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import { Layout, message } from 'antd';
import Footer from '@/components/Footer/Footer';
import { usePathname } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';
import { useState, Suspense } from 'react';
import { Providers } from '@/Provider';
import AdminHeader from '@/components/AdminHeader/AdminHeader';
import AdminFooter from '@/components/AdminFooter/AdminFooter';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    const pathname = usePathname();

    const [messageApi, contextHolder] = message.useMessage();
    const info = () => {
        messageApi.info('Hello, Ant Design!');
    };
    const [collapsed, setCollapsed] = useState(false);

    return (
        <html lang="en">
            <body>
                <Providers>
                    <Suspense fallback={<p>Loading...</p>}>
                        <Layout>
                            {pathname.includes('/admin') && <AdminSidebar collapsed={collapsed} />}
                            <Layout>
                                {!pathname.includes('/admin') ? (
                                    <Header />
                                ) : (
                                    <AdminHeader setCollapsed={setCollapsed} collapsed={collapsed} />
                                )}
                                {children}
                                {!pathname.includes('/admin') ? <Footer /> : <AdminFooter />}
                            </Layout>
                            {contextHolder}
                        </Layout>
                    </Suspense>
                </Providers>
            </body>
        </html>
    );
}
