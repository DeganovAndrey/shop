import { createSlice } from "@reduxjs/toolkit";
import items from "../../data/staffs.json";

const initialState = {
  currentItems: [...items],
  fullItems: [], // Изменено на пустой массив
  showFullItems: false,
};

const allItemsSlice = createSlice({
  name: "allItems",
  initialState,
  reducers: {
    chooseCategory(state, action) {
      if (action.payload === "all") {
        state.currentItems = [...items];
        return;
      }
      state.currentItems = items.filter((el) => el.category === action.payload);
    },

    onShowItem(state) {
      state.fullItems = state.currentItems.map((item) => item);
      state.showFullItems = !state.showFullItems;
    },
  },
});

export const { chooseCategory, onShowItem } = allItemsSlice.actions;

export const selectCurrentItems = (state) => state.allItems.currentItems;
export const selectFullItems = (state) => state.allItems.fullItems;
export const selectShowFullItems = (state) => state.allItems.showFullItems;

export default allItemsSlice.reducer;

// chooseCategory(state, action) {
//   if (category === "all") {
//     setCurrentItems(items);
//     return;
//   }
//   setCurrentItems(items.filter((el) => el.category === category));
// },

// onShowItem(state, action) {
//   setFullItem(item);
//   setShowFullItems(!showFullItems);
// },

///////////////////////////////////////////////////////////////

//мой вариант

// const allItemsSlice = createSlice({
//   name: "allItems",
//   initialState,
//   reducers: {
//     chooseCategory(state, action) {
//       if (action.payload === "all") {
//         state.currentItems = action.payload.items;
//         return;
//       }
//       state.currentItems = state.items.filter(
//         (el) => el.category === action.payload
//       );
//     },

//     onShowItem(state, action) {
//       return {
//         ...state,
//         fullItems: state.currentItems.forEach((item) => item),
//         state.showFullItems = !state.showFullItems;
//       };
//     },
//   },
// });

// export const { chooseCategory, onShowItem } = allItemsSlice.actions;
