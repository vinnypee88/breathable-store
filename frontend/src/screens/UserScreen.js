import "./UserScreen.css";
import { selectLoggedIn, selectUserDetails } from "../redux/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import PreviousOrder from "../components/PreviousOrder";
import { getOrderHistory } from "../redux/thunks/orderHistoryThunks";
import { selectOrderHistory } from "../redux/slices/orderHistorySlice";

const UserScreen = () => {
  const deleteAccount = async (e) => {
    //TODO potentially add a confirmation message so the user is sure??
    e.preventDefault();
    await fetch("/api/auth/login", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    window.location = "/";
  };

  const dispatch = useDispatch();

  const user = useSelector(selectUserDetails);
  const loggedIn = useSelector(selectLoggedIn);
  const { previousOrders } = useSelector(selectOrderHistory);

  return (
    <div className="user_screen">
      <h2 className="user_screen_title">Your Account</h2>
      {loggedIn ? (
        <>
          <div className="user_information">
            <div className="user_detail">
              <p>First Name</p>
              <p className="user_data">{user.userInfo.first_name}</p>
            </div>
            <div className="user_detail">
              <p>Last Name</p>
              <p className="user_data">{user.userInfo.last_name}</p>
            </div>
            <div className="user_detail">
              <p>Email</p>
              <p className="user_data">{user.userInfo.email}</p>
            </div>
            <div className="user_detail">
              <p>Address Line 1</p>
              <p className="user_data">{user.userInfo.address_line_1}</p>
            </div>
            <div className="user_detail">
              <p>Address Line 2</p>
              <p className="user_data">{user.userInfo.address_line_2}</p>
            </div>
            <div className="user_detail">
              <p>Postcode</p>
              <p className="user_data">{user.userInfo.postcode}</p>
            </div>
            <button
              onClick={(e) => {
                deleteAccount(e);
              }}
            >
              Delete Account
            </button>
          </div>

          <div className="order_information">
            <h2 className="order_information_title">Previous Orders</h2>
            <button
              onClick={() => {
                dispatch(getOrderHistory());
              }}
            >
              View
            </button>
          </div>
          {previousOrders.length === 0 ? (
            <div></div>
          ) : (
            previousOrders.map((order) => {
              return <PreviousOrder order={order} key={order.id} />;
            })
          )}
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default UserScreen;
