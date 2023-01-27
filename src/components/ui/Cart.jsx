import ReactDOM from "react-dom";
import CartItem from "./CartItem";
import { Fragment } from "react";

import "../../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { uiActions } from "../../store";



function Backdrop(props){

  const dispatch = useDispatch();
  function closeCart(){
    dispatch(uiActions.showCart(false))
  } 
  return <div onClick={closeCart} className="backdrop">
    {props.children}
  </div>
}

function CartOverLay(props) {
  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });
  const total = useSelector((state) => {
    return state.cart.totalCost;
  });
  return (
    <div className="cart">
      <div className="cart-container">      
      <h2>Cart</h2>
        {cartItems.map((food) => {
          return (
            <CartItem
              name={food.name}
              quantity={food.quantity}
              price={food.price}
            />
          );
        })}
        {cartItems.length === 0 ? <p className="no-item-p">No Items to diplay</p> : null}
      {cartItems.length === 0 ? null : <div className="cart-footer">
        <h4>Total Cost: ₹ {total}</h4>
        <Button className='filled btnc'>Place Order</Button>
      </div>}
      </div>
      
    </div>
  );
}

function Cart() {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlay-hook")
      )}
      {ReactDOM.createPortal(
        <CartOverLay />,
        document.getElementById("overlay-hook")
      )}
    </Fragment>
  );
}

export default Cart;
