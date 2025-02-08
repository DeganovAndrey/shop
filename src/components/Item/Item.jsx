import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../../redux/slices/ordersSlice";
import {
  onShowItem,
  selectCurrentItems,
} from "../../redux/slices/allItemsSlice";

import s from "./Item.module.css";

const Item = () => {
  const dispatch = useDispatch();
  const currentItems = useSelector(selectCurrentItems);

  return (
    <div>
      {currentItems.map((item) => (
        <div className={s.item} key={item.id}>
          <img
            src={"./img/" + item.img}
            alt={item.title}
            onClick={() => dispatch(onShowItem(item))}
          />
          <h2>{item.title}</h2>
          <b>{item.price}$</b>
          <div
            className={s.addToCart}
            onClick={() => dispatch(addToOrder(item))}
          >
            +
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;

///////

//   return (
//     <div className={s.item}>
//       {currentItems.map((item) => (
//       <img
//         src={"./img/" + item.img}
//         alt="item.title"
//         onClick={() => dispatch(onShowItem(item))}
//       />
//       <h2>{item.title}</h2>
//       <b>{item.price}$</b>

//       <div className={s.addToCart} onClick={() => dispatch(addToOrder(item))}>
//         +
//       </div>
// ))

// }
//     </div>
//   );
// };

//export default Item;
