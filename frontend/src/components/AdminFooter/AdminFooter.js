'use client';

import { Layout } from 'antd';

const { Footer } = Layout;

import * as yup from 'yup';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

const categorySchema = yup.object({
    title: yup.string().nullable().required('Nhập tên chủ đề khóa học!'),
});

export default function AdminFooter() {
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();
    const dispatch = useDispatch();

    const formik = useFormik({
        validationSchema: categorySchema,
        initialValues: {
            title: ""
        },
        onSubmit: (values) => {
            dispatch(loginUser(values))
                .then(unwrapResult)
                .then((res) => {
                    if (res.status) {
                        messageApi
                            .open({
                                type: 'loading',
                                content: 'Progress..',
                                duration: 1.5,
                            })
                            .then(() => message.success(res.message, 1.5))
                            .then(() =>
                                message.info(`Redirecting to ${res?.role === 'user' ? 'Home' : 'Dashboard'}...`, 1.5),
                            )
                            .then(() => {
                                Cookies.set('Bearer', res?.token);
                                localStorage.setItem('user', JSON.stringify(res));
                                res?.role === 'user' ? router.push('/') : router.push('/admin/dashboard');
                            });
                    } else {
                        messageApi.error(res.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    });

    return (
        <Footer
            style={{
                textAlign: 'center',
                position: 'fixed',
                bottom: '0',
                right: '0',
            }}
        >
            IT-EDU ©{new Date().getFullYear()} Created by Khuong Nguyen
        </Footer>
    );
}
