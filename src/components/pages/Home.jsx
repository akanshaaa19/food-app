import OrderItem from "../ui/Item";

function Home() {
  return (
    <div>
      <OrderItem
        name="Chicken Tikka"
        src="https://images.pexels.com/photos/9646858/pexels-photo-9646858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        price="285"
        quantity="Half"
        desc="Boneless chicken pieces are marinated with yogurt and spice and then grilled to perfection."
      />
    </div>
  );
}

export default Home;
