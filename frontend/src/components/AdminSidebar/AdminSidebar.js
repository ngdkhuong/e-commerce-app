'use client';

import { UploadOutlined, UserOutlined, VideoCameraOutlined, SettingOutlined, FileAddOutlined } from '@ant-design/icons';
import { Avatar, Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation';
const { Sider } = Layout;

export default function AdminSidebar(props) {
    const { collapsed } = props;
    const router = useRouter();

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical d-flex justify-content-center align-center py-3">
                <Avatar src="" />
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                onClick={({ key }) => {
                    router.push(key);
                }}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'Tutorials',
                        children: [
                            {
                                key: '/admin/tutorials/add-tutorial-category',
                                icon: <UserOutlined />,
                                label: 'Add Tutorial Category',
                            },
                            {
                                key: '/admin/dashboard/view-tutorial-category',
                                icon: <UserOutlined />,
                                label: 'View/Edit/Delete Tut Category',
                            },
                            {
                                key: '/admin/dashboard/add-tutorials',
                                icon: <FileAddOutlined />,
                                label: 'Add Tutorials',
                            },
                            {
                                key: '/admin/dashboard/view-tutorials',
                                icon: <SettingOutlined />,
                                label: 'View/Editor/Delete Tuts',
                            },
                        ],
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
    );
}
