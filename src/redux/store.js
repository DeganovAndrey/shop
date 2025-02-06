import { configureStore } from "@reduxjs/toolkit";

import ordersReducer from "./slices/ordersSlice";
import allItemsReducer from "./slices/allItemsSlice";

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    allItems: allItemsReducer,
  },
});

export default store;
