import { NavLink } from "react-router-dom";
import Button from "./Button";
import "../../styles/navigation.css";

import { useDispatch, useSelector } from "react-redux";
import { authActions, uiActions } from "../../store";
import Modal from "./Cart";
import AuthPage from "../pages/AuthPage";

function Navigation() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => {
    return state.ui.showCart;
  });
  const showAuth = useSelector((state) => state.ui.showAuth);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  function fun() {
    dispatch(uiActions.showCart(true));
  }
  function showAuthHandeler() {
    dispatch(uiActions.showAuth(true));
  }
  return (
    <nav>
      {showCart && <Modal />}
      {showAuth && <AuthPage />}
      <h4>food</h4>
      <ul>
        <NavLink activeClassName="active" to="/home">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/cuisines">
          Order
        </NavLink>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
        <NavLink activeClassName="active" to="/admin">
          Admin
        </NavLink>
      </ul>

      <div className="right">
        <i onClick={fun} className="fa-solid fa-cart-shopping fa-2x"></i>
        {isLoggedIn && (
          <Button
            onClick={() => {
              dispatch(authActions.signOut());
            }}
            class="inverted btnc"
          >
            Sign Out
          </Button>
        )}
        {!isLoggedIn && (
          <Button
            onClick={() => {
              showAuthHandeler();
            }}
          >
            Sign In
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
