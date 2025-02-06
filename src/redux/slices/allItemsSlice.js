import { createSlice } from "@reduxjs/toolkit";
import items from "../../data/staffs.json";

const initialState = {
  currentItems: [...items],
  fullItems: {},
  showFullItems: false,
};

const allItemsSlice = createSlice({
  name: "allItems",
  initialState,
  reducers: {},
});

export const {} = allItemsSlice.actions;
export const select = (state) => state.allItems.allItems;
export default allItemsSlice.reducer;
