import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

function CartItem(props) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <div>
        <h5>{props.name}</h5>
        <p>
        ₹ {props.price}
        </p>
      </div>
      <div className="add-item-btn">
        <button onClick={()=>{dispatch(cartActions.addItem({name: props.name, price: props.price}))}}>
          <i class="fa-solid fa-plus"></i>
        </button>
        <div>{props.quantity}</div>
        <button onClick={()=>{dispatch(cartActions.removeItem(props.name))}}>
          <i class="fa-solid fa-minus"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
