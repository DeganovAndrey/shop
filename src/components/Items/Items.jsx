import Item from "./../Item/Item";
import s from "./Items.module.css";

const Items = ({ addToOrder, items, onShowItem }) => {
  return (
    <div className={s.items}>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          addToOrder={addToOrder}
          onShowItem={onShowItem}
        />
      ))}
    </div>
  );
};

export default Items;
