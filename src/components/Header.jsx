import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  let [cartOpen, setCartOpen] = useState(false);
  const handleCartOpen = () => {
    setCartOpen((cartOpen = !cartOpen));
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

        {cartOpen && <div className="shop-cart"></div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
};

export default Header;
