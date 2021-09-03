import "./HomeScreen.css";
import Product from "../components/Product";
import { selectProducts } from "../redux/slices/productSlice";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { products, hasError, isLoading } = useSelector(selectProducts);

  return (
    <div className="homescreen">
      <h2 className="homescreen_title">Latest Products</h2>
      <div className="homescreen_products">
        {/* add better loader */}
        {isLoading ? (
          <h2>Loading...</h2>
        ) : hasError ? (
          <h2>{hasError}</h2>
        ) : (
          products.map((product) => {
            return <Product product={product} key={product.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
