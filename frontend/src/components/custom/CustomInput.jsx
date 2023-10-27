import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function CustomInput() {
    return <Input size="large" placeholder="What do you want?" prefix={<UserOutlined />} />;
}
