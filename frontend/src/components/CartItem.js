import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = ({ item, qtyChangeHandler, removeFromCart }) => {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img src={item.image_url} alt={item.name} />
      </div>

      <Link to={`/product/${item.id}`}>
        <p className="cartitem_name">{item.name}</p>
      </Link>

      <p className="cartitem_price">£{item.price}</p>
      <select
        className="cartitem_select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.id, parseInt(e.target.value))}
      >
        {[...Array(item.stock_count).keys()].map((x) => {
          return (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          );
        })}
      </select>

      <button
        className="cartitem_deleteBtn"
        onClick={() => removeFromCart(item.id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
