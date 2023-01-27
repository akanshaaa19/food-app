import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import _ from "lodash";
import { useEffect, useState } from "react";
import OrderItem from "../ui/Item";

function CategoryPage() {
  const routes = useParams();
  const cuisine = routes.cuisine;

  const [cuisineItems, setCuisineItems] = useState([]);

  async function getCuisine() {
    const q = query(collection(db, "food"), where("category", "==", _.lowerCase(cuisine)));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCuisineItems((previous) => {
        return [...previous, doc.data()];
      });
    });
  }

  useEffect(() => {
    getCuisine();
  }, []);

  return (
    <section>
        <h1>{cuisine}</h1>
      <div className="row category-page-div">
        {cuisineItems.map((item) => {
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

export default CategoryPage;
