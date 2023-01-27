import { useEffect, useState } from "react";
import "../../styles/admin.css";
import OrderItem from "../ui/Item";
import Button from "../ui/Button";

import { doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { uid } from "react-uid";
// import uuid from "uuidv4";

function Admin() {
  const [src, setSrc] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  function nameChangeHandeler(e) {
    setName(e.target.value);
  }

  function srcChangeHandeler(e) {
    setSrc(e.target.value);
  }

  function descChangeHandeler(e) {
    setDescription(e.target.value);
  }

  function quantityChangeHandeler(e) {
    setQuantity(e.target.value);
  }

  function priceChangeHandeler(e) {
    setPrice(e.target.value);
  }

  function categoryChangeHandeler(e){
    setCategory(e.target.value)
  }



  async function submitHandeler(e) {
    e.preventDefault();

    const newFood = {
      name: name,
      src: src,
      price: price,
      quantity: quantity,
      category: category,
      desc: description,
    };

    console.log("submitted");
    await setDoc(doc(db, "food", Math.random().toString()), newFood);
    setName(''); setSrc(''); setCategory(''); setDescription(''); setPrice(''); setQuantity('')
  }

  return (
    <div className="admin">
        <OrderItem
          name={name}
          src={src}
          price={price}
          quantity={quantity}
          desc={description}
        />
      <div>
        <form onSubmit={submitHandeler}>
          <h2>Add Food Item</h2>
          <input
            onChange={nameChangeHandeler}
            value={name}
            placeholder="Name"
          />

          <input
            onChange={priceChangeHandeler}
            value={price}
            placeholder="Price"
          />
          <input
            onChange={quantityChangeHandeler}
            value={quantity}
            placeholder="Quantity"
          />
          <input
            onChange={srcChangeHandeler}
            value={src}
            placeholder="Image Link"
          />

          <input
            onChange={categoryChangeHandeler}
            value={category}
            placeholder="Category"
          />
          <input
            onChange={descChangeHandeler}
            value={description}
            placeholder="Description"
          />
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
