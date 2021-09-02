import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left_image">
          <img src="../images/shirt1.jpg" alt="shirt" />
        </div>
        <div className="left_info">
          <p className="left_name">Product 1</p>
          <p>Price : $499.99</p>
          <p>Description blah blah</p>
        </div>
      </div>
      <div className="productscreen_right">
        <div className="right_info">
          <p>
            Price: <span>$499.99</span>
          </p>
          <p>
            Status: <span>In stock</span>
          </p>
          <p>
            Qty
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
