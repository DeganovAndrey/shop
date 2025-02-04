const ShowFullItem = ({ item, addToOrder, onShowItem }) => {
  return (
    <div className="full-item">
      <div>
        <img
          src={"./img/" + item.img}
          alt="item.title"
          onClick={() => onShowItem(item)}
        />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>
        <div className="add-to-cart" onClick={() => addToOrder(item)}>
          +
        </div>
      </div>
    </div>
  );
};

export default ShowFullItem;
