import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const ResetPassword = () => {
    // const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Regular expression for password validation (at least 8 characters, at least 1 letter, and at least 1 digit)
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{8,}$/;

        if (!password.match(passwordRegex)) {
            setError('Mật khẩu phải có ít nhất 8 kí tự, 1 chữ số và 1 kí tự đặt biệt');
            return;
        }

        if (password !== confirmPassword) {
            setError('Mật khẩu phải trùng nhau!');
            return;
        }

        // Reset the error message and clear the form fields
        setError('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="min-h-screen bg-gray-200 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-semibold text-gray-800">THAY ĐỔI MẬT KHẨU</h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="old-password" className="block text-sm font-medium text-slate-700">
                                Mật khẩu
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
                                    className="mt-2 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700">
                                Nhập lại mật khẩu
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
                                    className="mt-2 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
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
                                className="group relative w-full h-10 flex justify-center py-2 px-4 border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                            >
                                THAY ĐỔI
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
