import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../Cart/Cart';

const Header = () => {
    const [openCart, setOpenCart] = useState(false);

    return (
        <header className=" fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-gray-50">
            {/* desktop */}
            <div className="flex items-center h-full justify-between">
                <Link to="/">
                    <div className="h-10">
                        <img src="/logo.png" alt="logo" className="h-full" />
                    </div>
                </Link>
                <Link to="/categories">Categories</Link>
                <form action="" className="w-full max-w-md lg:block hidden">
                    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                        <AiOutlineSearch size={20} className="absolute ml-3" />
                        <input
                            type="text"
                            name="search"
                            placeholder="Search for anything..."
                            autoComplete="off"
                            aria-label="Search for anything..."
                            className="w-full pr-3 pl-10 py-2 font-light bg-white rounded-full border-black border-[1px] outline-none ring-gray-300 ring-2 focus:ring-gray-500 focus:ring-2"
                        />
                    </div>
                </form>

                <ul className="p-4 flex">
                    <li className="p-4">
                        <Link>Udemy Business</Link>
                    </li>
                    <li className="p-4">
                        <Link>Teaching on Business</Link>
                    </li>
                </ul>
                <div className="relative cursor-pointer mr-[15px]" onClick={() => setOpenCart(true)}>
                    <AiOutlineShoppingCart size={30} color="" />
                    <span className="absolute right-0 top-0 rounded-full w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                        {/* {cart && cart.length} */}
                    </span>
                </div>
                {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
                <Link to="/login" className="pr-[10px] ">
                    <button className="border-solid border-black border-2 px-4 py-2 text-base ">Login</button>
                </Link>
                <Link to="/register">
                    <button className="bg-black px-4 py-2 text-white text-base ">Register</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
