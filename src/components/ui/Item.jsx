import { useDispatch } from "react-redux";
import "../../styles/ItemCard.css";
import Button from "./Button";
import { cartActions } from "../../store";
function OrderItem(props) {
  const dispatch = useDispatch();

  function addItem() {
    dispatch(
      cartActions.addItem({
        name: props.name,
        src: props.src,
        price: props.price,
      })
    );
  }

  return (
    <div className="item-card col-3 card">
      <img className="card-img" src={props.src} />
      <div className="desc card-body">
        <h4 className="card-title">{props.name}</h4>
        <p className="card-text">{props.desc}</p>
      </div>
      <div className="price card-footer">
        <div className="price-div">
          <div>₹ {props.price}</div>
          <div>{props.quantity}</div>
        </div>
        <div className="price-btn">
          <button onClick={addItem}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
