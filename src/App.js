import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [orders, setOrders] = useState([]);

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

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Items addToOrder={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;
