import { useSelector } from "react-redux";
import CartItem from "../ui/CartItem";

import "../../styles/checkout.css";
import CheckoutItem from "../ui/CheckoutItem";

function Checkout() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h2>Cart Items:</h2>
      <div>
        {cartItems.map((item) => {
          return (
            <CheckoutItem
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default Checkout;
