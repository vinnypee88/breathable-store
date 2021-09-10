import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import { logout } from "../redux/thunks/userThunk";
import { selectLoggedIn, selectUserDetails } from "../redux/slices/userSlice";

const Navbar = ({ click }) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const getCartCount = () => {
    return cart.reduce((totalQty, item) => Number(item.qty) + totalQty, 0);
  };
  const logOut = async () => {
    dispatch(logout());
  };
  const loggedIn = useSelector(selectLoggedIn);
  const user = useSelector(selectUserDetails);

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
          {" "}
          {loggedIn ? (
            <Link to="/user">
              Welcome to the Store {user.userInfo.first_name}!
            </Link>
          ) : (
            <p></p>
          )}
        </li>
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
        <li>
          {loggedIn ? (
            <Link to="/" onClick={() => logOut()}>
              🚪 Logout
            </Link>
          ) : (
            <Link to="/login" className="login_button">
              Login
            </Link>
          )}
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

export default Navbar;
