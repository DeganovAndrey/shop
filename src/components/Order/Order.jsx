import { FaTrash } from "react-icons/fa6";
import { deleteOrder, selectOrders } from "../../redux/slices/ordersSlice";
import s from "./Order.module.css";
import { useDispatch, useSelector } from "react-redux";

const Order = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  return (
    <div>
      {orders.map((order) => (
        <div className={s.item} key={order.id}>
          <img src={"./img/" + order.img} alt={order.title} />
          <h2>{order.title}</h2>
          <p>{order.price}$</p>
          <FaTrash
            onClick={() => dispatch(deleteOrder(order.id))}
            className={s.deleteItem}
          />
        </div>
      ))}
    </div>
  );
};

export default Order;
