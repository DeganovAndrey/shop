import { useDispatch, useSelector } from "react-redux";
import { addToOrder } from "../../redux/slices/ordersSlice";
import { onShowItem, selectFullItems } from "../../redux/slices/allItemsSlice";

import s from "./ShowFullItem.module.css";

const ShowFullItem = () => {
  const dispatch = useDispatch();
  const fullItem = useSelector(selectFullItems);

  if (!fullItem) {
    return;
  }

  const { img, title, desc, price, id } = fullItem;

  return (
    <div className={s.fullItem}>
      <div>
        <img
          src={"./img/" + img}
          alt={title}
          onClick={() => dispatch(onShowItem(fullItem))}
        />
        <h2>{title}</h2>
        <p>{desc}</p>
        <b>{price}$</b>
        <div
          className={s.addToCart}
          onClick={() => dispatch(addToOrder(fullItem))}
        >
          +
        </div>
      </div>
    </div>
  );
};

// const ShowFullItem = () => {
//   const dispatch = useDispatch();
//   const fullItems = useSelector(selectFullItems);

//   return (
//     <div className={s.fullItem}>
//       <div>
//         <img
//           src={"./img/" + fullItems.img}
//           alt="item.title"
//           onClick={() => dispatch(onShowItem(fullItems))}
//         />
//         <h2>{fullItems.title}</h2>
//         <p>{fullItems.desc}</p>
//         <b>{fullItems.price}$</b>
//         <div
//           className={s.addToCart}
//           onClick={() => dispatch(addToOrder(fullItems))}
//         >
//           +
//         </div>
//       </div>
//     </div>
//   );
// };

export default ShowFullItem;
