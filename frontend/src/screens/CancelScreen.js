import "./CancelScreen.css";
import { Link } from "react-router-dom";

const CancelScreen = () => {
  return (
    <div className="cancelscreen">
      <h2>Order Cancelled</h2>
      Your Order has been cancelled <br></br>
      <br></br>{" "}
      <Link to="/">
        <h3>Go To Store</h3>
      </Link>
    </div>
  );
};

export default CancelScreen;
