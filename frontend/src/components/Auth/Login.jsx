import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
// import { toast } from 'react-toastify';
import server from '../../static/server';

const Login = () => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    };

    // auth gg complete
    const authGoogle = (e) => {
        e.preventDefault();
        window.open('http://localhost:4000/google', '_self');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await server.post('/api/user/login', { email, password });

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-[24px] font-semibold text-gray-800">
                    Log in to your IT-EDU account
                </h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 space-y-2">
                    <div className="relative">
                        <FcGoogle size={25} className="absolute left-3 top-3" />

                        <button
                            type="submit"
                            className="w-full border border-black p-3 focus:outline-none text-left pl-10 hover:bg-slate-100"
                            onClick={authGoogle}
                        >
                            Continue with Google
                        </button>
                    </div>
                    <div className="relative">
                        <AiFillFacebook size={25} fill={'blue'} className="absolute left-3 top-3" />
                        <Link to="#">
                            <button className="w-full border border-black p-3 focus:outline-none text-left pl-10 ">
                                Continue with Google
                            </button>
                        </Link>
                    </div>
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        <div className="">
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-black w-full border border-black p-3 focus:outline-none hover:bg-slate-100"
                            />
                        </div>
                        <div className="relative ">
                            <input
                                type={visible ? 'text' : 'password'}
                                name="password"
                                required
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="text-black w-full border border-black p-3 focus:outline-none hover:bg-slate-100"
                            />
                            {visible ? (
                                <AiOutlineEyeInvisible
                                    size={25}
                                    className={'hidden focus:absolute right-3 top-3'}
                                    onClick={toggle}
                                />
                            ) : (
                                <AiOutlineEye
                                    size={25}
                                    className={'hidden focus:absolute right-3 top-3'}
                                    onClick={toggle}
                                />
                            )}
                        </div>

                        <div className="flex items-center justify-center">
                            or
                            <Link className="pl-2 font-medium underline text-violet-600" to="/forgot-password">
                                Forgot password
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-10 flex justify-center py-2 px-4 text-sm font-medium text-white bg-violet-600 hover:bg-violet-500"
                        >
                            Log in
                        </button>

                        <div className="flex items-center ư-full">
                            <h4>Don{"'"}t have an account?</h4>
                            <Link to="/register" className="text-violet-800 pl-2">
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
