'use client';

import CustomInput from './../../components/custom/CustomInput';
import CustomButton from './../../components/custom/CustomButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiLockPasswordLine } from 'react-icons/ri';

export default function ResetPassword() {
    const router = useRouter();

    return (
        <div className="container-fluid bg-white">
            <div className="row py-5">
                <div className="col-4 mx-auto py-5">
                    <h3 className="d-flex justify-content-center">Reset Password</h3>
                    <form action="" className="form-wrapper p-4">
                        <CustomInput placeholder="Password" prefix={<RiLockPasswordLine />} />
                        <CustomButton title="Reset Password" type="primary" className="w-100 d-block my-3" />
                    </form>
                </div>
            </div>
        </div>
    );
}
