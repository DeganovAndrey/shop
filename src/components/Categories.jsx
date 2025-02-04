import categoriesData from "./../data/categories.json";

const Categories = ({ chooseCategory }) => {
  return (
    <div className="categories">
      {categoriesData.map((category) => (
        <div key={category.key} onClick={() => chooseCategory(category.key)}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
