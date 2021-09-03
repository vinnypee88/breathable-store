import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image_url} alt={product.name} />

      <div className="product_info">
        <p className="info_name">{product.name}</p>
        {/* not using description in the homepage for now because long descriptions skew the styling
        can use description.substring(0,100) to display only the first 100 characters*/}
        {/* <p className="info_description">{product.description}</p> */}
        <p className="info_price">${product.price}</p>
        <Link to={`/product/${product.id}`} className="info_button">
          view
        </Link>
      </div>
    </div>
  );
};

export default Product;
