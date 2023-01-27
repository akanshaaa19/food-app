import CategoryItem from "../ui/CategoryItem";

import "../../styles/category.css";

function Category() {
  const categories = [
    {
      id: 1,
      name: "Italian",
      src: "https://images.pexels.com/photos/12738630/pexels-photo-12738630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Mughlai",
      src: "https://images.pexels.com/photos/8356148/pexels-photo-8356148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Tibetian",
      src: "https://images.pexels.com/photos/5616129/pexels-photo-5616129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Chinese",
      src: "https://images.pexels.com/photos/343871/pexels-photo-343871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Salad",
      src: "https://images.pexels.com/photos/14571141/pexels-photo-14571141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Desserts",
      src: "https://images.pexels.com/photos/11719203/pexels-photo-11719203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section id="categories">
        <h1>Cuisines</h1>
      <div className="categories row">
        {categories.map((category) => {
          return <CategoryItem key={category.id} name={category.name} src={category.src} />;
        })}
      </div>
    </section>
  );
}

export default Category;
