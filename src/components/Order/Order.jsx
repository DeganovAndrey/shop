import { FaTrash } from "react-icons/fa6";
import s from "./Order.module.css";

const Order = ({ item, onDelete }) => {
  return (
    <div className={s.item}>
      <img src={"./img/" + item.img} alt="item.title" />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
      <FaTrash onClick={() => onDelete(item.id)} className={s.deleteItem} />
    </div>
  );
};

export default Order;
