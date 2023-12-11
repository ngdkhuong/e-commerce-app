'use client';

import CustomInput from './../../components/custom/CustomInput';
import CustomButton from './../../components/custom/CustomButton';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { loginUser } from '@/features/User/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useRouter } from 'next/navigation';
import { message } from 'antd';
import * as yup from 'yup';
import Link from 'next/link';
import './login.css';
import Cookies from 'js-cookie';

const loginSchema = yup.object({
    email: yup.string().email('Email should be valid').required('Email Address is Required'),
    password: yup.string().nullable().required('Password is Required'),
});

export default function Login() {
    const [messageApi, contextHolder] = message.useMessage();

    const router = useRouter();

    const dispatch = useDispatch();

    const formik = useFormik({
        validationSchema: loginSchema,
        initialValues: {
            email: '',
            password: '',
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
        <div className="container-fluid bg-white">
            {contextHolder}
            <div className="row py-5">
                <div className="col-4 mx-auto py-5">
                    <h3 className="d-flex justify-content-center">Login</h3>
                    <form action="" onSubmit={formik.handleSubmit} className="form-wrapper p-4">
                        <CustomInput
                            placeholder="Email Address"
                            prefix={<AiOutlineMail />}
                            onChange={formik.handleChange('email')}
                            onBlur={formik.handleBlur('email')}
                            value={formik.values.email}
                            error={formik.touched.email && formik.errors.email}
                        />
                        <CustomInput
                            className="mt-3"
                            placeholder="Password"
                            prefix={<RiLockPasswordLine />}
                            onChange={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                            value={formik.values.password}
                            error={formik.touched.password && formik.errors.password}
                        />
                        <Link href="/forgot-password" className="text-dark text-decoration-none my-3 d-inline-block">
                            Forgot Password?
                        </Link>
                        <CustomButton
                            title="Login"
                            type="primary"
                            className="w-100 d-block mb-3"
                            onClick={() => formik.handleSubmit()}
                        />
                        <div>
                            <Link href="/signup" className="text-dark text-decoration-none text-center">
                                Do you not have an Account? <b>Sign up</b>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
