import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiMenu } from 'react-icons/fi';
import Cart from '../Cart/Cart';

const Header = () => {
    const [openCart, setOpenCart] = useState(false);

    return (
        <header>
            <div className="fixed space-x-4 bg-white z-50 w-full h-[74px] shadow-lg text-center flex justify-between items-center px-4">
                {/* desktop */}
                <FiMenu className="h-6 w-6 md:hidden" />
                <h2 className="text-3xl">IT-COURSE</h2>
                <h3 className="hidden text-sm md:block">Categories</h3>
                <form
                    action=""
                    className="hidden bg-slate-50 md:flex border border-black rounded-full round-3xl flex-1 h-12 items-center"
                >
                    <AiOutlineSearch className="h-5 w-5 mx-4 text-gray-400" />
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for anything..."
                        autoComplete="off"
                        aria-label="Search for anything..."
                        className="bg-transparent text-sm outline-none"
                    />
                </form>
                <h3 className="hidden text-sm lg:block">Udemy Business</h3>
                <h3 className="hidden text-sm lg:block md:hidden">Teaching on Business</h3>
                <div className="flex">
                    <AiOutlineSearch className="h-6 w-6 mx-4 text-gray-400 md:hidden" />
                    <AiOutlineShoppingCart className="h-6 w-6" />
                </div>
                <div className="hidden md:flex pr-4 space-x-4 justify-end">
                    <button className="border border-black h-10 text-sm font-bold w-20 hover:bg-slate-50">
                        Log In
                    </button>
                    <button className="border bg-black text-white h-10 text-sm font-bold w-20 hover:bg-slate-800">
                        Register
                    </button>
                    <button className="border border-black h-10 flex justify-center items-center w-10 hover:bg-slate-50">
                        <AiOutlineGlobal className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
