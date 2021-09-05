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

  const checkout = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => console.log(e.message));
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
          <form>
            <button onClick={(e) => checkout(e)}>Proceed to Checkout</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
