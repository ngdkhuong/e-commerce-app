import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
    const [openCart, setOpenCart] = useState(false);

    return (
        <header className=" fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-gray-50">
            {/* desktop */}
            <div className="max-w-7xl flex items-center h-full justify-between">
                <Link to="/">
                    <div className="h-10">
                        <img src="/logo.png" alt="logo" className="h-full" />
                    </div>
                </Link>

                <div className="flex items-center gap-4 md:gap-7">
                    <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/products">Sản phẩm</Link>
                        <Link to="/about">Về chúng tôi</Link>
                        <Link to="/contact">Liên hệ</Link>
                        <Link to="/private">Chính sách</Link>
                    </nav>
                    <div className="text-2xl text-slate-600 relative">
                        <div className="relative cursor-pointer mr-[15px]" onClick={() => setOpenCart(true)}>
                            <AiOutlineShoppingCart size={30} color="" />
                            <span className="absolute right-0 top-0 rounded-full w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                                {/* {cart && cart.length} */}
                            </span>
                        </div>
                    </div>
                    {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
                </div>
            </div>
        </header>
    );
};

export default Header;
