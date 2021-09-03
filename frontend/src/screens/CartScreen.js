import "./CartScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//components
import CartItem from "../components/CartItem";
import {
  removeFromCartRedux,
  selectCart,
  updateCartQtyRedux,
} from "../redux/slices/cartSlice";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const qtyChangeHandler = (id, qty) => {
    dispatch(updateCartQtyRedux({ id, qty }));
  };

  const removeFromCart = (id) => {
    dispatch(removeFromCartRedux({ id }));
  };

  const getCartCount = () => {
    return cart.reduce((totalQty, item) => Number(item.qty) + totalQty, 0);
  };

  const getCartTotalPrice = () => {
    return cart.reduce(
      (totalPrice, item) => Number(item.qty) * Number(item.price) + totalPrice,
      0
    );
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen_left">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <div>
            Cart Empty <Link to="/">Go To Store</Link>
          </div>
        ) : (
          cart.map((item) => {
            return (
              <CartItem
                item={item}
                key={item.id}
                qtyChangeHandler={qtyChangeHandler}
                removeFromCart={removeFromCart}
              />
            );
          })
        )}
      </div>
      <div className="cartscreen_right">
        <div className="cartscreen_info">
          <p>Subtotal ({getCartCount()}) items</p>
          <p>${getCartTotalPrice().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
