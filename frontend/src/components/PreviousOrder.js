import "./PreviousOrder.css";

const PreviousOrder = ({ order }) => {
  return (
    <>
      <div className="previous_order">
        <div>
          <p className="previous_order_order_id">Order Id - {order.id}</p>
          <p>Date of Order - {order.order_date.substring(0, 10)}</p>
          <p>Total Cost - £{order.order_total / 100}</p>
        </div>
        <div>
          {order.items.map((item) => {
            return (
              <>
                <p className="previous_order_item_id">
                  Product Id - {item.product_id}
                </p>
                <p>Quantity Purchased - {item.quantity}</p>
                <p>Price Paid - £{item.price / 100}</p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PreviousOrder;
