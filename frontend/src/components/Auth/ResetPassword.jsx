import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import server from '../../static/server';
import { redirect, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    // const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);
    const { token } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await server.put(`/api/user/reset-password/${token}`, { password });
            // Regular expression for password validation (at least 8 characters, at least 1 letter, and at least 1 digit)
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;

            if (!password.match(passwordRegex)) {
                setError('Password must contain at least one letter, one digit, and be 8 characters long.');
                return;
            }

            if (password !== confirmPassword) {
                setError("Password don't match");
                return;
            }

            navigate('/');
            console.log(res);
        } catch (error) {
            console.log(error);
            // Reset the error message and clear the form fields
            setError('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-[24px] font-semibold text-gray-800">Reset Password</h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10">
                    <form className="space-y-2" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="old-password" className="block text-sm font-medium text-slate-700">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type={visible ? 'text' : 'password'}
                                    name="old-password"
                                    autoComplete="old-password"
                                    required
                                    value={password}
                                    placeholder="*************"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="text-black w-full border border-black p-3 focus:outline-none hover:bg-slate-100"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="hidden focus:absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="hidden focus:absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700">
                                Confirm Password
                            </label>
                            <div className="mt-1 relative">
                                <input
                                    type={visible ? 'text' : 'password'}
                                    name="confirm-password"
                                    autoComplete="current-password"
                                    required
                                    value={confirmPassword}
                                    placeholder="*************"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="text-black w-full border border-black p-3 focus:outline-none hover:bg-slate-100"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="hidden focus:absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="hidden focus:absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )}
                            </div>
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full h-10 flex justify-center py-2 px-4 border-transparent text-sm font-medium text-white bg-violet-600 hover:bg-violet-5000"
                            >
                                Change Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
