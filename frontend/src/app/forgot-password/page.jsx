'use client';

import CustomInput from './../../components/custom/CustomInput';
import CustomButton from './../../components/custom/CustomButton';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
    const router = useRouter();

    return (
        <div className="container-fluid bg-white">
            <div className="row py-5">
                <div className="col-4 mx-auto py-5">
                    <h3 className="d-flex justify-content-center">Forgot Password</h3>
                    <form action="" className="form-wrapper p-4">
                        <CustomInput placeholder="Email Address" prefix={<AiOutlineMail />} />
                        <CustomButton
                            title="Proceed"
                            type="primary"
                            className="w-100 d-block my-3"
                            onClick={() => router.push('/reset-password')}
                        />
                        <div className="my-3 d-flex justify-content-center">
                            <Link href="/login" className="text-dark text-decoration-none text-center">
                                Go to <b>Login</b>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
