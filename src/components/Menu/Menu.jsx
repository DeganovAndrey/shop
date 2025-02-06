import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Order from "../Order/Order";
import { selectOrders } from "../../redux/slices/ordersSlice";

import s from "./Menu.module.css";

const Menu = () => {
  const orders = useSelector(selectOrders);

  let [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen((cartOpen = !cartOpen));
  };

  const showOrders = (orders) => {
    let summa = 0;
    orders.forEach((order) => (summa += Number.parseFloat(order.price)));
    return (
      <div>
        {orders.map((order) => (
          <Order key={order.id} item={order} />
        ))}
        <p className={s.summa}>Итоговая сумма: {summa.toFixed(2)}$</p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className={s.empty}>
        <h2>Товаров нет</h2>
      </div>
    );
  };

  return (
    <div className={s.menu}>
      <span className={s.logo}>House Staff</span>
      <ul className={s.nav}>
        <li>
          <NavLink to="." end>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="all">Все товары</NavLink>
        </li>
        <li>
          <NavLink to="about">Про нас</NavLink>
        </li>
        <li>
          <NavLink to="contacts">Контакты</NavLink>
        </li>
        <li>
          <NavLink to="cabinet">Кабинет</NavLink>
        </li>
      </ul>
      <FaShoppingCart onClick={handleCartOpen} className={s.shopCartButton} />

      {cartOpen && (
        <div className={s.shopCart}>
          {orders.length > 0 ? showOrders(orders) : showNothing()}
        </div>
      )}
    </div>
  );
};

export default Menu;
