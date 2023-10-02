import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import server from '../../server';

const Register = () => {
    // const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const toggle = () => {
        setVisible(!visible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await server.post('/api/user/register', { email, username, password });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-[24px] font-semibold text-gray-800">Sign up and start learning</h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="fullname"
                                name="fullname"
                                required
                                placeholder="Fullname"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="text-black w-full border border-black p-3 focus:outline-none hover:bg-slate-100"
                            />
                        </div>
                        <div>
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
                            {visible === false ? (
                                <AiOutlineEye size={25} className="absolute right-3 top-3" onClick={toggle} />
                            ) : (
                                <AiOutlineEyeInvisible size={25} className="absolute right-3 top-3" onClick={toggle} />
                            )}
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex text-center">
                                <input
                                    type="checkbox"
                                    name="remember-me"
                                    id="remember-me"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Lưu mật khẩu
                                </label>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full h-10 flex justify-center py-2 px-4 text-sm font-medium text-white bg-violet-600 hover:bg-violet-500"
                            >
                                Register
                            </button>
                        </div>

                        <div className="flex items-center ư-full">
                            <h4>Already have an account?</h4>
                            <Link to="/login" className="text-violet-800 pl-2">
                                Log in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
