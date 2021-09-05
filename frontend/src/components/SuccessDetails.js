import "./SuccessDetails.css";

const SuccessDetails = ({
  shipping,
  subtotal,
  orderId,
  customerName,
  total,
}) => {
  return (
    <div className="shippingdetails_container">
      <h3 className="ordersummary_title">Order Summary</h3>
      <p className="ordersummary_orderid">Order Id - {orderId}</p>
      <p>
        Total Cost - <strong>£{subtotal / 100}</strong>
      </p>
      <p>
        Total Cost Including Delivery - <strong>£{total / 100}</strong>
      </p>
      <h4 className="shippingaddress_title">Shipping Address</h4>
      <p>{customerName}</p>
      <p>{shipping.line1}</p>
      <p>{shipping.line2}</p>
      <p>{shipping.postal_code}</p>
      <p>{shipping.city}</p>
    </div>
  );
};

export default SuccessDetails;
