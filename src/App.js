import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";
import items from "./../src/data/staffs.json";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([...items]);
  const [showFullItems, setShowFullItems] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((order) => {
      if (order.id === item.id) isInArray = true;
    });
    if (!isInArray) setOrders([...orders, item]);
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter((el) => el.category === category));

    console.log(category);
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItems(!showFullItems);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items
        onShowItem={onShowItem}
        items={currentItems}
        addToOrder={addToOrder}
      />
      {showFullItems && (
        <ShowFullItem
          item={fullItem}
          addToOrder={addToOrder}
          onShowItem={onShowItem}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
