import "./ProductScreen.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../redux/slices/productSlice";
import { addToCartRedux } from "../redux/slices/cartSlice";
import { useState } from "react";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const addToCart = (itemObject) => {
    dispatch(addToCartRedux(itemObject));
  };

  const [qty, setQty] = useState(1);

  const params = useParams();
  const { products, isLoading } = useSelector(selectProducts);
  //simple way to find index, in a more complex scenario a findIndex function would be used to find the correct data from redux store.
  const productInfo = products[params.id - 1];
  //need to wait for product info to load, for that reason there is a boolean check
  return isLoading ? (
    <h2>Loading...</h2>
  ) : productInfo ? (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left_image">
          <img src={productInfo.image_url} alt="shirt" />
        </div>
        <div className="left_info">
          <p className="left_name">{productInfo.name}</p>
          <p>Price : ${productInfo.price}</p>
          <p>{productInfo.description}</p>
        </div>
      </div>
      <div className="productscreen_right">
        <div className="right_info">
          <p>
            Total Price: <span>${productInfo.price}</span>
          </p>
          <p>
            Status:{" "}
            <span>
              {productInfo.stock_count > 0
                ? `${productInfo.stock_count} In Stock`
                : "Out of Stock"}
            </span>
          </p>

          <p>
            Qty
            {/* The select funtion uses the stock count to display the qtys available */}
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
              {[...Array(productInfo.stock_count).keys()].map((x) => {
                return (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                );
              })}
            </select>
          </p>
          <p>
            <button
              onClick={() =>
                addToCart({
                  id: productInfo.id,
                  qty: parseInt(qty),
                  image_url: productInfo.image_url,
                  name: productInfo.name,
                  price: productInfo.price,
                  stock_count: productInfo.stock_count,
                })
              }
              type="button"
            >
              Add To Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <p>No Item found</p>
  );
};

export default ProductScreen;
