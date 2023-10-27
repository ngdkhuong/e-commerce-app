'use client';

import { Button } from 'antd';

export default function CustomButton(props) {
    const { title, className, type } = props;

    return (
        <Button type={type} className={className} shape="round">
            {title}
        </Button>
    );
}
