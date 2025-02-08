import Item from "./../Item/Item";
import s from "./Items.module.css";

const Items = () => {
  return (
    <div className={s.items}>
      <Item />
    </div>
  );
};

export default Items;
