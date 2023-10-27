'use client';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton } from 'antd';

const { Meta } = Card;

export default function CustomCard() {
    return (
        <>
            <Card
                style={{
                    width: 300,
                    marginTop: 16,
                }}
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Skeleton loading={false} avatar active>
                    <Meta
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
                        title="Card title"
                        description="This is the description"
                    />
                </Skeleton>
            </Card>
        </>
    );
}
