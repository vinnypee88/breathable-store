import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";

const Navbar = ({ click }) => {
  const cart = useSelector(selectCart);
  const getCartCount = () => {
    return cart.reduce((totalQty, item) => Number(item.qty) + totalQty, 0);
  };

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar_logo">
        <Link className="title" to="/">
          <i className="fas fa-tshirt fa-spin"></i> Breathable Clothing
        </Link>
      </div>
      {/* links */}
      <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            {/* icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              cart
              <span className="cartlogo_badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li></li>
      </ul>
      {/* hamburgermenu mobile */}
      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
