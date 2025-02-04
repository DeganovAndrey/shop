import { FaTrash } from "react-icons/fa6";

const Order = ({ item, onDelete }) => {
  return (
    <div className="item">
      <img src={"./img/" + item.img} alt="item.title" />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
      <FaTrash onClick={() => onDelete(item.id)} className="delete-item" />
    </div>
  );
};

export default Order;
