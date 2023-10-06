import { useState } from 'react';
import { Link } from 'react-router-dom';
import server from '../../static/server';

const ForgotPassword = () => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await server.post('/api/user/forgot-password', { email });
            console.log('You should receive a mail for resetting password');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-[24px] font-semibold text-gray-800">
                    Log in to your IT-EDU account
                </h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
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
                        <div>
                            <button
                                type="submit"
                                className="w-full h-10 flex justify-center py-2 px-4 text-sm font-medium text-white bg-violet-600 hover:bg-violet-500"
                            >
                                Send
                            </button>
                        </div>

                        <div className="flex items-center ư-full">
                            <h4>Have an account ?</h4>
                            <Link to="/login" className="text-violet-800 pl-2">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
