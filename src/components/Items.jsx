import Item from "./Item";
import items from "./../data/staffs.json";

const Items = ({ addToOrder }) => {
  return (
    <main>
      {items.map((item) => (
        <Item key={item.id} item={item} addToOrder={addToOrder} />
      ))}
    </main>
  );
};

export default Items;
