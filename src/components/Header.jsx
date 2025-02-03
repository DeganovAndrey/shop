import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const Header = ({ orders }) => {
  let [cartOpen, setCartOpen] = useState(false);
  const handleCartOpen = () => {
    setCartOpen((cartOpen = !cartOpen));
  };

  const showOrders = (orders) => {
    return orders.map((order) => <Order key={order.id} item={order} />);
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    );
  };
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={handleCartOpen}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
