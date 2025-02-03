const Order = ({ item }) => {
  return (
    <div className="item">
      <img src={"./img/" + item.img} alt="item.title" />
      <h2>{item.title}</h2>
      <p>{item.price}$</p>
    </div>
  );
};

export default Order;
