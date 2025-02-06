import { useDispatch } from "react-redux";
import { addToOrder } from "../../redux/slices/ordersSlice";
import s from "./Item.module.css";

const Item = ({ item, onShowItem }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
      <img
        src={"./img/" + item.img}
        alt="item.title"
        onClick={() => onShowItem(item)}
      />
      <h2>{item.title}</h2>
      <b>{item.price}$</b>
      <div className={s.addToCart} onClick={() => dispatch(addToOrder(item))}>
        +
      </div>
    </div>
  );
};

export default Item;
