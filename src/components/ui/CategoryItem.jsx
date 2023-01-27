import "../../styles/category.css";
import { Link } from "react-router-dom";
function CategoryItem(props) {
  return (
    <div className="category card col-3">
      <Link to={`/cuisines/${props.name}`}>
        <img src={props.src} />
        <div>
          <h4>{props.name}</h4> <i class="fa-solid fa-chevron-right fa-lg"></i>
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
