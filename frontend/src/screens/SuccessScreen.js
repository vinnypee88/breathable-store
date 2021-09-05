import "./SuccessScreen.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOrderDetails } from "../redux/thunks/orderThunks";
import { useDispatch } from "react-redux";
import { emptyCartRedux } from "../redux/slices/cartSlice";

import SuccessItem from "../components/SuccessItem";
import SuccessDetails from "../components/SuccessDetails";

const SuccessScreen = () => {
  //empty cart on render??????

  const [itemArray, setItemArray] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState({});
  const [orderId, setOrderId] = useState("");
  const [customerName, setCustomerName] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const itemsArrayResolved = async () => {
      try {
        const items = await dispatch(getOrderDetails());
        setItemArray(items.payload.line_items.data);
        setSubTotal(items.payload.amount_subtotal);
        setTotal(items.payload.amount_total);
        setShipping(items.payload.shipping.address);
        setOrderId(items.payload.payment_intent);
        setCustomerName(items.payload.shipping.name);
        dispatch(emptyCartRedux());
      } catch (error) {
        console.log(error);
      }
    };
    itemsArrayResolved();
  }, [dispatch]);

  return (
    <div className="successscreen">
      <h2 className="successscreen_title">
        Success {customerName} - Your Order is being processed
      </h2>
      <p className="successscreen_notification">
        {" "}
        You will recieve an email notification when the items have dispatched
      </p>

      <div className="successdetails">
        <SuccessDetails
          shipping={shipping}
          subtotal={subtotal}
          total={total}
          orderId={orderId}
          customerName={customerName}
        />
      </div>

      <div className="successitems_list">
        <SuccessItem items={itemArray} />
      </div>

      <div className="successscreen_returnbutton">
        {" "}
        <Link className="successscreen_returnbuttonlink" to="/">
          Return To Store
        </Link>
      </div>
    </div>
  );
};

export default SuccessScreen;
