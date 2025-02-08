import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addToOrder(state, action) {
      const existingOrder = state.find(
        (order) => order.id === action.payload.id
      ); //Находим элемент по id

      if (!existingOrder) {
        state.push(action.payload); // Добавляем, если такого id нет
      }
    },

    deleteOrder(state, action) {
      return state.filter((order) => order.id !== action.payload); //Этот метод уже корректный
    },
  },
});

export const { addToOrder, deleteOrder } = ordersSlice.actions;
export const selectOrders = (state) => state.orders;
export default ordersSlice.reducer;

//////////////////////////////////

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const ordersSlice = createSlice({
//   name: "orders",
//   initialState,
//   reducers: {
//     addToOrder(state, action) {
//       let isInArray = false;

//       state.forEach((order) => order.id === action.payload);
//       isInArray = true;

//       if (!isInArray) {
//         state.push(action.payload);
//       }
//     },

//     deleteOrder(state, action) {
//       return state.filter((order) => order.id !== action.payload);
//     },
//   },
// });

// export const { addToOrder, deleteOrder } = ordersSlice.actions;
// export const selectOrders = (state) => state.orders;
// export default ordersSlice.reducer;
