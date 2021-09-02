import { Link } from "react-router-dom";
import "./CartItem.css";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img src="../images/shirt1.jpg" alt="shirt 1" />
      </div>

      <Link to={`/product/${1}`}>
        <p>Product 1</p>
      </Link>

      <p className="cartitem_price">$499.99</p>
      <select className="cartitem_select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="cartitem_deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
