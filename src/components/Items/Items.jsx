import Item from "./../Item/Item";
import s from "./Items.module.css";

const Items = ({ items, onShowItem }) => {
  return (
    <div className={s.items}>
      {items.map((item) => (
        <Item key={item.id} item={item} onShowItem={onShowItem} />
      ))}
    </div>
  );
};

export default Items;
