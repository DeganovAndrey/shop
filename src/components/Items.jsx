import Item from "./Item";

const Items = ({ addToOrder, items }) => {
  return (
    <main>
      {items.map((item) => (
        <Item key={item.id} item={item} addToOrder={addToOrder} />
      ))}
    </main>
  );
};

export default Items;
