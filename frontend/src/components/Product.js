import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <img src="../images/shirt1.jpg" alt="shirt" />

      <div className="product_info">
        <p className="info_name">Product 1</p>
        <p className="info_description">
          bldhedcfskjvbdsfhkvbcn c dcskhcbved acsdhc vsocsd
        </p>
        <p className="info_price">$499.99</p>
        <Link to={`/product/${1}`} className="info_button">
          view
        </Link>
      </div>
    </div>
  );
};

export default Product;
