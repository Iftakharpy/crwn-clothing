import { createSlice } from "@reduxjs/toolkit";

import SHOP_DATA from "./shopData";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    SHOP_DATA: SHOP_DATA,
  },
});

const shopReducer = shopSlice.reducer;

export default shopReducer;
