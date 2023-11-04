import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Button, theme } from 'antd';
const { Header } = Layout;

export default function AdminHeader(props) {
    const { setCollapsed, collapsed } = props;

    return (
        <Header style={{ padding: 0, background: 'white' }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    );
}
