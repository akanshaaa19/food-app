import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect, useState } from "react";
import OrderItem from "../ui/Item";

import '../../styles/order.css'

function Order() {
  const [foodItems, setFoodItems] = useState([]);
  async function getFoodItems() {
    const querySnapshot = await getDocs(collection(db, "food"));
    querySnapshot.forEach((doc) => {
      setFoodItems((previousState) => {
        return [...previousState, doc.data()];
      });
    });
  }

  useEffect(() => {
    getFoodItems();
    console.log('i ran');
  }, []);
  return (
    <section id="order">
    <div className="card-div row">
      {foodItems.map((item) => {
        return (
          <OrderItem
            name={item.name}
            src={item.src}
            desc={item.desc}
            price={item.price}
            quantity={item.quantity}
          />
        );
      })}

    </div>
    </section>
  );
}

export default Order;
