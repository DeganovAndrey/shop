import categoriesData from "./../../data/categories.json";
import s from "./Categories.module.css";

const Categories = ({ chooseCategory }) => {
  return (
    <div className={s.categories}>
      {categoriesData.map((category) => (
        <div key={category.key} onClick={() => chooseCategory(category.key)}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
