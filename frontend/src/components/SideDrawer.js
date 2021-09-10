import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
import { selectLoggedIn, selectUserDetails } from "../redux/slices/userSlice";
import { logout } from "../redux/thunks/userThunk";

const SideDrawer = ({ show, click }) => {
  // ------------------------------------------
  // this determines the style used based on the "show" logic
  const sideDrawerClass = ["sidedrawer"];

  if (show) {
    sideDrawerClass.push("show");
  }
  // ------------------------------------------

  const loggedIn = useSelector(selectLoggedIn);
  const cart = useSelector(selectCart);
  const getCartCount = () => {
    return cart.reduce((totalQty, item) => Number(item.qty) + totalQty, 0);
  };
  const dispatch = useDispatch();
  const logOut = async () => {
    dispatch(logout());
  };
  const user = useSelector(selectUserDetails);
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer_links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer_cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
        {loggedIn ? (
          <>
            <li>
              {" "}
              <Link to="/user">Hello {user.userInfo.first_name}!</Link>
            </li>

            <li>
              {" "}
              <Link to="/" onClick={() => logOut()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <li>
            {" "}
            <Link to="/login" className="login_button">
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideDrawer;
