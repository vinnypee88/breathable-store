import "./App.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SuccessScreen from "./screens/SuccessScreen";
import CancelScreen from "./screens/CancelScreen";
import LoginScreen from "./screens/LoginScreen";

//components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

//thunkAction and state import
import { getProducts } from "./redux/thunks/productThunks";
import { selectLoggedIn } from "./redux/slices/userSlice";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const login = useSelector(selectLoggedIn);

  return (
    <Router>
      {/* NavBar */}
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/success" component={SuccessScreen} />
          <Route exact path="/cancel" component={CancelScreen} />
          <Route exact path="/login" component={LoginScreen}>
            {login ? <Redirect to="/" /> : null}
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
