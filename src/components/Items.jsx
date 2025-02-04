import Item from "./Item";

const Items = ({ addToOrder, items, onShowItem }) => {
  return (
    <main>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          addToOrder={addToOrder}
          onShowItem={onShowItem}
        />
      ))}
    </main>
  );
};

export default Items;
