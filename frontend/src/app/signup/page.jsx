'use client';

import CustomInput from './../../components/custom/CustomInput';
import CustomButton from './../../components/custom/CustomButton';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { message } from 'antd';
import * as yup from 'yup';
import Link from 'next/link';
import { registerUser } from '@/features/User/userSlice';

const signUpSchema = yup.object({
    username: yup.string().nullable().required('Username is Required'),
    email: yup.string().email('Email Should be Valid').required('Email is Required'),
    password: yup.string().nullable().required('Password is Required'),
});

export default function Signup() {
    const [messageApi, contextHolder] = message.useMessage();

    const router = useRouter();

    const dispatch = useDispatch();

    const formik = useFormik({
        validationSchema: signUpSchema,
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            dispatch(registerUser(values))
                .then(unwrapResult)
                .then((res) => {
                    if (res.status) {
                        messageApi.success(res.message);
                        router.push('/login');
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
                    <h3 className="d-flex justify-content-center">Create An Account</h3>
                    <form action="" className="form-wrapper p-4">
                        <CustomInput
                            placeholder="Username"
                            onChange={formik.handleChange('username')}
                            onBlur={formik.handleBlur('username')}
                            value={formik.values.username}
                            error={formik.touched.username && formik.errors.username}
                        />
                        <CustomInput
                            placeholder="Email Address"
                            className="mt-3"
                            onChange={formik.handleChange('email')}
                            onBlur={formik.handleBlur('email')}
                            value={formik.values.email}
                            error={formik.touched.email && formik.errors.email}
                        />
                        <CustomInput
                            className="mt-3"
                            placeholder="Password"
                            onChange={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                            value={formik.values.password}
                            error={formik.touched.password && formik.errors.password}
                        />
                        <CustomButton
                            title="Sign Up"
                            type="primary"
                            className="w-100 d-block my-3"
                            onClick={() => formik.handleSubmit()}
                        />
                        <div>
                            <Link href="/login" className="text-dark text-decoration-none text-center">
                                Do you already have an Account? <b>Login</b>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
