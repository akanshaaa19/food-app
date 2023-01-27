import { useDispatch } from "react-redux";
import { cartActions } from "../../store";

function CheckoutItem(props) {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <h5>{props.name}</h5>
      <p>
        {props.quantity} x ₹ {props.price}
      </p>
      <div className="add-item-btn">
        <button
          onClick={() => {
            dispatch(
              cartActions.addItem({ name: props.name, price: props.price })
            );
          }}
        >
          <i class="fa-solid fa-plus"></i>
        </button>
        <div>{props.quantity}</div>
        <button
          onClick={() => {
            dispatch(cartActions.removeItem(props.name));
          }}
        >
          <i class="fa-solid fa-minus"></i>
        </button>
      </div>
    </div>
  );
}

export default CheckoutItem;
