import s from "./Item.module.css";

const Item = ({ item, addToOrder, onShowItem }) => {
  return (
    <div className={s.item}>
      <img
        src={"./img/" + item.img}
        alt="item.title"
        onClick={() => onShowItem(item)}
      />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <div className={s.addToCart} onClick={() => addToOrder(item)}>
        +
      </div>
    </div>
  );
};

export default Item;
