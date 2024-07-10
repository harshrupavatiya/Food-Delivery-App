import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import './Header.css';

const Header = () => {

    const cartItems = useSelector((store) => store.cart.items);
    
    return (
        <div className=" px-24 flex justify-between items-center bg-green-100">
            <div className="w-20 ">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryJMhpVWjGlzClh4AlDn-PhtE9gweQhqAuw&s" alt="logo" className="logo" />
            </div>

            <div className="nav-container">
                <ul  className="flex w-96 justify-between text-lg">
                    <li><Link className="reset" to={"/"}>Home</Link></li>
                    <li><Link className="reset" to={"/about"}>About Us</Link></li>
                    <li><Link className="reset" to={"/contact"}>Contact</Link></li>
                    <li><Link className="reset" to={"/cart"}>🛒 ({
                        cartItems.length === 1 ? `${cartItems.length} - Item` : `${cartItems.length} - Items`
                    })</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;