import { Input } from 'antd';

export default function CustomInput(props) {
    const { placeholder, prefix } = props;

    return <Input size="large" placeholder={placeholder} prefix={prefix} />;
}
