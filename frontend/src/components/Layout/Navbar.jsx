import { Link } from 'react-router-dom';
import { navItems } from '../../static/data';

const Navbar = ({ active }) => {
    return (
        <div className="block 800px:flex ">
            {navItems.map((item, index) => (
                <Link
                    to={index === 1 ? '/' : item}
                    key={index}
                    className={`${active === index + 1 ? 'text-[#17dd1f]' : 'text-black 800px:text-[#fff]'} `}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
