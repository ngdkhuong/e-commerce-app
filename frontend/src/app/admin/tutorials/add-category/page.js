'use client';

import CustomButton from '@/components/custom/CustomButton';
import CustomInput from '@/components/custom/CustomInput';
import CustomUpload from '@/components/custom/CustomUpload';
import * as yup from 'yup';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { BiCategory } from 'react-icons/bi';

const categorySchema = yup.object({
    title: yup.string().nullable().required('Nhập tên chủ đề khóa học!'),
});

export default function AddTutorialCategory() {
    const [messageApi, contextHolder] = message.useMessage();
    const router = useRouter();
    const dispatch = useDispatch();

    const formik = useFormik({
        validationSchema: categorySchema,
        initialValues: {
            title: '',
        },
        onSubmit: (values) => {
            // dispatch(loginUser(values))
            //     .then(unwrapResult)
            //     .then((res) => {
            //         if (res.status) {
            //             messageApi
            //                 .open({
            //                     type: 'loading',
            //                     content: 'Progress..',
            //                     duration: 1.5,
            //                 })
            //                 .then(() => message.success(res.message, 1.5))
            //                 .then(() =>
            //                     message.info(`Redirecting to ${res?.role === 'user' ? 'Home' : 'Dashboard'}...`, 1.5),
            //                 )
            //                 .then(() => {
            //                     Cookies.set('Bearer', res?.token);
            //                     localStorage.setItem('user', JSON.stringify(res));
            //                     res?.role === 'user' ? router.push('/') : router.push('/admin/dashboard');
            //                 });
            //         } else {
            //             messageApi.error(res.message);
            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
        },
    });

    return (
        <main className="bg-white p-4 rounded-3">
            <h2>Thêm các chủ đề khóa học</h2>
            <div className="row">
                <div className="col-3">
                    <form className="pb-5">
                        <p className="fw-bold mt-4">Tải lên ảnh đại diện khóa học</p>
                        <CustomUpload className="mt-3" />
                        <CustomInput
                            id="tutcategory"
                            className="mt-3"
                            placeholder="Thêm tên chủ đề khóa học"
                            onChange={formik.handleChange('title')}
                            onBlur={formik.handleBlur('title')}
                            value={formik.values.title}
                            error={formik.touched.title && formik.errors.title}
                            prefix={<BiCategory />}        
                        />
                        <CustomButton
                            type="primary"
                            title="Thêm"
                            className="mt-5"
                            onSubmit={() => formik.handleSubmit()}
                        />
                    </form>
                </div>
            </div>
        </main>
    );
}
