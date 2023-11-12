'use client';
import { Input } from 'antd';
export default function CustomInput(props) {
    const { placeholder, prefix, className, onChange, onBlur, value, error } = props;
    return (
        <Input
            size="large"
            placeholder={placeholder}
            prefix={prefix}
            className={className}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            status={error && 'error'}
        />
    );
}
