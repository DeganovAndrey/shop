import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [orders, setOrders] = useState([]);

  const addToOrder = (item) => {
    setOrders({ orders: [...orders, item] });
  };

  return (
    <div className="wrapper">
      <Header />
      <Items addToOrder={addToOrder} />
      <Footer />
    </div>
  );
}

export default App;
