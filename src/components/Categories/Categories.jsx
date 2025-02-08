import { useDispatch } from "react-redux";
import categoriesData from "./../../data/categories.json";
import s from "./Categories.module.css";
import { chooseCategory } from "./../../redux/slices/allItemsSlice";

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.categories}>
      {categoriesData.map((category) => (
        <div
          key={category.key}
          onClick={() => dispatch(chooseCategory(category.key))}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
