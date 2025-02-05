import s from "./ShowFullItem.module.css";

const ShowFullItem = ({ item, addToOrder, onShowItem }) => {
  return (
    <div className={s.fullItem}>
      <div>
        <img
          src={"./img/" + item.img}
          alt="item.title"
          onClick={() => onShowItem(item)}
        />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className={s.addToCart} onClick={() => addToOrder(item)}>
          +
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
