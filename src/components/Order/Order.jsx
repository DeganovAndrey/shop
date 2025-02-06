import { FaTrash } from "react-icons/fa6";
import { deleteOrder } from "../../redux/slices/ordersSlice";
import s from "./Order.module.css";
import { useDispatch } from "react-redux";

const Order = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
      <img src={"./img/" + item.img} alt="item.title" />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
      <FaTrash
        onClick={() => dispatch(deleteOrder(item.id))}
        className={s.deleteItem}
      />
    </div>
  );
};

export default Order;
