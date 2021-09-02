import "./Navbar.css";
import { Link } from "react-router-dom";

const navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar_logo">
        <h2>Breathable shopping Cart</h2>
      </div>
      {/* links */}
      <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            {/* icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              cart
              <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
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

export default navbar;
