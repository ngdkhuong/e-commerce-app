import CustomInput from './../../components/custom/CustomInput';
import CustomButton from './../../components/custom/CustomButton';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import Link from 'next/link';
import './login.css';

export default function Login() {
    return (
        <div className="container-fluid bg-white">
            <div className="row py-5">
                <div className="col-4 mx-auto py-5">
                    <h3 className="d-flex justify-content-center">Login</h3>
                    <form action="" className="form-wrapper p-4">
                        <CustomInput placeholder="Email Address" prefix={<AiOutlineMail />} />
                        <CustomInput className="mt-3" placeholder="Password" prefix={<RiLockPasswordLine />} />
                        <Link href="/forgot-password" className="text-dark text-decoration-none my-3 d-inline-block">
                            Forgot Password?
                        </Link>
                        <CustomButton title="Login" type="primary" className="w-100 d-block mb-3" />
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
