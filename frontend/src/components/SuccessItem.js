import "./SuccessItem.css";
import { selectProducts } from "../redux/slices/productSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuccessItem = ({ items }) => {
  const { products } = useSelector(selectProducts);

  return (
    <div className="successitem">
      <h3 className="successitems_title">Your Items</h3>

      {items.map((item) => {
        return (
          <div key={item.id} className="successitems_element">
            <img
              src={products[item.description[0] - 1].image_url}
              alt={item.description.slice(1)}
            ></img>
            <div className="successitems_info">
              <p className="successitem_link">
                <Link to={`/product/${item.description[0]}`}>
                  Item name - {item.description.slice(1)}
                </Link>
              </p>
              <p>
                Item description -{" "}
                {products[item.description[0] - 1].description}
              </p>
              <p>Quantity - {item.quantity}</p>
              <p>Unit Price - £{item.price.unit_amount / 100}</p>
              <p>Subtotal - £{item.amount_total / 100}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SuccessItem;
