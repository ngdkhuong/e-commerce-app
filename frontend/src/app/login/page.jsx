import CustomInput from './../../components/custom/CustomInput';
import CustomButton from './../../components/custom/CustomButton';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

export default function Login() {
    return (
        <div className="container-fluid bg-white">
            <div className="row mx-auto py-5">
                <div className="col-5 mx-auto">
                    <form action="" className="d-flex flex-column form-wrapper p-4 gap-3">
                        <CustomInput className="" placeholder="Email Address" prefix={<AiOutlineMail />} />
                        <CustomInput className="" placeholder="Password" prefix={<RiLockPasswordLine />} />
                        <CustomButton title="Login" type="primary" className="w-100 d-block " />
                    </form>
                </div>
            </div>
        </div>
    );
}
